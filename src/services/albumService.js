const baseUrl = "http://localhost:3030/data";

export const getAllAlbums = () => fetch(`${baseUrl}/albums?sortBy=_createdOn%20desc`).then(res => res.json());
