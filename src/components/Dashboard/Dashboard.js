import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AlbumContext } from "../../contexts/MusicContext";

export function Dashboard() {
    const { getAllAlbums } = useContext(AlbumContext);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAllAlbums()
            .then(result => setAlbums(result));
    }, []);

    return (
        <>
            {/* Dashboard page */}
            <section id="dashboard">
                <h2>Albums</h2>
                <ul className="card-wrapper">
                </ul>
                {/* Display an h2 if there are no posts */}
                <h2>There are no albums added yet.</h2>
            </section>
        </>
    );
}