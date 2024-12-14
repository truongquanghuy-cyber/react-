const theme = {
    light : {
        clr: "black",
        bgc: "yellow"
    },
    dark : {
        clr: "white",
        bgc: "black",
    },
};

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export function Inline() {
    const style = isDark ? "dung" : "sai";
    return (
        <>
        <button style={{color:"blue", fontSize:"100px", border:"1px solid black", borderRadius:"4px"}}>Click Me</button>
        <p style={isDark
            ? {color: theme.dark.clr, backgroundColor: theme.dark.bgc}
            : {color: theme.light.clr, backgroundColor: theme.light.bgc}
        }>Lorem ipsum dolor sit amet.</p>
        </>
    );

   
}