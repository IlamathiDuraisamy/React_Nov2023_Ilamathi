import {useState} from "react";
function Toggle() {
    const[name,setName]=useState("Kaioken");
    const[count,setCount]=useState(0);
    const transformationHandler = ()=> {
        let value=count;
        setCount(++value);
        if(count===3)
        {
            if(name==='Kaioken')
            setName("SuperSaiyan");
            else
            setName("Kaioken");
            setCount(0);
        }
    };
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={transformationHandler}>Toggle</button><br></br>
        </div>
    );
}
export default Toggle;