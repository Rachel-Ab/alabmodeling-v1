import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../config";
import "../admin.css";

export default function EditLogiciel() {
    const token = JSON.parse(localStorage.getItem("admin"));
    let { slug } = useParams();
    const [logiciel, setLogiciel] = useState([]);
    const [form, setForm] = useState({
        name: "",
        content: "",
    });

    useEffect(() => {
        fetch(`${api}logiciel/by-slug/${slug}`)
            .then((res) => res.json())
            .then((json) => setLogiciel(json.data));
    }, [slug]);

    useEffect(() => {
        setForm({
            name: logiciel.name,
            content: logiciel.content,
        });
    }, [logiciel]);

    function handleChange(e) {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log({ [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        if (
            form.name == "" ||
            form.name == null ||
            form.content == "" ||
            form.content == null
        ) {
            document.querySelector(
                ".edit-logiciel-page .dashboard-form-error"
            ).style.display = "block";
            e.preventDefault();
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
            fetch(`${api}logiciel/edit/${logiciel.id}`, requestOptions).then(
                () => (window.location.href = "/dashboard/logiciels")
            );
        }
    }

    return (
        <div className="edit-logiciel-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/dashboard/logiciels">Logiciels</Link>
                    </li>
                    <li className="breadcrumb-item active">Modifier</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Modifier un logiciel</h4>
                        <p className="dashboard-form-error">
                            Remplir les champs titre et informations
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
                        <div className="row mb-3">
                            <label
                                htmlFor="content"
                                className="col-md-4 col-lg-3 col-form-label"
                            >
                                Information
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
                                Sauvegarder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
