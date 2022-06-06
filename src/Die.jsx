import React from "react";

export default function Die(props) {
    return (
        <div className="die">
            <p>{props.number}</p>
        </div>
    );
}