import React from "react";

function Header() {
    const Logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };
    function sideBar() {
        let element = document.getElementById("dashboard");
        element.classList.toggle("toggle-sidebar");
    }
    return (
        <header
            id="header"
            className="header fixed-top d-flex align-items-center"
        >
            <div className="d-flex align-items-center justify-content-between">
                <a href="" className="logo d-flex align-items-center">
                    <img
                        src="http://localhost:3000/assets/img/logo.png"
                        alt=""
                    />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
                <i
                    className="bi bi-list toggle-sidebar-btn"
                    onClick={() => sideBar()}
                ></i>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown pe-3">
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src="http://localhost:3000/assets/img/profile-img.jpg"
                                alt="Profile"
                                className="rounded-circle"
                            />
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                K. Anderson
                            </span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Kevin Anderson</h6>
                                <span>Artisan</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href=""
                                >
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="#"
                                    onClick={Logout}
                                >
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
