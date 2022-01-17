import { useContext } from "react"
import { Navigate } from "react-router";
import { AuthContext } from "../auth/AuthContext";



export const PrivateRoute = ({ children }) => {
    const {token , userType } = useContext(AuthContext);
    console.log(token)
    if( !token) {
        return <Navigate to ="/login"/>
    }
    return children
}