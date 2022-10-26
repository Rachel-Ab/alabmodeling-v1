import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, images } from "../../../config.js";

function Header() {
    const [information, setInformation] = useState([]);
    const Logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };
    function sideBar() {
        let element = document.getElementById("dashboard");
        element.classList.toggle("toggle-sidebar");
    }

    useEffect(() => {
        fetch(`${api}information/all`)
            .then((res) => res.json())
            .then((json) => setInformation(json.data[0]));
    }, []);

    return (
        <header
            id="header"
            className="header fixed-top d-flex align-items-center"
        >
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center">
                    <img src={`${images}${information.logo}`} alt="" />
                    <span className="d-none d-lg-block">Alabmodeling</span>
                </Link>
                <i
                    className="bi bi-list toggle-sidebar-btn"
                    onClick={() => sideBar()}
                ></i>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown pe-3">
                        <span
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src={`${images}profile-img.svg`}
                                alt="Profile"
                                className="rounded-circle"
                            />
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                {information.name}
                            </span>
                        </span>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{information.name}</h6>
                                <span>{information.titre}</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    to="/dashboard/profile"
                                >
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <div
                                    className="dropdown-item d-flex align-items-center"
                                    href="#"
                                    onClick={Logout}
                                >
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Log Out</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
