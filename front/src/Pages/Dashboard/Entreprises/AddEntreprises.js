import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";
import "../admin.css";

export default function AddEntreprise() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [form, setForm] = useState({
        name: null,
        color: "#000000",
        logo: "",
    });

    function handleChange(e) {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        if (form.name == null) {
            e.preventDefault();
            document.querySelector(
                ".add-entreprise-page .dashboard-form-error"
            ).style.display = "block";
        } else {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
                body: JSON.stringify(form),
            };
            fetch(`${api}entreprise/add`, requestOptions).then((response) =>
                response.json()
            );
        }
    }

    return (
        <div className="add-entreprise-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/dashboard/entreprises">Entreprises</Link>
                    </li>
                    <li className="breadcrumb-item active">Ajouter</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Ajouter une entreprise</h4>
                        <p className="dashboard-form-error">
                            Remplir le champ Nom
                        </p>
                    </div>
                    <form id="form-information" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label
                                htmlFor="name"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Nom
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={form.name || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="color"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Couleur
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="color"
                                    type="color"
                                    className="form-control form-control-color"
                                    id="color"
                                    title="choisit une couleur"
                                    value={form.color || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="logo"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Logo
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="logo"
                                    type="logo"
                                    className="form-control"
                                    id="logo"
                                    title="import un logo"
                                    value={form.logo || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary add-buttons"
                            >
                                Sauvegarder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
