//Todos=[
//     {tile:string 
//     desc:string 
//     completed: boolean 
//  }
// ]

import { useState } from "react"

export function Todos({todos}){
    const[completed, setCompleted]=useState("false");
    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h1 style={
                        {
                            width:1000,
                            background: "grey"
                        }
                    }>{todo.title}</h1>
                    <h2 style={
                        {
                            width:1000,
                            background: "grey"
                        }}>{todo.desc}</h2>
                    <button onClick={function (){
            fetch("http://localhost:3000/completed",{
                method:"PUT",
                body: JSON.stringify({
                    id: todo._id
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                setCompleted("true");
                alert("done");

            })}}>
                        {(todo.completed==true)?"completed" : "Marks as Done"}
                    </button>


                    <button onClick={function (){
            fetch("http://localhost:3000/delete",{
                method:"DELETE",
                body: JSON.stringify({
                    id: todo._id
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                
             

            })}}>Delete</button>
                </div>

            })
        }
    </div>
}