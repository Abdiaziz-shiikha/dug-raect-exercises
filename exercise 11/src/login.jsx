
import { useState } from "react";

const Login = () => {

    const [userName, setUserName] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const loged = (e) => {
        e.preventDefault();
        setIsLogged(!isLogged);

    }

    return (
        <div>

        <h2> Login Form </h2> 

        {
            !isLogged &&(
                
            <form>
                <label>User Name</label>
                <input type="text" name="user" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                <label>User Password</label>
                <input type="password" name="password" required />
                <button type="button" onClick={loged}>LOGIN</button>
            </form>
            )
        }
           










            {isLogged && (
                <h3>
                    Welcome, {userName},<br></br> <button onClick={() => setIsLogged(false)}>LOGOUT</button>
                </h3>
            )}

        </div>
    )

}

export default Login;