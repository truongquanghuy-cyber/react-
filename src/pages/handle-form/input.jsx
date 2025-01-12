export function Input(props) {
    // console.log(props.disabled)
    const {label, ...inputProps} = props;
    return (
        <label >
        <p>{props.label}</p>
        <input  className="px-2 py-1 rounded border border-gray-600 block w-full"
                // type={props.type} 
                // placeholder={props.placeholder} 
                // value={props.value}
                // onChange={props.onChange}
                // name={props.name}
                // disabled={props.disabled}
                {...inputProps}
        />
    </label>
    )
}