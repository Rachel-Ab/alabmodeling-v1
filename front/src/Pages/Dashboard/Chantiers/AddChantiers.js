import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export default function AddChantier() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [entreprises, setEntreprises] = useState([]);
    const [form, setForm] = useState({
        name: "",
        architecte: "",
        intro: "",
        specifications: "",
        taches: "",
        img1: "",
        img2: "",
        img3: "",
        entrepriseId: 1,
    });
    function handleChange(e) {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    function handleSubmit() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(form),
        };
        fetch(`${api}chantier/add`, requestOptions).then((response) =>
            response.json()
        );
    }
    useEffect(() => {
        fetch(`${api}entreprise/all`)
            .then((res) => res.json())
            .then((json) => setEntreprises(json.data));
    }, []);
    return (
        <div className="add-logiciel-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/dashboard/chantiers">Chantiers</Link>
                    </li>
                    <li className="breadcrumb-item active">Add</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Ajouter un chantier</h4>
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
                            <label htmlFor="entrepriseId" className="col-md-4 col-lg-3 col-form-label">
                                Select
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <select
                                    className="form-select"
                                    name="entrepriseId"
                                    type="number"
                                    id="entrepriseId"
                                    onChange={handleChange}
                                >
                                    {entreprises.map((entreprise) => {
                                        return (
                                            <option value={entreprise.id} key={entreprise.id}>
                                                {entreprise.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="architecte"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Architecte
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="architecte"
                                    type="text"
                                    className="form-control"
                                    id="architecte"
                                    value={form.architecte || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="intro"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Intro
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="intro"
                                    type="text"
                                    className="form-control"
                                    id="intro"
                                    value={form.intro || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="specifications"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Specifications
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="specifications"
                                    type="text"
                                    className="form-control"
                                    id="specifications"
                                    value={form.specifications || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="name"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Tâches
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="taches"
                                    type="text"
                                    className="form-control"
                                    id="taches"
                                    value={form.taches || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="img1"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Image 1
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="img1"
                                    type="text"
                                    className="form-control"
                                    id="img1"
                                    value={form.img1 || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="img2"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Image 2
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="img2"
                                    type="text"
                                    className="form-control"
                                    id="img2"
                                    value={form.img2 || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="img3"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Image 3
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="img3"
                                    type="text"
                                    className="form-control"
                                    id="img3"
                                    value={form.img3 || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary add-buttons"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
