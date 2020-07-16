
import React from "react";

function Button(props){
    return (
        <div>
        <button onClick={props.func}>{props.context}</button>
        </div>
    )
}
export default  Button;