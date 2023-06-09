import { createContext } from "react";
import * as musicService from "../services/albumService";

export const AlbumContext = createContext();

export const AlbumProvider = ({children}) => {

    return (
        <AlbumContext.Provider value={{
            getAllAlbums: musicService.getAllAlbums,
            getOneAlbum: musicService.getOneAlbum
        }}>
            {children}
        </AlbumContext.Provider>
    );
}