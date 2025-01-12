import { useState } from "react";
const _useState = (init) => {
    let value = init;
    const setValue = (nValue) => {
        if (typeof nValue === "function"){
            nValue = nValue(value);
        }else {
            value = nValue;
        }
    };
    return [value, setValue];
}

export function StateDemo () {
    const [number, setNumBer] = useState(0);
    return (
        <>
        <h1>{number}</h1>
        <button onClick={() => {
           setNumBer((preNumber) => {
            return preNumber +1;
           });
           setNumBer((preNumber) => {
            return preNumber +1;
           });
           setNumBer((preNumber) => {
            return preNumber +1;
           });
        }}>+1</button>
         <button onClick={() => {
           
        }}>-1</button>
        </>
    )
}