import React from 'react';
import { CountContext } from '../context';
import { useContext } from 'react';

function Dashboard() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>
                <Count count={setCount}></Count>
            </CountContext.Provider>
        </div>
    );
}

function Count({ setCount }) {
    return (
        <div>
            <CountRenderer />
            <Buttons setCount={setCount}></Buttons>
        </div>
    )
}

function CountRenderer() {
    const { count, setCount } = useContext(CountContext);

    return (
        <div>
            {count}
        </div>
    )
}

function Buttons({ setCount }) {
    const count = useContext(CountContext);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Descrease</button>
        </div>
    )
}

export default Dashboard;
