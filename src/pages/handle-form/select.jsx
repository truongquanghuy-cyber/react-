export function Select(props) {
    return (
        <label>
            <p>{props.label}</p>
            <select value={props.value} onChange={props.onChange}  name={props.name} id="" className="px-2 py-1 rounded border border-gray-600 block w-full">
                {props.options.map((op) => {
                    return (
                        <option key={op.value} value={op.value}>{op.name}</option>
                    )
                })}
            </select> 
        </label>
    )
}
