import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export default function Formations() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [formations, setFormations] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${api}type/all`)
            .then((res) => res.json())
            .then((json) => setCategories(json.data));
    }, []);
    useEffect(() => {
        fetch(`${api}formation/all`)
            .then((res) => res.json())
            .then((json) => setFormations(json.data));
    }, []);
    function deleteFormation(formation) {
        fetch(`${api}formation/delete/${formation.id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(() => (window.location.href = "/dashboard/formations"));
    }
    return (
        <div className="formation-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Formations</li>
                </ol>
            </nav>

            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <Link to="/dashboard/formation-add">
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
                                <th scope="col">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formations.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        {categories.map((type) => {
                                            return (
                                                item.typeId === type.id && (
                                                    <td key={type.id}>
                                                        {type.name}
                                                    </td>
                                                )
                                            );
                                        })}

                                        <td className="table-buttons">
                                            <Link
                                                to={`/dashboard/formation-edit/${item.slug}`}
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
