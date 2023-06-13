import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as albumService from "../../services/albumService";
import { AuthContext } from "../../contexts/AuthContext";

export function Edit() {
    const { albumId } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        singer: "",
        album: "",
        imageUrl: "",
        release: "",
        label: "",
        sales: ""
    });

    useEffect(() => {
        albumService.getOneAlbum(albumId)
            .then(res => setData(res));
    }, [albumId]);

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const submitHandler = (ev, albumData, token) => {
        ev.preventDefault();

        if (!Object.values(data).some(x => x === "")) {
            albumService.editAlbum(albumId, token, albumData)
                .then(() => navigate(`/details/${albumId}`));
        } else {
            alert("All fields are required!");
        }
    }

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Album</h2>
                <form className="edit-form" onSubmit={(ev) => submitHandler(ev, data, user.accessToken)}>
                    <input
                        type="text"
                        name="singer"
                        id="album-singer"
                        placeholder="Singer/Band"
                        value={data.singer}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <input 
                        type="text" 
                        name="album" 
                        id="album-album" 
                        placeholder="Album"
                        value={data.album}
                        onChange={(ev) => changeHandler(ev)} 
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="album-img"
                        placeholder="Image url"
                        value={data.imageUrl}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <input
                        type="text"
                        name="release"
                        id="album-release"
                        placeholder="Release date"
                        value={data.release}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <input 
                        type="text" 
                        name="label" 
                        id="album-label" 
                        placeholder="Label"
                        value={data.label}
                        onChange={(ev) => changeHandler(ev)} 
                    />
                    <input 
                        type="text" 
                        name="sales" 
                        id="album-sales" 
                        placeholder="Sales"
                        value={data.sales}
                        onChange={(ev) => changeHandler(ev)} 
                    />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
}