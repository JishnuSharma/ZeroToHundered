import { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <>
            <input style={{ padding: 10, borderRadius: 5, width: 300 }} type="text" placeholder="Enter todo title" onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
            }} /><br /><br />
            <input style={{ padding: 10, borderRadius: 5, width: 300 }} type="text" placeholder="Enter todo description" onChange={(e) => {
                const value = e.target.value;
                setDescription(value);
            }} /><br /><br />
            <button onClick={
                (e) => {
                    fetch("http://localhost:4000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(async function (res) {
                        const json = await res.json();
                        alert("Todo added");
                    })
                }
            }>Create Todo</button>
        </>
    )
}