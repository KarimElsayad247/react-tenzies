import React from "react";

export default function Die(props) {
    return (
        <div 
            onClick={props.hold} 
            className={`die ${props.isHeld ? "held" : ""}`}
        >
            <p>{props.number}</p>
        </div>
    );
}