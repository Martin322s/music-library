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
            // eslint-disable-next-line
            throw { message: 'Invalid email or passwords don\'t match!' }
        } else {
            return await res.json();
        }
    } catch (err) {
        return err;
    }
}

export const loginUser = async (userData) => {
    try {
        const res = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (res.status !== 200) {
            // eslint-disable-next-line
            throw { message: 'Invalid email or password!' }
        } else {
            return await res.json();
        }
    } catch (err) {
        return err;
    }
}

export const logoutUser = async (token) => {
    try {
        await fetch(`${baseUrl}/logout`, {
            method: "GET",
            headers: {
                'X-Authorization': token
            }
        });
    } catch (error) {
        return err;
    }
}