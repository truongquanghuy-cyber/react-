import { useRef, useState, useEffect } from 'react';
import { Input } from './input';
import { Select } from './select';
import { Button } from './button';
import { useNavigate, useSearchParams } from 'react-router';

export function HandleForm({ listStudent, setListStudent, isEdit, studentEdit, setEdit, setStudentEdit }) {
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        msv: "",
        name: "",
        age: "",
        gender: "00",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        msv: "KHONG DUOC BO TRONG",
        name: "KHONG DUOC BO TRONG",
        age: "KHONG DUOC BO TRONG",
        gender: "",
        phone: "",
        email: "",
    });

    const [touches, setTouches] = useState({
        msv: false,
        name: false,
        age: false,
        gender: false,
        phone: false,
        email: false,
    });

    const handleChange = (e) => {
        const newStudent = { ...student, [e.target.name]: e.target.value };
        setStudent(newStudent);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouches({
            msv: true,
            name: true,
            age: true,
            gender: true,
            phone: true,
            email: true,
        });

        if (!handleValidate()) return;
        if (isEdit) {
            const newListStudent = listStudent.map((st) => {
                if (st.msv === student.msv) {
                    return student;
                } else {
                    return st;
                }
            });
            setListStudent(newListStudent);
            setEdit(false);
            setStudentEdit(null);
            navigate(-1);
        } else {
            const newListStudent = [...listStudent, student];
            setListStudent(newListStudent);
            setStudent({
                msv: "",
                name: "",
                age: "",
                phone: "",
                email: "",
                gender: "00",
            });
        }
    };

    const handleValidate = () => {
        let errors = {
            msv: "",
            name: "",
            age: "",
            gender: "",
            phone: "",
            email: "",
        };

        let REGEX_NUMBER = /^\d+$/;
        if (student.msv.trim() === "") {
            errors.msv = "Không được bỏ trống";
        } else if (!REGEX_NUMBER.test(student.msv.trim())) {
            errors.msv = "Không được nhập chữ";
        }

        if (student.name.trim() === "") {
            errors.name = "Không được bỏ trống";
        }

        if (student.age === "") {
            errors.age = "Không được bỏ trống";
        } else if (Number(student.age) <= 0) {
            errors.age = "Tuổi không hợp lệ";
        }

        setErrors(errors);
        const isValid = Object.values(errors).every(field => field === "");

        return isValid;
    };

    function handleBlur(event) {
        handleValidate();
        setTouches({
            ...touches, [event.target.name]: true,
        });
    }

    useEffect(() => {
        if (isEdit) {
            setStudent(studentEdit);
        }
    }, [isEdit, studentEdit]);

    useEffect(() => {
        return () => {
            setEdit(false);
            setStudentEdit(null);
        };
    }, []);

    return <>
        <h1>Tạo SV</h1>
        <form onSubmit={handleSubmit} className="border border-gray-400 p-4 rounded">
            <div className='w-full'>
                <Input
                    label="MSV"
                    type="text"
                    onChange={handleChange}
                    value={student.msv}
                    name="msv"
                    disabled={isEdit}
                    onBlur={handleBlur}
                    placeholder="Nhập mã số sinh viên">
                </Input>
                {touches.msv && errors.msv && <p className="text-red-600">{errors.msv}</p>}
            </div>
            <div>
                <Input value={student.name}
                    label="Họ và tên"
                    type="text"
                    placeholder="Nhập họ và tên"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}>
                </Input>
                {touches.name && errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>
            <div>
                <Input label="Tuổi"
                    type="text"
                    placeholder="Nhập tuổi"
                    onChange={handleChange}
                    name="age"
                    onBlur={handleBlur}
                    value={student.age}>
                </Input>
                {touches.age && errors.age && <p className="text-red-600">{errors.age}</p>}
            </div>
            <Select
                name="gender"
                onChange={handleChange}
                value={student.gender}
                label="Giới tính"
                options={[
                    { name: "Nam", value: "00" },
                    { name: "Nữ", value: "01" },
                    { name: "Khác", value: "11" },
                ]}
            />
            <Input label="SDT"
                type="number"
                placeholder="Nhập SDT"
                onChange={handleChange}
                name="phone"
                value={student.phone}>
            </Input>
            <Input label="email"
                type="text"
                value={student.email}
                onChange={handleChange}
                name="email"
                placeholder="Nhập Email">
            </Input>
            <Button type="submit">{isEdit ? "Update" : "Submit"}</Button>
        </form>
    </>;
}

export function HandleFormDemo() {
    const inputRef = useRef();
    const [name, setName] = useState("cybersoft");

    const handleSubmit = () => {
        console.log(name);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return <>
        <input
            ref={inputRef}
            className="px-4 py-2 border rounded border-black"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
    </>;
}