const baseUrl = "http://localhost:3030/users";

export const registerUser = async (userData) => {
    const res = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    
    return res.json();
}