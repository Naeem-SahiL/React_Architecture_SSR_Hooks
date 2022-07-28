import { MobxContext } from "./MobxContext";
import React from 'react'
import { Counter } from "./Counter";

function MobxContextProvider({ children }) {
    const counter = new Counter();

    return (
        <MobxContext.Provider value={{counter}}>
            {children}
        </MobxContext.Provider>
    )
}

export default MobxContextProvider