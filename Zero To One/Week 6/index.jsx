import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {

    const [value, setValue] = useState(0);

    return <div>
        <input type="text" value={calculateValue(value)} />
        <p>{value}</p>
        <button onClick={function () {
            setValue(value + 1);
        }}>Counter ({value})</button>
    </div>
}