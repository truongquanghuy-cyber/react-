import { useParams,useNavigate } from "react-router";

export function ChiTIetSinhVien (props) {
    const {listStudent, setStudentEdit, setEdit} = props;
    const params = useParams();
    const { msv } = params;
    console.log(listStudent)

    console.log("[msv]", msv);
    const student = listStudent.find(student => student.msv === msv)
    console.log(student);
    const navigate = useNavigate();
    return (
       <>
        <div>
            <p>MSV: {student.msv}</p>
            <p>Full name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>
                Gender: {
                    student.gender === "00" ? "Nam" : student.gender === "01" ? "Nữ" : "Khác"
                }
            </p>
            <p>Phone: {student.phone}</p>
            <p>Email: {student.email}</p>

            <button onClick={() => {
                // navigate(`/handle-form?msv=${msv}&type=edit`)
                navigate(`/handle-form`)
                setEdit(true);
                const studentEdit = listStudent.find((student) => student.msv === msv);
                setStudentEdit(studentEdit);
            }}>Edit</button>
        </div>

        Chi Tiet Sinh Vien 
       </>
    );
}