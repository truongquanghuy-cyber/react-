import css from "./props.module.css"
import { Card } from "./card";
export function mergeCln (...rest) {
    // return "";
    console.log(rest);
    return rest.join(" ");
}
// mergeCln(css.lsp, css.card, css["card-title"], css["card-desc"]);
// mergeCln(css.lsp, css.card, css["card-title"]);
// mergeCln(css.lsp, css.card)
const cards = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      description: "Lorem ipsum dolor sit amet.",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      description: "Lorem ipsum dolor sit amet.",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      description: "Lorem ipsum dolor sit amet.",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      description: "Lorem ipsum dolor sit amet.",
      completed: true,
    },
  ];

export function Props () {
    return <>
       {cards.map((item) => {
        console.log(item);
        return (
            <Card
                key={item.id}
                title={item.title}
                desc={item.description}
                src={"https://i.pravatar.cc/300" + item.id}>
            </Card>
        )
       })}
        {/* <div className={css.card}>
            <div className="card-head">
                <img src="https://i.pravatar.cc/300" alt="" width={200} height={200}/>
            </div>
            <div className="card-body">
                <h3 className={css["card-title"]+ " " + css.lsp }>Lorem ipsum dolor sit amet.</h3>
                <p className={mergeCln(css["card-desc", css.lsp])}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit ducimus deleniti nihil consectetur ea mollitia, modi atque sed doloremque excepturi quos in provident, earum eius natus debitis fugit dolorum?</p>
            </div>
        </div>
        <Card title="sam sung" desc="SS desc" src="https://i.pravatar.cc/300"></Card>
        <Card title="iphone" desc="IP desc" img="https://i.pravatar.cc/200"></Card>
     */}
        <h1 className="abc">hello</h1>
    </>
}
function H1(props) {
    console.log("props" , props)
    return <h1 className="{props.className}">{props.children}</h1>
}

// function Card(props) {
//     console.log(props);
//     return <>
//     <div className={css.card}>
//         <div className="card-head">
//             {/* <img src={props.src ? props.src : (props.img ? props.img : "")} */}
//             <img src= {props.src || props.img}          
//             alt=""
//             width={200} 
//             height={200}/>
//         </div>
//         <div className="card-body">
//             <h3 className={css["card-title"]+ " " + css.lsp }>{props.title}</h3>
//             <p className={mergeCln(css["card-desc"], css.lsp)}>{props.desc} </p>
//         </div>
//     </div>
// </>
// }