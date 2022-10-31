import React from "react";
import { Link } from "react-router-dom";
import { images, pathname } from "../../../config";
import "./keywords.css";
import SideMenuKey from "./SideMenuKey";

export default function Keywords(props) {
    function openNav() {
        document.getElementById("side-menu-nav").style.width = "30%";
    }

    return (
        <>
            <div
                className="keyword1-box"
                style={{ borderColor: props.color ? props.color : "" }}
            >
                <h4
                    className="keyword1"
                    style={{ color: props.color ? props.color : "" }}
                >
                    {props.key1}
                </h4>
                <h4 className="keyword2">{props.key2}</h4>
            </div>
            <div
                className="keyword3-box"
                style={{ borderColor: props.color ? props.color : "" }}
            >
                <img
                    className="menu-icon"
                    src={`${images}menu.svg`}
                    alt="menu icon"
                    onClick={() => openNav()}
                />
                <h4 className="keyword3">{props.key3}</h4>
            </div>
            <div
                className="keyword4-box"
                style={{ borderColor: props.color ? props.color : "" }}
            >
                <h4 className="keyword4">{props.key4}</h4>
            </div>
            <div className="keyword4-box-void"></div>

            <SideMenuKey />
        </>
    );
}
