import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");

    return <div>
        <input style={{
            padding:10,
            style:10
        }}type="text" placeholder="title" id="title" onChange={(e)=>{
            setTitle(e.target.value);
        }}></input><br></br>
        <input style={{
            padding:10,
            style:10
        }}type="desc" placeholder="desc" id="desc" onChange={(e)=>{
            setDesc(e.target.value);
        }}></input><br></br>
        <button style={{
            padding:10,
            style:10
        }} onClick={function (){
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title: title,
                    desc:desc
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                alert("Todo added");
            })}}>
            Add a todo
        </button><br></br>
    </div>
}