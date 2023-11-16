import React,{useState} from "react";
function Employee()
{
    const[emp]=useState([
        {
            id:1,
            name:"ILAMATHI",
            age:22,
            salary:200000,
        },
        {
            id:2,
            name:"PRABA",
            age:23,
            salary:400000,
        },
        {
            id:3,
            name:"IP",
            age:24,
            salary:600000,
        },
    ]);
    return(
        <div>
            <h1>EMPLOYEE DETAILS</h1>
            <hr></hr>
            <table border='1'>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>SALARY</th>
            {emp.map((emp)=>(
                <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.age}</td>
                    <td>{emp.salary}</td>
                </tr>
            ))}
            </table>
        </div>
    );
}
export default Employee;