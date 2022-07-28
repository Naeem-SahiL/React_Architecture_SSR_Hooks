import React, { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { counterButtonClicked } from './actions'
import { getNumberOfClicks } from './selectors';


function ConuterButtonRedux() {
    const numOfClicks = useSelector(getNumberOfClicks);
    const [incremetBy, setIncrementBy] = useState(1);
    const dispatch = useDispatch();
    return (
        <>
            <div>Count : {numOfClicks}</div>
            <br />
            <input type='number' onChange={(e) => setIncrementBy(Number(e.target.value))} />
            <button onClick={() => dispatch(counterButtonClicked(incremetBy))}>Click me</button>
        </>
    )
}

export default ConuterButtonRedux 