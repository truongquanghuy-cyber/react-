import { Props } from "../../buoi 3/props/props"
import { Btn } from "../../components/button/button";
export function BaitapProps() {
    
    return <>
        <Box bgr="black" text="đen"/>
        <hr />
        <Box  bgr="red" text="đỏ"/>
        <hr />
        <Box  bgr="black" text="đen"/>
        <hr />
        <Box  bgr="black" text="đen"/>
        <Btn handeClick={() => {
            console.log("Adadadada")
        }}>Hello</Btn>
        <Btn handeClick={() => {
            alert("hi");
        }}
        variant="secondary"
        >hi</Btn>
        <Btn variant="primary"  

        > Success</Btn>
        <Btn variant="danger"   

        >Danger</Btn>
        <Btn variant="success"   

        >success</Btn>
        <Btn variant="warning"   

        >Sai</Btn>

    </>
}

function  Box(props) {
    return (
        <>
        <div
            style={{
                width: 100,
                height:100,
                backgroundColor:props.bgr,
            }}>
        </div>
        <span>{props.text}</span>
        </>
    )
}


