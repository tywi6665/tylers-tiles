import React from "react";
import "./Subcontainer.scss";

const Subcontainer = ({ children }) => (
    <section className="subcontainer">
        { children }
    </section>
);

export default Subcontainer;