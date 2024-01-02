const zod=require('zod');
const createTodo=zod.object({
    title: zod.string(),
    desc: zod.string()
})
const completed= zod.object({
    id: zod.string()
})
// {
//     title: string,
//     desc: string
// }
// {
//     id:string
// }

module.exports={
    createTodo,
    completed
}