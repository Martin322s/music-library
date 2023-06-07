import { useStorage } from "./useStorage"

export const useLogin = () => {
    const [user, setUser] = useStorage('user', {});
    return { 
            user, 
            setUser, 
        };
}