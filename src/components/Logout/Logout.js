import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { logoutUser } from "../../services/userService";

export function Logout() {
    const { userLogout } = useContext(AuthContext);

    useEffect(() => {
        userLogout();
        logoutUser();
    }, [userLogout]);
    return <Navigate to="/" replace />
}