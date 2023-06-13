import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Edit() {
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

    }, []);

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Album</h2>
                <form className="edit-form">
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