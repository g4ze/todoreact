const {
    createTodo,
    completed
}=require('./types.js')
const {Todos}=require('./db')
const express=require('express')
const app=express();
const cors=require('cors');
app.use(cors())
app.use(express.json());


app.delete("/delete", async(req,res)=>{
    const payload=req.body;
    const parsedPayload=completed.safeParse(payload);
    if(!parsedPayload.success){
        res.status(400).send({
            message: "bad body ew"
        })
        return;
    }
    await Todos.deleteOne({ _id: req.body.id }, { $set: { completed: true } });
    res.json({
        message:"DELETED"
    })
    
})

app.post("/todo", async (req,res)=>{
    const payload=req.body;
    const parsedPayload=createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(400).send({
            message: "bad body ew"
        })
        return;
    }
    await Todos.create({
        title: payload.title,
        desc:payload.desc,
        completed: false
    })
    res.status(200).json({
        message: 'todo created'
    })
});
app.get("/todos", async(req, res)=>{
    alltodos=await Todos.find();
    res.status(200).json(alltodos);
});
app.put("/completed", async (req, res)=>{
    const payload=req.body;
    const parsedPayload=completed.safeParse(payload);
    if(!parsedPayload.success){
        res.status(400).send({
            message: "bad body ew"
        })
        return;
    }
    await Todos.updateOne({ _id: req.body.id }, { $set: { completed: true } });
    res.json({
        message:"marked done"
    })
    
});

app.listen(3000,()=>{
    console.log("up and running")
})