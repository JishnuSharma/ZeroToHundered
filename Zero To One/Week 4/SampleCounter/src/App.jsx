import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="card">
                <Button count={count} setCount={setCount} />
                <Button count={count + 1} setCount={setCount} />
                <Button count={count - 1} setCount={setCount} />
            </div>
        </>
    )
}

function Button(props) {
    function onclickHandler() {
        props.setCount(props.count + 1);
    }

    return (
        <>
            <div>
                <button onClick={onclickHandler}>Counter {props.count}</button>
            </div>
        </>
    )
}

export default App
