import { useState } from "react";
import { useStorage } from "./useStorage"

export const useLogin = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useStorage('user', {});
    return { 
            user, 
            setUser, 
            loggedIn, 
            setLoggedIn 
        };
}