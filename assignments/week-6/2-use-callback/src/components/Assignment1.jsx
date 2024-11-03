import { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Here we dont make use of the count as dependency because if we call the function on every time count changes
    // in that case the purpose is not solved as the child component does not depend on count but only the parent does
    // Your code starts here
    const handleIncrement = useCallback(() => {
        setCount((count) => count + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount((count) => count - 1);
    }, []);

    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
