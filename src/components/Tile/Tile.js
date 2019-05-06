import React from "react";
import "./Tile.scss";

const Tile = (props) => (
    <div className={`tile tile${props.className}`}>
        <h2 className={`tileTitle tileTitle${props.className}`}>{props.title}</h2>
        <h3>{props.something}</h3>
        <h3>{props.something}</h3>
        <h3>{props.something}</h3>
    </div>
);

export default Tile;