export function Button(props) {

    return (<button
        {...props}
        className="px-2 py-1 border rounded-md cursor-pointer bg-slate-600 text-white" >
          {props.children}  
    </button>
    )
}
