import {useState} from "react";
export function TangGiamFront () {
    let [fontSize, setFontSize] = useState(30);
    return (
        <>
        <button 
        onClick={() => {
            setFontSize(fontSize + 5)
        }}
        >+</button>
        <button
        onClick={() => {
            setFontSize(fontSize - 5)
        }}
        >-</button>

        <p style={{fontSize:fontSize}}>Lorem ipsum dolor sit amet.</p>
        </>
    )
}