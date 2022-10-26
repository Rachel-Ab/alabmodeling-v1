import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../config";

export default function EditFormation() {
    const token = JSON.parse(localStorage.getItem("admin"));
    let { slug } = useParams();
    const [logiciel, setLogiciel] = useState([]);
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({
        name: "",
        content: "",
        year: 0,
        typeId: 1,
    });

    useEffect(() => {
        fetch(`${api}formation/by-slug/${slug}`)
            .then((res) => res.json())
            .then((json) => setLogiciel(json.data));
    }, []);
    useEffect(() => {
        fetch(`${api}type/all`)
            .then((response) => response.json())
            .then((json) => setCategories(json.data));
    });
    useEffect(() => {
        setForm({
            name: logiciel.name,
            content: logiciel.content,
            year: logiciel.year,
            typeId: logiciel.typeId,
        });
    }, [logiciel]);

    function handleChange(e) {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(form),
        };
        fetch(`${api}formation/edit/${logiciel.id}`, requestOptions).then(
            () => (window.location.href = "/dashboard/formations")
        );
    }

    return (
        <div className="edit-logiciel-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/dashboard/formations">Logiciels</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Ajouter une formation</h4>
                    </div>
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
                        <div className="row mb-3">
                            <label
                                htmlFor="year"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Année de formation
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <input
                                    name="year"
                                    type="number"
                                    className="form-control"
                                    id="year"
                                    value={form.year || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="typeId" className="col-md-4 col-lg-3 col-form-label">
                                Select
                            </label>
                            <div className="col-md-8 col-lg-9">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="typeId"
                                    type="number"
                                    id="typeId"
                                    onChange={handleChange}
                                    value={form.typeId}
                                >
                                    {categories.map((category) => {
                                        return (
                                            <option
                                                value={category.id}
                                                key={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        );
                                    })}
                                </select>
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
