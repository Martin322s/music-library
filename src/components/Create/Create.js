import { useContext, useState } from "react";
import * as albumService from "../../services/albumService";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Create() {
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

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const submitHandler = (ev, albumData, token) => {
        ev.preventDefault();
        
        if (!Object.values(albumData).some(x => x === "")) {
            try {
                albumService.createAlbum(token, albumData)
                    .then(() => navigate("/catalog"));
            } catch(err) {

            }
        } else {
            alert("All fields are required!");
        }
    }

    return (
        <section id="create">
            <div className="form">
                <h2>Add Album</h2>
                <form className="create-form" onSubmit={(ev) => submitHandler(ev, data, user.accessToken)}>
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