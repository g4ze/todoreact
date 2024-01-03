const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://nilay:YrQhhHQ658WUosKO@cluster0.ogyb8hy.mongodb.net/');

const todoSchema= new mongoose.Schema({
    title: String,
    desc: String,
    completed:Boolean
})
const Todos=mongoose.model('Todos',todoSchema);
module.exports={Todos}