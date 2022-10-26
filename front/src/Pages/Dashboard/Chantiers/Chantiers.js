import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export default function Chantiers() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [formations, setFormations] = useState([]);
    const [entreprises, setEntreprises] = useState([]);

    useEffect(() => {
        fetch(`${api}entreprise/all`)
            .then((res) => res.json())
            .then((json) => setEntreprises(json.data));
    }, []);

    useEffect(() => {
        fetch(`${api}chantier/all`)
            .then((res) => res.json())
            .then((json) => setFormations(json.data));
    }, []);

    function deleteFormation(formation) {
        fetch(`${api}chantier/delete/${formation.id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(() => (window.location.href = "/dashboard/chantiers"));
    }
    return (
        <div className="formation-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Chantiers</li>
                </ol>
            </nav>

            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <Link to="/dashboard/chantier-add">
                            <button
                                type="button"
                                className="btn btn-primary add-buttons"
                            >
                                Ajouter
                            </button>
                        </Link>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Entreprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formations.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        {entreprises.map((entreprise) => {
                                            return (
                                                item.entrepriseId === entreprise.id && (
                                                    <td key={entreprise.id}>
                                                        {entreprise.name}
                                                    </td>
                                                )
                                            );
                                        })}
                                        <td className="table-buttons">
                                            <Link
                                                to={`/dashboard/chantier-edit/${item.slug}`}
                                            >
                                                <button
                                                    type="button"
                                                    className="btn btn-primary controls-button"
                                                >
                                                    Edit
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="table-buttons">
                                            <button
                                                type="button"
                                                className="btn btn-primary controls-button"
                                                onClick={() =>
                                                    deleteFormation(item)
                                                }
                                            >
                                                Supp
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
