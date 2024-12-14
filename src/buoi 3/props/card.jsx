import css from"./props.module.css"
import { mergeCln } from "./props";

export function Card(props) {
    console.log(props);
    return <>
    <div className={css.card}>
        <div className="card-head">
            {/* <img src={props.src ? props.src : (props.img ? props.img : "")} */}
            <img src= {props.src || props.img}          
            alt=""
            width={200} 
            height={200}/>
        </div>
        <div className="card-body">
            <h3 className={css["card-title"]+ " " + css.lsp }>{props.title}</h3>
            <p className={mergeCln(css["card-desc"], css.lsp)}>{props.desc} </p>
        </div>
    </div>
</>
}