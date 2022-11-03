import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, images } from "../../../config";

export default function Entreprises() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [entreprises, setEntreprises] = useState([]);

    useEffect(() => {
        fetch(`${api}entreprise/all`)
            .then((res) => res.json())
            .then((json) => setEntreprises(json.data));
    }, []);
    function deleteFormation(formation) {
        fetch(`${api}entreprise/delete/${formation.id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(() => (window.location.href = "/dashboard/entreprises"));
    }
    return (
        <div className="formation-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Entreprises</li>
                </ol>
            </nav>

            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <Link to="/dashboard/entreprise-add">
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
                                <th scope="col">Couleur</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entreprises.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td className="entreprise-color" style={{backgroundColor: item.color}}>{item.color}</td>
                                        <td className="table-buttons">
                                            <Link
                                                to={`/dashboard/entreprise-edit/${item.slug}`}
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
                                                    deleteFormation(item)
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
