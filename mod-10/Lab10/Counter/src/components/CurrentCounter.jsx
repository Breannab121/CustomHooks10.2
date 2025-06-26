import React from 'react';
import { useState, useEffect } from 'react';
import CountHistory from './CountHistory';


function CurrentCounter () {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1);
    const [countHistory, setCountHistory] = useState([]);
    const [status, setStatus] = useState("Changes saved.");

    // Update history every time `count` changes
        useEffect(() => {
            if (count !== 0) {
            setCountHistory(prev => [...prev, count]);
            }
        }, [count]);

        useEffect(() => {
            setStatus("Saving to local storage...");
            
            const timeout = setTimeout(() => {
                setStatus("Changes saved.");
            }, 1000); // Simulate delay

            return () => clearTimeout(timeout); // Clean up
            }, [count]);


    const increment = () => setCount(count + value);
    const decrement = () => setCount(count - value);
    const reset = () => { setCount (0); setValue (1); setCountHistory([]);}
    const stepValueIncrement = () => setValue(value + 1);
    const stepValueDecrement = () => setValue(value - 1);



    return (
        <div>
            <h2>Current Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

            <p>Step Value: {value}</p>
            <button onClick={stepValueIncrement}>▲</button>
            <button onClick={stepValueDecrement} disabled={value === 1}>▼</button>
            
            <p>{status}</p>
            <p className="countText">Count History</p>
            <CountHistory history={countHistory} status={status}/>
        </div> 
    );
}

export default CurrentCounter;