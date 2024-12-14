export function HandleEvent () {
    const handleClick = (name) => {
        alert(name);
        
    };
   
    return(
        <>
        <button onClick = {() => {handleClick("hello")}}
        >Click hello</button>
        <button onClick ={() => {handleClick("hii")}}
        >Click hi</button>
        </>
    );
}

