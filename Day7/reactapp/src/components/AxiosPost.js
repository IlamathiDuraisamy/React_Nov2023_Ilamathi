import axios from "axios";
import React,{useState} from "react";
function AxiosPost()
{
    const[name,setName]=useState("");
    const handleChange=(event)=>{
        setName(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/users',{name})
        .then((res)=>
        {
            console.log(res.data);
        })
        .catch((error)=>{
            console.log("Error: "+error);
        });
    };
    return(
        <div>
            AxiosPost
            <form onSubmit={handleSubmit}>
            <input typr="text" value={name} onChange={handleChange}></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AxiosPost;