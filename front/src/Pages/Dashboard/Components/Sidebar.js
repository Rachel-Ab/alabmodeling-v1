import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link collapsed">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <span
                        className="nav-link collapsed"
                        data-bs-target="#tables-nav"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Charts</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </span>
                    <ul
                        id="tables-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/dashboard/test">
                                <i className="bi bi-circle"></i>
                                <span>Meubles</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <span
                        className="nav-link collapsed"
                        data-bs-target="#charts-nav"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                    >
                        <i className="bi bi-card-list"></i>
                        <span>Meubles Detail</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </span>
                    <ul
                        id="charts-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    ></ul>
                </li>

                <li className="nav-heading">Managing</li>
                <li className="nav-item">
                    <Link to={"/dashboard/test"} className="nav-link collapsed">
                        <i className="bi bi-journal-text"></i>
                        <span>Meubles</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to={"/dashboard/manage/materials"}
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-journal-text"></i>
                        <span>Materials</span>
                    </Link>
                </li>
                <li className="nav-heading">Infos</li>

                <li className="nav-item">
                    <Link
                        to="/dashboard/entreprises"
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-envelope"></i>
                        <span>Contact Entreprises</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
