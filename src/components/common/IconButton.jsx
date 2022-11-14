import React from "react";
import "./styles.css";

const IconButton = ({taskId, OnClick, btntype, text}) => {

    return ( 
        <React.Fragment>
            <button onClick={() => {OnClick(taskId)}} className={"btn btn-"+btntype}>{text}</button>
        </React.Fragment>
     );
}
 
export default IconButton;