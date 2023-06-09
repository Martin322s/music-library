export function DashboardItem() {
    return (
        <li className="card">
            <img src="./images/BackinBlack.jpeg" alt="travis" />
            <p>
                <strong>Singer/Band: </strong>
                <span className="singer">AC/DC</span>
            </p>
            <p>
                <strong>Album name: </strong>
                <span className="album">Back in Black</span>
            </p>
            <p>
                <strong>Sales:</strong>
                <span className="sales">26 million (50 million claimed)</span>
            </p>
            <a className="details-btn" href="/">
                Details
            </a>
        </li>
    );
}