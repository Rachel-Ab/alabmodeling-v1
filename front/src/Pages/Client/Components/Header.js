import React from "react";
import { images } from "../../../config";
import "./header.css";

export default function Header(props) {
    return (
        <div
            className="side-header"
            style={{ backgroundColor: props.color ? props.color : "" }}
        >
            {props.logoE ? (
                <img
                    className="entreprise-logo"
                    src={props.logoE}
                    alt="entreprise-logo"
                />
            ) : (
                <div></div>
            )}
            <h3>{props.name}</h3>
            <img
                className="alab-logo"
                src={`${images}${props.img}`}
                alt="alab-logo"
            />
        </div>
    );
}
