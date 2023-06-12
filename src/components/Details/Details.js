import { useContext } from "react";
import { useState } from "react";
import { AlbumContext } from "../../contexts/MusicContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function Details() {
    const { albumId } = useParams();
    const { user } = useContext(AuthContext);
    const { getOneAlbum } = useContext(AlbumContext);
    const [album, setAlbum] = useState({});

    useEffect(() => {
        getOneAlbum(albumId)
            .then(result => setAlbum(result));
    }, [albumId, getOneAlbum]);

    console.log(album);
    return (
        <>
            <section id="details">
                <div id="details-wrapper">
                    <p id="details-title">Album Details</p>
                    <div id="img-wrapper">
                        <img src={album.imageUrl} alt="example1" />
                    </div>
                    <div id="info-wrapper">
                        <p>
                            <strong>Band:</strong>
                            <span id="details-singer">{album.singer}</span>
                        </p>
                        <p>
                            <strong>Album name:</strong>
                            <span id="details-album">{album.album}</span>
                        </p>
                        <p>
                            <strong>Release date:</strong>
                            <span id="details-release">{album.release}</span>
                        </p>
                        <p>
                            <strong>Label:</strong>
                            <span id="details-label">{album.label}</span>
                        </p>
                        <p>
                            <strong>Sales:</strong>
                            <span id="details-sales">{album.sales}</span>
                        </p>
                    </div>
                    <div id="likes">
                        Likes: <span id="likes-count">0</span>
                    </div>
                    {/*Edit and Delete are only for creator*/}
                    {user.accessToken ?
                        (
                            <div id="action-buttons">
                                {user._id === album._ownerId
                                    ?
                                    <>
                                        <Link to="/" id="edit-btn">
                                            Edit
                                        </Link>
                                        <Link to="/" id="delete-btn">
                                            Delete
                                        </Link>
                                    </>
                                    : <Link to="/" id="like-btn">Like</Link>
                                }
                            </div>
                        )
                        : null
                    }
                </div>
            </section>
        </>
    );
}