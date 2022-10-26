import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../config";

export default function EditFormationsCategory() {
    const token = JSON.parse(localStorage.getItem("admin"));
    let { slug } = useParams();
    const [logiciel, setLogiciel] = useState([]);
    const [form, setForm] = useState({
        name: "",
    });

    useEffect(() => {
        fetch(`${api}type/by-slug/${slug}`)
            .then((res) => res.json())
            .then((json) => setLogiciel(json.data));
    }, []);
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
        fetch(`${api}type/edit/${logiciel.id}`, requestOptions).then(
            () => (window.location.href = "/dashboard/categories")
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
                        <Link to="/dashboard/categories">
                            Formations Category
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">Edit</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Ajouter un logiciel</h4>
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
