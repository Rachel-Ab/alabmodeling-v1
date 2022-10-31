import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { images, api } from "../../../config";

export default function ExperienceNav() {
    const [entreprises, setEntreprises] = useState([]);
    const [chantiers, setChantiers] = useState([]);

    useEffect(() => {
        fetch(`${api}entreprise/all`)
            .then((res) => res.json())
            .then((json) => setEntreprises(json.data));
    }, []);

    function experienceCloseNav() {
        document.getElementById("experience-menu-nav").style.width = "0px";
    }
    function colorHover(e, color) {
        e.target.style.color = `${color}`;
    }
    function eraseColorHover(e) {
        e.target.style.color = "white";
    }
    function chantiersNav(id) {
        fetch(`${api}entreprise/byFk/${id}`)
            .then((res) => res.json())
            .then((json) => setChantiers(json.data));
        document.getElementById("chantiers-menu-nav").style.width = "30%";
    }

    function chantiersCloseNav() {
        document.getElementById("chantiers-menu-nav").style.width = "0px";
    }

    function CloseNavAll() {
        document.getElementById("chantiers-menu-nav").style.width = "0px";
        document.getElementById("experience-menu-nav").style.width = "0px";
    }

    return (
        <>
            <div id="experience-menu-nav">
                <h2 className="menu-nav-title">Entreprises</h2>
                <img
                    src={`${images}exit-menu.svg`}
                    alt="exit menu icon"
                    className="exit-menu"
                    onClick={() => experienceCloseNav()}
                />
                <div className="container">
                    <div className="menu-content row">
                        {entreprises.map((entreprise) => {
                            return (
                                <div
                                    className="entreprise-box-spacing col-md-6 col-sm-6 col-6"
                                    key={entreprise.id}
                                >
                                    <div
                                        className="entreprise-box"
                                        onMouseOver={(e) =>
                                            colorHover(e, entreprise.color)
                                        }
                                        onMouseOut={(e) => eraseColorHover(e)}
                                    >
                                        <h3
                                            onClick={() =>
                                                chantiersNav(entreprise.id)
                                            }
                                        >
                                            {entreprise.name}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div id="chantiers-menu-nav">
                <h2 className="menu-nav-title">Chantiers</h2>
                <img
                    src={`${images}exit-menu.svg`}
                    alt="exit menu icon"
                    className="exit-menu"
                    onClick={() => CloseNavAll()}
                />
                <img
                    src={`${images}arrow-left.svg`}
                    alt="return to experience nav bar"
                    className="return-menu"
                    onClick={() => chantiersCloseNav()}
                />
                {chantiers.length !== 0 && (
                    <div className="container">
                        <div className="menu-content row">
                            {chantiers[0].chantiers.map((chantier) => {
                                return (
                                    <div className="entreprise-box-spacing col-md-6 col-sm-6 col-6" key={chantier.id}>
                                        <div className="entreprise-box">
                                            <NavLink
                                                to={`/chantier/${chantier.slug}`}
                                            >
                                                <h3
                                                    className="side-menu-chantier"
                                                >
                                                    {chantier.name}
                                                </h3>
                                            </NavLink>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
