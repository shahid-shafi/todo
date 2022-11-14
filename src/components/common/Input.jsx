import React from "react";
import "./styles.css";

const Input = ({ name, classes, type, placeholder, OnChange, value }) => {
    return (
        <React.Fragment>
            <div>
                <input value={value} onChange={OnChange} type={type} placeholder={placeholder} name={name} className={classes} id={name} required={true} />
            </div>
        </React.Fragment>
    );
}
export default Input