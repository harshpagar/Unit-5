import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";



export const Login = () => {
        const {handleToken} = useContext(AuthContext)

    return (
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Email " /> <br /><br />
            <input type="password" placeholder="Password " /><br /><br />
            <button onClick={()=>handleToken("")} > Login </button>
        </>
    )
    
  };