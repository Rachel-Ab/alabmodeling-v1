import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                {/* <li className="nav-item">
                    <Link to="/dashboard" className="nav-link collapsed">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li> */}
                <li className="nav-heading">Managing</li>
                <li className="nav-item">
                    <Link
                        to={"/dashboard/chantiers"}
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-cone-striped"></i>
                        <span>Chantiers</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to={"/dashboard/entreprises"}
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-building"></i>
                        <span>Entreprises</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to={"/dashboard/formations"}
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-person-workspace"></i>
                        <span>Formations</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/dashboard/categories"} className="nav-link collapsed">
                        <i className="bi bi-clipboard-check"></i>
                        <span>Formations categories</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to={"/dashboard/logiciels"}
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-pc-display"></i>
                        <span>Logiciels</span>
                    </Link>
                </li>

                {/* <li className="nav-heading">Infos</li>
                <li className="nav-item">
                    <Link
                        to="/dashboard/entreprises"
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-envelope"></i>
                        <span>Contact Entreprises</span>
                    </Link>
                </li> */}
            </ul>
        </aside>
    );
}

export default Sidebar;
