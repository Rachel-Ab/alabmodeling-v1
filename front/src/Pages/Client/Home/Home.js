import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <div id="homepage">
            <h1>Home</h1>
            <div id="home-links-block">
                <div className="home-link">
                    <h2>
                        <Link to="/informations">Informations</Link>
                    </h2>
                </div>
                <div className="home-link">
                    <h2>Expériences</h2>
                </div>
                <div className="home-link">
                    <h2>
                        <Link to="">Formations</Link>
                    </h2>
                </div>
                <div className="home-link">
                    <h2>
                        <Link to="">Logiciel</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}
