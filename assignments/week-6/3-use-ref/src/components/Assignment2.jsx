import React, { useState, useRef } from 'react';

export function Assignment2() {
    // useRef to keep track of the render count
    const renderCount = useRef(0);

    // Increment the count whenever the component renders
    renderCount.current++;

    // State to force re-renders
    const [, forceRender] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(prev => prev + 1);
    };

    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}
