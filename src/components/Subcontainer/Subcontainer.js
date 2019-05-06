import React from "react";
import "./Subcontainer.scss";

const Subcontainer = ({ children }) => (
    <section className="subcontainer">
        <div className="gridRow">
            { children }
        </div>
    </section>
);

export default Subcontainer;