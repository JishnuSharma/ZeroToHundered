import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <CreateTodo />
            <Todos todos={[
                {
                    title: "First sample",
                    description: "Description sample",
                    completed: false,
                }
            ]} />
        </>
    )
}

export default App
