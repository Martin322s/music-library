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