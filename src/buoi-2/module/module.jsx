import css from "./index.module.css"
console.log(css);
export function Module() {
    return (
        <>
        <div className={css.box}>Module</div>
        </>
    )
}