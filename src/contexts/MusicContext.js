const { createContext } = require("react");

export const AlbumContext = createContext();

export const AlbumProvider = (children) => {
    return (
        <AlbumContext.Provider>
            {children}
        </AlbumContext.Provider>
    );
}