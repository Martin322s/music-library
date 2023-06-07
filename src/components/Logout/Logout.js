import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function Logout() {
    const { userLogout } = useContext(AuthContext);

    useEffect(() => {
        userLogout();
    }, [userLogout]);
    return <Navigate to="/" replace />
}