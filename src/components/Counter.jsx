"use client"

import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Ajouter un article : {count}</p>
            <button onClick={() => setCount(count + 1)}>AJOUTER</button>
            <button onClick={() => setCount(count - 1)}>RETIRER</button>
        </div>
    );
};

export default Counter;