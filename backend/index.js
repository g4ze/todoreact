const {
    createTodo,
    completed
}=require('./types.js')
const express=require('express')
const app=express();
app.use(express.json());

app.post("/todo", (req,res)=>{
    const payload=req.body;
    const parsedPayload=createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(400).send({
            message: "bad body ew"
        })
        return;
    }
});
app.get("/todos", ()=>{

});
app.put("/completes", ()=>{

});