import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="container">
            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <h2>The page you are looking for doesn't exist.</h2>
                <Link to="/dashboard" className="btn">
                    Back to dashboard
                </Link>
                <img
                    src="http://localhost:3000/assets/img/not-found.svg"
                    className="img-fluid py-5"
                    alt="Page Not Found"
                />
                <div className="credits">
                    Designed by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </section>
        </div>
    );
}
