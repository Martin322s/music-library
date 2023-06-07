const baseUrl = "http://localhost:3030/users";

export const registerUser = async (userData) => {
    try {
        const res = await fetch(`${baseUrl}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (res.status !== 200) {
            throw { message: 'Invalid email or passwords don\'t match!' }
        } else {
            return await res.json();
        }
    } catch (err) {
        return err;
    }
}