import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "./context/authentication.context";

const ProtectedRoute = ({ children }: { children: ReactNode}) => {
    const { token } = useContext(AuthContext)

    if(!token) { return <Navigate to="/login"/>  }
    
    return (<>
        {children}
    </>)
}

export default ProtectedRoute