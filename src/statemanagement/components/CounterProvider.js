import { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
    const [numOfClicks, setNumOfClicks] = useState(0);

    const increment = incremetBy => {
        setNumOfClicks(numOfClicks + incremetBy);
    }

    return (
        <CounterContext.Provider value={{ numOfClicks, increment }}>
            {children}
        </CounterContext.Provider>
    )
}