import { useRecoilState, useRecoilValue } from "recoil";
import { todoAtom } from "../store/todo";
import { useState } from "react";

function TodoApp() {

    const [todo, setTodo] = useRecoilState(todoAtom);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const createTodo = () => {
        setTodo([...todo, { title, description }]);
        setTitle('');
        setDescription('');
    }

    return (
        <>
            <input type="text" onBlur={(e) => setTitle(e.target.value)} placeholder="Enter todo title" /><br /><br />
            <input type="text" onBlur={(e) => setDescription(e.target.value)} placeholder="Enter todo description" /><br /><br />
            <button onClick={createTodo}>Create Todo</button>
            <br />
            <br />
            <ListTodos></ListTodos>
        </>
    )
}

function ListTodos() {

    const todos = useRecoilValue(todoAtom);
    console.log(todos);
    return (
        <>
            {todos.length === 0 ? (
                <p>No todos are present yet.</p>
            ) : (
                <>
                    {todos.map((todo, index) => (
                        <div key={index}>
                            {todo.title}
                            {todo.description}
                        </div>
                    ))}
                    <p>There are the listed todos.</p>
                </>
            )}
        </>
    )
}

export default TodoApp;