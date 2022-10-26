import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export default function AddLogiciel() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [form, setForm] = useState({
        name: "",
        content: "",
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
        fetch(`${api}logiciel/add`, requestOptions).then((response) =>
            response.json()
        );
    }
    return (
        <div className="add-logiciel-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/dashboard/logiciels">Logiciels</Link>
                    </li>
                    <li className="breadcrumb-item active">Add</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="card-title"><h4>Ajouter un logiciel</h4></div>
                    <form id="form-information" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label
                                htmlFor="name"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Title
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
                                htmlFor="content"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Informations
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="content"
                                    type="text"
                                    className="form-control"
                                    id="content"
                                    value={form.content || ""}
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
