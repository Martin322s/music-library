import { Link } from "react-router-dom";

export function DashboardItem({
    _id,
    imageUrl,
    singer,
    album,
    sales
}) {
    return (
        <li className="card">
            <img src={imageUrl} alt={singer} />
            <p>
                <strong>Singer/Band: </strong>
                <span className="singer">{singer}</span>
            </p>
            <p>
                <strong>Album name: </strong>
                <span className="album">{album}</span>
            </p>
            <p>
                <strong>Sales:</strong>
                <span className="sales">{sales}</span>
            </p>
            <Link className="details-btn" to={`/details/${_id}`}>
                Details
            </Link>
        </li>
    );
}