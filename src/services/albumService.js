const baseUrl = "http://localhost:3030/data";

export const getAllAlbums = () => fetch(`${baseUrl}/albums?sortBy=_createdOn%20desc`).then(res => res.json());
export const getOneAlbum = (albumId) => fetch(`${baseUrl}/albums/${albumId}`).then(res => res.json());

export const createAlbum = async (token, albumData) => {
    const res = await fetch(`${baseUrl}/albums`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(albumData)
    });
    return res.json();  
}

export const editAlbum = async (albumId, token, albumData) => {
    const res = await fetch(`${baseUrl}/albums/${albumId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(albumData)
    });
    return res.json();  
}

export const deleteAlbum = (albumId, token) => {
    return fetch(`${baseUrl}/albums/${albumId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    });
}

export const getAlbumLikes = (albumId) => 
    fetch(`${baseUrl}/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`)
        .then(res => res.json());