import React, { useState, useContext } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterState } from './counterState'
import { incrementByState } from './incrementByState'
import { noOfClicksSelector } from './noOfCkicksSelector'


function ConuterButtonRecoil() {
    const noOfClicks = useRecoilValue(noOfClicksSelector)
    const [clicksData, setClicksData] = useRecoilState(counterState);
    const [incremetBy, setIncrementBy] = useRecoilState(incrementByState);

    return (
        <>
            <div>Count : {noOfClicks}</div>
            <br />
            <input type='number' onChange={(e) => setIncrementBy(Number(e.target.value))} />
            <button
                onClick={() => setClicksData([...clicksData, { timeStamp: Date.now(), amount: incremetBy }])}
            >Click me</button>
        </>
    )
}

export default ConuterButtonRecoil