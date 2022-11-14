import React from "react";
import "./styles.css";

const Button = ({ type, text, classes }) => {

    return (
        <React.Fragment>
            <button type={type} className={`${classes}`}>{text}</button>
        </React.Fragment>
    );
}

export default Button;