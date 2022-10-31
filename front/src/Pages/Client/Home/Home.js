import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../config";
import ExperienceNav from "../Components/ExperienceNav"
import "./home.css";

export default function Home() {
    function experienceOpenNav() {
        document.getElementById("experience-menu-nav").style.width = "30%";
    }

    return (
        <div id="homepage">
            <h1>Home</h1>
            <div id="home-links-block">
                <div className="home-link">
                    <h2>
                        <Link to="/informations">Informations</Link>
                    </h2>
                </div>
                <div className="home-link" onClick={() => experienceOpenNav()}>
                    <h2>Expériences</h2>
                </div>
                <div className="home-link">
                    <h2>
                        <Link to="">Formations</Link>
                    </h2>
                </div>
                <div className="home-link">
                    <h2>
                        <Link to="/logiciels">Logiciel</Link>
                    </h2>
                </div>
            </div>
            <ExperienceNav />
        </div>
    );
}
