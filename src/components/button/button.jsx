import css from "./button.module.css"
console.log(css)
export function Btn(props) {

    console.log(props)
 let variant = props.variant || "primary";
 if(!["primary","danger","success"].includes(variant)) {
    variant = "secondary";
 }
 return (<>
 <button 
 // rãi tất cả những props nhận đc của button 
 // phải đặt trước những props khác
 {...props}

 // đây là những props khác
 onClick={() => {
    props.handeClick();    
 }}
    className={css[variant]}
 >{props.children}</button>

 </>)
}