import React from "react";

export default function Die(props) {
    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            onClick={props.hold} 
            className="die"
            style={style}
        >
            <p>{props.number}</p>
        </div>
    );
}