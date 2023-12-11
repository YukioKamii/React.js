"use client"

import {useEffect, useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count a changé');
    }, [count]); //useEffect ecoute count
    //useEffect sera lancé a chaque chengement de [count]
    
    return (
        <div>
            <p>Ajouter un article : {count}</p>
            <button onClick={() => setCount(count + 1)}>AJOUTER</button>
            <button onClick={() => setCount(count - 1)}>RETIRER</button>
        </div>
    );
};

export default Counter;