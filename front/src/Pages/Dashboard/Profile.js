import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images, api } from "../../config.js";

export default function Profile() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [information, setInformation] = useState([]);
    const [form, setForm] = useState({
        name: "",
        titre: "",
        birth: "",
        permis: "",
        infos: "",
        phone: "",
        email: "",
        company: "",
        logo: "",
        linkedin: "",
    });

    useEffect(() => {
        fetch(`${api}information/all`)
            .then((res) => res.json())
            .then((json) => setInformation(json.data[0]));
    }, []);
    useEffect(() => {
        setForm({
            name: information.name,
            titre: information.titre,
            birth: information.birth,
            permis: information.permis,
            infos: information.infos,
            phone: information.phone,
            email: information.email,
            company: information.company,
            logo: information.logo,
            linkedin: information.linkedin,
        });
    }, [information]);

    function handleChange(e) {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(form),
        };
        fetch(`${api}information/edit/${information.id}`, requestOptions).then(
            (res) => res.json()
        );
    }

    const age = Math.floor(
        (new Date() - new Date(information.birth).getTime()) / 3.15576e10
    );

    return (
        <div className="profile-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
                </ol>
            </nav>

            <section className="section profile">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                <img
                                    src={`${images}profile-img.svg`}
                                    alt="Profile"
                                    className="rounded-circle"
                                />
                                <h2>{information.name}</h2>
                                <h3>{information.titre}</h3>
                                <div className="social-links mt-2">
                                    <a
                                        href={information.linkedin}
                                        target="_blank"
                                        className="linkedin"
                                        rel="noreferrer"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="card">
                            <div className="card-body pt-3">
                                <ul className="nav nav-tabs nav-tabs-bordered">
                                    <li className="nav-item">
                                        <button
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-overview"
                                        >
                                            Aperçu
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-edit"
                                        >
                                            Modifier Profile
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-2">
                                    <div
                                        className="tab-pane fade show active profile-overview"
                                        id="profile-overview"
                                    >
                                        <h5 className="card-title">A propos</h5>
                                        <p
                                            className="small fst-italic"
                                            style={{ whiteSpace: "pre-line" }}
                                        >
                                            {information.infos}
                                        </p>

                                        <h5 className="card-title">
                                            Profile Details
                                        </h5>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label ">
                                                Nom complet
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {information.name}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">
                                                Age
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {age} ans
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">
                                                Entreprise
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {information.company}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">
                                                Poste
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {information.titre}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">
                                                Permis
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {information.permis}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">
                                                Téléphone
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {information.phone}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">
                                                Email
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {information.email}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="tab-pane fade profile-edit pt-3"
                                        id="profile-edit"
                                    >
                                        <form
                                            id="form-information"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="name"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Nom complet
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
                                                    htmlFor="birth"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Date de naissance
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="birth"
                                                        type="text"
                                                        className="form-control"
                                                        id="birth"
                                                        value={form.birth || ""}
                                                        onChange={handleChange}
                                                        placeholder="year-month-day"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="infos"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    A propos
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <textarea
                                                        name="infos"
                                                        className="form-control"
                                                        id="infos"
                                                        style={{
                                                            height: "100px",
                                                        }}
                                                        value={form.infos || ""}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="company"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Entreprise
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="company"
                                                        type="text"
                                                        className="form-control"
                                                        id="company"
                                                        value={
                                                            form.company || ""
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="titre"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Poste
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="titre"
                                                        type="text"
                                                        className="form-control"
                                                        id="titre"
                                                        value={form.titre || ""}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="permis"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Permis
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="permis"
                                                        type="text"
                                                        className="form-control"
                                                        id="permis"
                                                        value={
                                                            form.permis || ""
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="phone"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Téléphone
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="phone"
                                                        type="text"
                                                        className="form-control"
                                                        id="phone"
                                                        value={form.phone || ""}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="email"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        value={form.email || ""}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label
                                                    htmlFor="linkedin"
                                                    className="col-md-4 col-lg-3 col-form-label"
                                                >
                                                    Linkedin
                                                </label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input
                                                        name="linkedin"
                                                        type="text"
                                                        className="form-control"
                                                        id="linkedin"
                                                        value={
                                                            form.linkedin || ""
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
