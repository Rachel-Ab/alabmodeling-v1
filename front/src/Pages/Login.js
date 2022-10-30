import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(false);
    const [submit, setSubmit] = useState(false);

    const formInfo = {
        username: username,
        password: password,
    };

    useEffect(
        (e) => {
            if (!JSON.parse(localStorage.getItem("admin"))) {
                localStorage.setItem("admin", JSON.stringify(token));
            }

            if (JSON.parse(localStorage.getItem("admin"))) {
                window.location.href = "/dashboard";
            }
        },
        [submit]
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === "") {
            document.getElementById("password-missing").style.display = "block";
        }
        if (username === "") {
            document.getElementById("username-missing").style.display = "block";
        }
        fetch("http://localhost:8000/api/user/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                setSubmit(data.data);
                setToken(data.token);
            });
        setUsername("");
        setPassword("");
    };

    return (
        <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">
                                            Login to Your Account
                                        </h5>
                                        <p
                                            className="text-center small"
                                            id="wrong-login"
                                        >
                                            Enter your username & password to
                                            login
                                        </p>
                                    </div>

                                    <form
                                        className="row g-3 needs-validation"
                                        noValidate
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="col-12">
                                            <label
                                                htmlFor="yourUsername"
                                                className="form-label"
                                            >
                                                Username
                                            </label>
                                            <div className="input-group has-validation">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    id="yourUsername"
                                                    value={username}
                                                    onChange={(e) => {
                                                        setUsername(
                                                            e.target.value
                                                        );
                                                        document.getElementById(
                                                            "username-missing"
                                                        ).style.display =
                                                            "none";
                                                    }}
                                                    required
                                                />
                                                <div
                                                    className="invalid-feedback"
                                                    id="username-missing"
                                                >
                                                    Please enter your username.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label
                                                htmlFor="yourPassword"
                                                className="form-label"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                id="yourPassword"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    document.getElementById(
                                                        "password-missing"
                                                    ).style.display = "none";
                                                }}
                                                required
                                            />
                                            <div
                                                className="invalid-feedback"
                                                id="password-missing"
                                            >
                                                Please enter your password!
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-primary w-100"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="credits">
                                Designed by{" "}
                                <a href="https://bootstrapmade.com/">
                                    BootstrapMade
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
