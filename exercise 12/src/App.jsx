import { useState } from "react"


function App(){
  const [count,setCount]=useState(0)
  
  const handleIncreament =()=>{
      setCount(count+1)
  }
   const handleDecreament  =()=>{
      setCount(count-1)
  }
  return(
    <>
    <h1>count</h1>
    <p>count is:{count}</p>
    <button  onClick={handleIncreament}>increament</button>
    <button disabled={count===0} onClick={handleDecreament}>decreament</button>

    </>
  )
}

export default App;