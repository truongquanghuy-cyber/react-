import { MOCK_DATA } from "./_mock_data_";
import { Fragment, useState } from "react";
import { GioHang } from "./gio-hang";
console.log(MOCK_DATA);


export function PhoneShop() {
  const [cart, setCarts] = useState([
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
      soluong: 1 ,
    },
  ]);
  const [sanPham, setSanPham] = useState(MOCK_DATA[0]);
  return (
    <>
      <GioHang cart={cart} setCart={setCarts}></GioHang>
      <div style={{ display: "flex", gap: 20 }}>
        {MOCK_DATA.map((item) => {
          return (
            <Phone
              setCart={setCarts}
              setSanPham={setSanPham}
              key={item.maSP}
              item={item}
              carts={cart}
            ></Phone>
          );
        })}
      </div>
      <Detail sanPham={sanPham}></Detail>
    </>
  );
}


function Phone(props) {
  //    const item = props.item;
  const { item, setSanPham, setCart, carts } = props;
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 20,
      }}
      key={props.item.maSP}
    >
      <div>
        <img src={item.hinhAnh} width={250} alt="" />
      </div>
      <div>
        <p>{item.hinhAnh}</p>
        <button
          onClick={() => {
            setSanPham(item);
          }}
        >
          Xem Chi TIet
        </button>
        <button
        style={{
            marginLeft: 10,
        }}
        onClick={() => {
           //1. kiem tra san pham do co ton tai trong gio hang hay chua
           //2. neu chua thi them vao gio hang so luong la 1 va giu nguyen vi tri
           //3 neu da co roi thi tang sl cua san pham do len 1 don vi 
          const idxItem = carts.findIndex((cart) => {
            return item.maSP === cart.maSP
            // if(item.maSP === cart.maSP) {
            //   return true;
            // }
            // return false;

          });

          if(idxItem > -1 ) {
            const cloneArr = [...carts];

            const item = cloneArr[idxItem];
            item.soluong = item.soluong + 1;
            setCart(cloneArr);
          }else {
            const cloneArr = [...carts, {...item, soluong: 1}];
            setCart(cloneArr);
          }

            // setCart((preCarts) => {
            //     // const cloneArr = preCarts.slice(0, preCarts.length);
            //     const cloneArr = [...preCarts];//spread operatorx
            //     let newItem = {...item, soluong: 1};// copy nhung thuoc tinh item va bo sung them thuoc tinh so luong
            //     console.log(newItem);

            //     cloneArr.push(newItem);

            //     // console.log(preCarts);
            //     return cloneArr;
            // })
        }}>Them vao gio hang</button>
      </div>
    </div>
  );
}

function Detail(props) {
  const { sanPham } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 6fr",
      }}
    >
      <div>
        <h2>Vinsmart Live</h2>
        <img src={sanPham.hinhAnh} width={300} alt="" />
      </div>
      <div>
        <h2>Thông Số Kĩ Thuật</h2>
        <table>
          <tbody>
            <tr>
              <th>Màn Hình</th>
              <td>{sanPham.manHinh}</td>
            </tr>
            <tr>
              <th>Hệ Điều Hành</th>
              <td>{sanPham.heDieuHanh}</td>
            </tr>
            <tr>
              <th>Cam trước</th>
              <td>{sanPham.cameraTruoc}</td>
            </tr>
            <tr>
              <th>Cam sau</th>
              <td>{sanPham.cameraSau}</td>
            </tr>
            <tr>
              <th>ram</th>
              <td>{sanPham.ram}</td>
            </tr>
            <tr>
              <th>rom</th>
              <td>{sanPham.rom}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
