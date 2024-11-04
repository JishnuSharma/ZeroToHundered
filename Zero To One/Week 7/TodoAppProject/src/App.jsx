import { useState } from 'react'
import './App.css'
import TodoApp from './components/Todo'
import { RecoilRoot } from 'recoil'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <RecoilRoot>
                <TodoApp></TodoApp>
            </RecoilRoot>
        </>
    )
}

export default App
