import { createContext, useState } from "react";


export const AuthContext = createContext({token: "", handletoken: () => {},userType:"user",handleUser:()=>{} });

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const handleToken = (token) => {
      setToken(token);
    };

    
    return (
        <AuthContext.Provider value={{ token, handleToken }}>
          {children}
        </AuthContext.Provider>
      );
    };