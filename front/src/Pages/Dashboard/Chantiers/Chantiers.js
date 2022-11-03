import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, images } from "../../../config";

export default function Chantiers() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [chantiers, setChantiers] = useState([]);
    const [entreprises, setEntreprises] = useState([]);

    useEffect(() => {
        fetch(`${api}entreprise/all`)
            .then((res) => res.json())
            .then((json) => setEntreprises(json.data));
    }, []);

    useEffect(() => {
        fetch(`${api}chantier/all`)
            .then((res) => res.json())
            .then((json) => setChantiers(json.data));
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
                            {chantiers.map((chantier) => {
                                return (
                                    <tr key={chantier.id}>
                                        <td>{chantier.name}</td>
                                        {entreprises.map((entreprise) => {
                                            return (
                                                chantier.entrepriseId === entreprise.id && (
                                                    <td key={entreprise.id}>
                                                        {entreprise.name}
                                                    </td>
                                                )
                                            );
                                        })}
                                        <td className="table-buttons">
                                            <Link
                                                to={`/dashboard/chantier-edit/${chantier.slug}`}
                                            >
                                                <button
                                                    type="button"
                                                    className="btn btn-primary controls-button"
                                                >
                                                    <img alt="edit icon" src={`${images}edit.svg`}/>
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="table-buttons">
                                            <button
                                                type="button"
                                                className="btn btn-primary controls-button"
                                                onClick={() =>
                                                    deleteFormation(chantier)
                                                }
                                            >
                                                <img alt="delete icon" src={`${images}delete.svg`}/>
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
