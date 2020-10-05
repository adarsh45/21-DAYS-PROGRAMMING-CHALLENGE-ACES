import React from "react";
import "./style.css";

const Button = ( {title="Empty string"} )=> {
    return (
        <button className="button">{title}</button>
    );
}

export default Button;