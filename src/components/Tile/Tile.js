import React from "react";
import "./Tile.scss";

const Tile = (props) => (
    <div className="tile">
        <ul>
            <li>{props.something}</li>
            <li>{props.something}</li>
            <li>{props.something}</li>
        </ul>
    </div>
);

export default Tile;