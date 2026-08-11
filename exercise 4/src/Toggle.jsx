import { useState } from "react";


const Togle=()=>{
    const [IsVisible,setIsVisible]= useState(false);
    const handle = ()=>{
        setIsVisible(!IsVisible);
    }
    return (
        <>

        <p>this button is {IsVisible ? 'ON': 'OFF'}</p>
        <button onClick={handle}>Turn {IsVisible ? 'OFF':'ON'}</button>
        
        </>
    )
}

export default Togle;

export const Update = ()=>{
    const [update,setUpdate]=useState({name:"Ahmed",age:24})

    const change=()=>{
        setUpdate({...update, age : update.age + 1})
       
    }

    return(
        <>
        <p>name:{update.name},age:{update.age}</p>
        <button onClick={change}>update age</button>
        </>
    )
}