import React, { useState, useContext } from 'react'
import { CounterContext } from './CounterContext'



function ConuterButton() {
    // const [count, setCount] = useState(0);
    const [incremetBy, setIncrementBy] = useState(1);

    const { numOfClicks, increment } = useContext(CounterContext)
    return (
        <>
            <div>Count : {numOfClicks}</div>
            <br />
            <input type='number' onChange={(e) => setIncrementBy(Number(e.target.value))} />
            <button onClick={() => increment(incremetBy)}>Click me</button>
        </>
    )
}

export default ConuterButton