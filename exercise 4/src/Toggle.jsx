import { useState } from "react";


const Togle=()=>{
    const [IsVisible,setIsVisible]= useState('false');
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