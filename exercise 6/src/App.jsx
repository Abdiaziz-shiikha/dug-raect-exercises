import { useEffect} from "react";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("hello");
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.trim() === "") {
     
      document.title = greeting;
    } else {
      
      document.title = `${greeting} ${name}`;
    }
  }, [greeting, name]); 

  return (
    <div>
      <h2>Enter your Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Change greeting</h2>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
    </div>
  );
}

export default App;
