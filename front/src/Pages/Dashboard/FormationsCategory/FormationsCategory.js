import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export default function FormationsCategory() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [formations, setFormations] = useState([]);

    useEffect(() => {
        fetch(`${api}type/all`)
            .then((res) => res.json())
            .then((json) => setFormations(json.data));
    }, []);
    function deleteFormation(formation) {
        fetch(`${api}type/delete/${formation.id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(() => (window.location.href = "/dashboard/categories"));
    }
    return (
        <div className="formation-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Formations Category</li>
                </ol>
            </nav>

            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <Link to="/dashboard/category-add">
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
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formations.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td className="table-buttons">
                                            <Link
                                                to={`/dashboard/category-edit/${item.slug}`}
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
