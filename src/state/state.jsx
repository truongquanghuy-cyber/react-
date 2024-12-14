import { useState } from "react";

export default function State () {
    let [count, setCount] = useState(1);
    let [url, setUrl] = useState("https://i.pravatar.cc/300");
    let [bgc, setBgc] = useState("blue");

    const inc = () => {
    // count += 1;
        setCount(count + 1);

    // console.log(count)
    };

    const desc = () => {
        setCount(count - 1);
    };
    // let bgc = red;
    return<>
    <img src={url} width={100} height={100}></img>
    <button onClick={() => {
        setUrl("https://i.pravatar.cc/200")
    }}>Update</button>
    State
    <p>{count}</p>

    <button onClick={inc}>+</button>
    <button onClick={desc}>-</button>
    
    <div style={{
        width: 100,
        height: 100,
        background: bgc,
    }}></div>
    <button onClick={() => {
        setBgc("red")
    }}>red</button>
    <button onClick={() => {
        setBgc("blue")
    }}>blue</button>
    <button onClick={() => {
        setBgc("green")
    }}>green</button>
    </>
     
}

// let count = 1;
// const inc = () => {
//     count += 1;
// };