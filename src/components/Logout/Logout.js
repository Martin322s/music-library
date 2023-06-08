import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { logoutUser } from "../../services/userService";

export function Logout() {
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        logoutUser(user.accessToken);
        userLogout();
    }, [userLogout]);
    return <Navigate to="/" replace />
}