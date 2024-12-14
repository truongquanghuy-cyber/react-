const test = 'hello';
const renderTitle = () => {
    return "hahaahaha";
};
const firstName = 'nguyen';
const lastName = 'van B';
const fullName = 'NGUYEN VAN C'

const sv = {
    id:1,
    name: "huy",
    age: 4,
}

export function Databinding() {
    return(
        <>
        <button>CLick me {test}</button>
        <div>{renderTitle()}</div>
        <p>{firstName.toUpperCase()}-{lastName.toUpperCase()}</p>
        <p>{fullName.toLowerCase()}</p>

       <table>
        <thead>
            <tr>
               <th>id</th>
               <th>name</th>
               <th>age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{sv.id}</td>
                <td>{sv.name}</td>
                <td>{sv.age}</td>
            </tr>
        </tbody>
       </table>

        </>
      
    )
}