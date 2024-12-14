// nếu như lưu ở file khác thì dùng import
// import tên gọi from "./ đến nơi cần đến"
import { useState } from "react"

export function ThayDoiMauXe() {
    const [src, setSrc] = useState("/products/black-car.jpg" )

    return (
        <>
        <img src={src} alt="" width={400} />
        <button
        onClick={() => {
            setSrc("/products/black-car.jpg" )
        }} 
        >Black</button>
        <button
          onClick={() => {
            setSrc("/products/red-car.jpg" )
          }} 
        >Red</button>
        <button
          onClick={() => {
            setSrc("/products/silver-car.jpg" )
          }} 
        >SIlver</button>
        <button
          onClick={() => {
            setSrc("/products/steel-car.jpg" )
          }} 
        >Steel</button>
        

        </>

        
    )
}