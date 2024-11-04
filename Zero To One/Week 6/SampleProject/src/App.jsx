import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0);

    return <div>
        <button onClick={() => {
            setCounter((prev) => prev + 1);
            setCounter((prev) => prev + 1);
        }}>Click me {counter}</button>
    </div>
}

export default App
