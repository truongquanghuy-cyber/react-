import { useState } from "react";
import { MOCK_DATA } from "./_mock_data_";
import { Props } from "../buoi 3/props/props";
// const sanPham = MOCK_DATA[0];
export function GioHang (props) {
    const {cart, setCart} = props;
    const handleXoasanpham = (maSP) => {
        const newCarts = cart.filter((sanPham) => {
            return sanPham.maSP !== maSP;
        })
        setCart(newCarts)
    };

    const handleTangsoluong = (maSP) => {
        console.log(maSP)
            const newCarts = cart.map((sanPham) => {
                
                console.log(sanPham.maSP === maSP)

                if (sanPham.maSP === maSP){
                    
                    return {
                        ...sanPham,
                        soluong: sanPham.soluong + 1
                    };
                }
                console.log(sanPham);
                return sanPham;
            })
            console.log(newCarts);

            setCart(newCarts);
        
    }

    const handleGiamsoluong = (maSP) => {
        const findItem = cart.find((cart) => cart.maSP === maSP);
        if(findItem.soLuong === 1)
            {handleXoasanpham(maSP);
        }else {
            const newCarts = cart.map((sanPham) => {
                if (sanPham.maSP === maSP){
                    return {
                        ...sanPham,
                        soluong: sanPham.soluong - 1
                    };
                }

                return sanPham;
            })
            setCart(newCarts);
        }
    }

    
    return <>
    <table>
        <thead>
            <tr>
                <th>Mã SP</th>
                <th>Tên</th>
                <th>Hình Ảnh</th>
                <th>Đơn Giá</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
                <th></th>
              
            </tr>
        </thead>
        <tbody>
            {[].map((sanPham) => {
                return (
            <tr key={sanPham.maSP}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>
                    <img src={sanPham.hinhAnh} width={50} />
                </td>
                <td>{sanPham.giaBan}</td>
                <td style={{display:"flex"}}>
                    <button
                    onClick={() => handleGiamsoluong(sanPham.maSP)}
                    >-</button>
                    <p>{sanPham.soluong}</p>
                    <button
                    onClick={() => handleTangsoluong(sanPham.maSP)}
                    >+</button>
                </td>
                <td>{sanPham.giaBan * 1}</td>
                <td><button  onClick={() => handleXoasanpham(sanPham.maSP)}>xóa</button></td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
    </>
}