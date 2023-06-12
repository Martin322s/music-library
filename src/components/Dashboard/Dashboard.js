import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AlbumContext } from "../../contexts/MusicContext";
import { DashboardItem } from "./DashboardItem";

export function Dashboard() {
    const { getAllAlbums } = useContext(AlbumContext);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAllAlbums()
            .then(result => setAlbums(result));
    }, [getAllAlbums]);

    return (
        <>
            <section id="dashboard">
                <h2>Albums</h2>
                <ul className="card-wrapper">
                    {albums.length > 0 ?
                        albums.map(x => <DashboardItem key={x._id} {...x} />)
                        :
                        <h2>There are no albums added yet.</h2>
                    }
                </ul>
            </section>
        </>
    );
}