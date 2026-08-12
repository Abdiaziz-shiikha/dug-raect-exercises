
import {useState , useEffect} from 'react'

function App(){

    const [time,setTime]=useState(0)
    const [isRunning,setIsRunning]=useState(false)

    
    let timerID;
   
    
            useEffect(()=>{
                if(isRunning){
                 timerID=setInterval(()=>{
                    setTime((prev) => prev>0? prev-1: 0 )
                },1000)
            }

                return ()=> clearInterval(timerID);
                },[isRunning ])

    const handleStart = ()=> setIsRunning(true);
    const handleStop = ()=> setIsRunning(false)
    const handleReset = ()=>{
        setIsRunning(false);
        setTime(0)
    }
    

  

    return(
        <>
        <h1>Counter Time</h1>
        <input type="text" placeholder='time' value={time} onChange={(e)=>setTime(Number(e.target.value))} />
        <h1>time-left:{time}</h1>
        <button disabled={isRunning  } onClick={handleStart}>start</button>
        <button disabled={!isRunning && time == 0 } onClick={handleStop}>stop</button>
        <button disabled ={time === 0} onClick={handleReset}>Reset</button>
        </>
    )
}

export default App;