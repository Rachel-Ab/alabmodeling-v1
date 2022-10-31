import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { images, api } from "../../../config";

export default function SideMenuKey() {
    const [entreprises, setEntreprises] = useState([]);
    const [chantiers, setChantiers] = useState([]);

    useEffect(() => {
        fetch(`${api}entreprise/all`)
            .then((res) => res.json())
            .then((json) => setEntreprises(json.data));
    }, []);

    function experienceOpenNav() {
        document.getElementById("experience-menu-nav").style.width = "30%";
    }

    function closeNav() {
        document.getElementById("side-menu-nav").style.width = "0px";
    }

    function CloseNavAll() {
        document.getElementById("chantiers-menu-nav").style.width = "0px";
        document.getElementById("experience-menu-nav").style.width = "0px";
        document.getElementById("side-menu-nav").style.width = "0px";
    }

    function entrepriseCloseNav() {
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

    return (
        <>
            {/* Side menu for home Start */}
            <div id="side-menu-nav">
                <Link to="/">
                    <img
                        src={`${images}home.svg`}
                        alt="home icon"
                        className="home-menu"
                    />
                </Link>

                <img
                    src={`${images}exit-menu.svg`}
                    alt="exit menu icon"
                    className="exit-menu"
                    onClick={() => closeNav()}
                />
                <h2 className="menu-nav-title">Menu</h2>
                <div className="container">
                    <div className="menu-content row">
                        <div className="entreprise-box-spacing col-md-6 col-sm-6 col-6">
                            <div className="entreprise-box">
                                <h2>
                                    <NavLink to="/informations">
                                        Informations
                                    </NavLink>
                                </h2>
                            </div>
                        </div>
                        <div className="entreprise-box-spacing col-md-6 col-sm-6 col-6">
                            <div className="entreprise-box">
                                <h2 onClick={() => experienceOpenNav()}>
                                    Expériences
                                </h2>
                            </div>
                        </div>
                        <div className="entreprise-box-spacing col-md-6 col-sm-6 col-6">
                            <div className="entreprise-box">
                                <h2>
                                    <NavLink to="/formations">
                                        Formations
                                    </NavLink>
                                </h2>
                            </div>
                        </div>
                        <div className="entreprise-box-spacing col-md-6 col-sm-6 col-6">
                            <div className="entreprise-box">
                                <h2>
                                    <NavLink to="/logiciels">Logiciels</NavLink>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Side menu for home End */}
            {/* Side menu for Experiences Start */}
            <div id="experience-menu-nav">
                <h2 className="menu-nav-title">Entreprises</h2>
                <img
                    src={`${images}exit-menu.svg`}
                    alt="exit menu icon"
                    className="exit-menu"
                    onClick={() => CloseNavAll()}
                />
                <Link to="/">
                    <img
                        src={`${images}home.svg`}
                        alt="home icon"
                        className="home-menu"
                    />
                </Link>
                <img
                    src={`${images}arrow-left.svg`}
                    alt="return to experience nav bar"
                    className="return-menu"
                    onClick={() => entrepriseCloseNav()}
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
                                        onMouseOver={
                                            (e) =>
                                                colorHover(e, entreprise.color) //get the data color on hover
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
            {/* Side menu for Experience End */}
            {/* Side menu for Chantiers Start */}
            <div id="chantiers-menu-nav">
                <h2 className="menu-nav-title">Chantiers</h2>
                <img
                    src={`${images}exit-menu.svg`}
                    alt="exit menu icon"
                    className="exit-menu"
                    onClick={() => CloseNavAll()}
                />
                <Link to="/">
                    <img
                        src={`${images}home.svg`}
                        alt="home icon"
                        className="home-menu"
                    />
                </Link>
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
                                    <div
                                        className="entreprise-box-spacing col-md-6 col-sm-6 col-6"
                                        key={chantier.id}
                                    >
                                        <div className="entreprise-box">
                                            <NavLink
                                                to={`/chantier/${chantier.slug}`}
                                            >
                                                <h3 className="side-menu-chantier">
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
            {/* Side menu for Chantiers End */}
        </>
    );
}
