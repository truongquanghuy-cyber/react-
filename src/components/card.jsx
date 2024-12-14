export function Card() {
    // return  (React.createElement("div" ,{className: "card"},
    //   React.createElement("div", {className:"card-content"},"header"),
    //   React.createElement("div",{className:"card-content"},"content")
      return (<div className="card">
        <div className='card-header'>header</div>
        <div className='card-content'>content</div>
      </div>)
    ;
  }