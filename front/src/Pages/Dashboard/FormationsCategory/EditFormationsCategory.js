import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../config";
import "../admin.css";

export default function EditFormationsCategory() {
    const token = JSON.parse(localStorage.getItem("admin"));
    let { slug } = useParams();
    const [category, setCategory] = useState([]);
    const [form, setForm] = useState({
        name: "",
    });

    useEffect(() => {
        fetch(`${api}type/by-slug/${slug}`)
            .then((res) => res.json())
            .then((json) => setCategory(json.data));
    }, []);

    useEffect(() => {
        setForm({
            name: category.name,
            content: category.content,
        });
    }, [category]);

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
                ".edit-category-page .dashboard-form-error"
            ).style.display = "block";
        } else {
            e.preventDefault();
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
                body: JSON.stringify(form),
            };
            fetch(`${api}type/edit/${category.id}`, requestOptions).then(
                () => (window.location.href = "/dashboard/categories")
            );
        }
    }

    return (
        <div className="edit-category-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/dashboard/categories">
                            Formations Categories
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">Modifier</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Modifier une categorie de formations</h4>
                        <p className="dashboard-form-error">
                            Remplir le champ titre
                        </p>
                    </div>
                    <form id="form-information" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label
                                htmlFor="name"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Titre
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
