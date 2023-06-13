import { useNavigate, useParams } from "react-router-dom";
import * as albumService from "../../services/albumService";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Delete() {
    const { albumId } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        albumService.deleteAlbum(albumId, user.accessToken)
            .then(() => navigate("/catalog"));
    }, [albumId, navigate, user.accessToken]);
}