import React from "react";
import { Link, useNavigate } from "react-router";
export function DanhSachSinhVien({listStudent, setListStudent, setEdit, setStudentEdit}) {
    const navigate = useNavigate();
    console.log(listStudent);
    const HandleXoa = (msv) => {
      setListStudent((pre) => {
        const newList = pre.filter((student) => student.msv !== msv);
      return newList;
    });
    }

    const handleEditStudent = (msv) => {
        navigate("/handle-form");
        setEdit(true);
        const studentEdit = listStudent.find((student) => student.msv === msv);
        setStudentEdit(studentEdit);
    }


    return (
        <>
        <h1>Danh Sách Sinh Viên</h1>
        {listStudent.length === 0 ? (<p>Không có sinh viên nào</p>) : null}
        <table className="border border-gray-400 w-full">
            <thead>
                <tr>
                    <th className="border border-gray-400">MSV</th>
                    <th className="border border-gray-400">Họ và tên</th>
                    <th className="border border-gray-400">Tuổi</th>
                    <th className="border border-gray-400">Giới tính</th>
                    <th className="border border-gray-400">SĐT</th>
                    <th className="border border-gray-400">Email</th>
                </tr>
            </thead>
            <tbody>
                {listStudent.map((student) => {
                    return (
                        <tr key={student.msv}>
                            <td className="border border-gray-400"><Link to={"/chi-tiet-sinh-vien/"+ student.msv} className="px-1 border border-gray-400">{student.msv}</Link></td>
                            <td className="border border-gray-400"><Link className="underline text-blue-500" to={'/chi-tiet-sinh-vien/' + student.msv}>{student.name}</Link></td>
                            <td className="border border-gray-400">{student.age}</td>
                            <td className="border border-gray-400"> {student.gender === "00" ? "Nam" : student.gender === "01" ? "Nữ" : "Khác"}</td>
                            <td className="border border-gray-400">{student.phone}</td>
                            <td className="border border-gray-400">{student.email}</td>
                                <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => HandleXoa(student.msv)}>xóa</button>
                                <button onClick={() => handleEditStudent(student.msv)} className="px-2 py-1 bg-blue-600 text-white rounded">
                                    Sửa
                                </button>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
        </>
    )
}