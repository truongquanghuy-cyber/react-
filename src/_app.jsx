import React, {useState} from 'react';
// <></> là viết tắt của Fragment
import { Card } from './components/card'
import { Content } from './components/content'
import { Footer } from './components/footer'
import { Header } from './components/header'

import { Inline } from './buoi-2/inline/inline'
import { Databinding } from './buoi-2/data-binding/data-binding'
import { HandleEvent } from './buoi-2/handle-event/handle-event'
import { Global } from './buoi-2/global/global'

import { Module } from './buoi-2/module/module'
import { Props } from './buoi 3/props/props';
import CompState from './state/state'
import { BaitapProps } from './buoi 4/bai-tap/bai-tap';
import { TangGiamFront } from './buoi 4/bai-tap/tanggiamfont';
import { ThayDoiMauXe } from './buoi 4/bai-tap/thaydoimauxe';
import Gallery from './buoi 4/bai-tap/gallery';
import { Gallery2 } from './buoi 4/bai-tap/gallery2';
import { PhoneShop } from './buoi 5/phone-shop';
import { ShoeShop } from './buoi 5/shoe-shop';
import { StateDemo } from './buoi 5/state.demo';
import { GioHang } from './buoi 5/gio-hang';
import { Routes, Route, NavLink, Link } from 'react-router';
import { Home } from './home';
import { Error } from './error';
import { HandleForm } from './pages/handle-form';
import { DanhSachSinhVien } from './pages/danh-sach-sinh-vien';
import { ChiTIetSinhVien } from './pages/chitietsinhvien';
import { TodoPage } from './todo';
export function App() {
    const [listStudent, setListStudent] = useState([]);
    const [isEdit, setEdit] = useState(false);
    const [studentEdit, setStudentEdit] = useState({});
    // phải bao bọc 1 thẻ cha(bắt buộc)
    return (
        <>
            <header>
                <NavLink to="home">Trang Chu</NavLink>
                <br />
                <NavLink to="phone-shop">PhoneShop</NavLink>
                <br />
                <NavLink to="data-binding">DateBinding</NavLink>
                <br />
                <NavLink to="handle-event">HandleEvent</NavLink>
                <br />
                <NavLink to="handle-form">HandleForm</NavLink>
                <br />
                <NavLink to="danh-sach-sinh-vien">DanhSachSinhVien</NavLink>
                <br />
                <NavLink to="chi-tiet-sinh-vien">ChiTietSinhVien</NavLink>
                <br />
                <NavLink to="todo">Todo</NavLink>
            </header>
            {/* gọi card nhiều lần  */}
            {/* <Card></Card>
            <Card></Card>
            <Card></Card>
            <Content></Content>
            <Footer></Footer>
            <Header></Header> */}
            {/* <Inline></Inline> */}
            {/* <Databinding></Databinding> */}
            {/* <HandleEvent></HandleEvent> */}
            {/* <Global></Global> */}
            {/* <Module></Module> */}
            {/* <Props></Props> */}
            {/* <CompState></CompState> */}
            {/* <BaitapProps></BaitapProps>    */}
            {/* <TangGiamFront></TangGiamFront> */}
            {/* <ThayDoiMauXe></ThayDoiMauXe> */}
            {/* <Gallery></Gallery> */}
            {/* <Gallery2></Gallery2> */}
            {/* <PhoneShop></PhoneShop> */}
            {/* <ShoeShop></ShoeShop> */}
            {/* <StateDemo></StateDemo> */}
            {/* <GioHang></GioHang> */}
            <Routes>
                <Route path='*' element={<Error></Error>}></Route>
                <Route index={true} element={<Home></Home>}></Route>
                <Route path='phone-shop' element={<PhoneShop></PhoneShop>}></Route>
                <Route path='home' element={<Home></Home>}></Route>
                <Route path='data-binding' element={<Databinding></Databinding>}></Route>
                <Route path='handle-event' element={<HandleEvent></HandleEvent>}></Route>
                <Route path='handle-form' element={<HandleForm
                    listStudent={listStudent}
                    setListStudent={setListStudent}
                    isEdit={isEdit}
                    studentEdit={studentEdit}
                    setStudentEdit={setStudentEdit}
                    setEdit={setEdit}
                ></HandleForm>}></Route>
                <Route path='danh-sach-sinh-vien' element={<DanhSachSinhVien
                    listStudent={listStudent}
                    setListStudent={setListStudent}
                    setEdit = {setEdit}
                    setStudentEdit={setStudentEdit}
                ></DanhSachSinhVien>}></Route>
                <Route path='chi-tiet-sinh-vien/:msv' element={<ChiTIetSinhVien listStudent={listStudent} setStudentEdit={setStudentEdit} setEdit={setEdit}></ChiTIetSinhVien>}></Route>
                <Route path='todo' element={<TodoPage></TodoPage>}></Route>
            </Routes>
        </>

    );
}

// const promise_1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        if(Math.random() < 0.3){
//         resolve("thành công")
//        } else {
//         reject("thất bại")
//        }
//     }, 1000);

// }

// );

// promise_1
//     .then((responsive) => {
//         console.log(responsive);
//     })