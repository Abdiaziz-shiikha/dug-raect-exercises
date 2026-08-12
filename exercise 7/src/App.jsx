import { useState , useEffect } from "react";

function App(){
   
  const[mouse,setMouseMove]=useState({x:0,y:0})
  
  useEffect(()=>{
        const handleMouse = (e)=>{
           setMouseMove ({ x: e.clientX, y: e.clientY })
          }

         window.addEventListener('mousemove',handleMouse);

         return ()=>{
          window.addEventListener('mousemove',handleMouse)
         }

  },[])
 
  return (
    <div>
      <p>Mouse x :{mouse.x}</p>
      <p>Mouse y :{mouse.y}</p>
    </div>
  )
}

export default App;