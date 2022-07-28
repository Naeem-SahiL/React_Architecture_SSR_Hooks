import { observer } from 'mobx-react-lite';
import React, { useState, useContext } from 'react'
import { MobxContext } from './MobxContext';


function ConuterButtonMobx() {
    const [incremetBy, setIncrementBy] = useState(1);
    const {counter} = useContext(MobxContext)
    return (
        <>
            <div>Count : {counter.numberOfClicks}</div>
            <br />
            <input type='number' onChange={(e) => setIncrementBy(Number(e.target.value))} />
            <button onClick={() => counter.increment(incremetBy)}>Click me</button>
        </>
    )
}

export default observer(ConuterButtonMobx) 