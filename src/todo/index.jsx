import { useState, useEffect } from "react";
let cache = null;

const _useEffect = (callback, dependencies) => {
    let cleanup = null;
}
export function TodoPage() {
    const [listTodo, setListTodo] = useState([]);
    const [c, setC] = useState(0);
    const [l, setL] = useState(0);

    const handleGetAllTodo = () => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((r) => r.json()
                .then((r) => {
                    console.log(r)
                    setListTodo(r);
                })
                .catch((e) => {
                    console.log(e)
                })
            )
    };

    useEffect(() => {
        handleGetAllTodo();
    }, []);

    useEffect (() => {

    },[]);

    useEffect (() => {
        console.log("depen bị rỗng")
    },[]);
    useEffect (() => {
        console.log("render lần đầu")

        return () => {
            console.log("chuẩn bị xóa khỏi giao diện")
            
        }
    },[]);
    useEffect (() => {
        console.log("count change")
        console.log("[like]", l);
        return () => {
            console.log("chuẩn bị cập nhật")
        }
    },[c]);
    useEffect (() => {
        console.log("count change")
        console.log("[like]", l);
        return () => {
            console.log("chưa cập nhật")
        }
    },[l]);
   
    useEffect (() => {
        console.log("like or count change")
      
    },[c, l]);
    useEffect (() => {
       return () => {
        console.log("unmount");
       }
    },[]);
    return (
        <>
            <button onClick={() => {
                setC(c + 1)
            }}>count : {c}</button>

            <button onClick={() => {
                setL(c + 1)
            }}>like : {l}</button>

            <button onClick={handleGetAllTodo}>Get All Todo</button>

            {
                listTodo.length === 0
                    ? "empty" :

                    listTodo.map((todo) => {
                        return <p key={todo.id}>{todo.title}</p>
                    })
            }
        </>
    )
}