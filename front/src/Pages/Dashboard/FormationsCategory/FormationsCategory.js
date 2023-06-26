import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, images } from "../../../config";

export default function FormationsCategory() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [formations, setFormations] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`${api}type/all-byFK`)
            .then((res) => res.json())
            .then((json) => setFormations(json.data));
    }, []);

    function redirect(){
        window.location.href = "/dashboard/categories"
    }

    function deleteFormation(formation) {
        if (formation.formations.length === 0) {
            fetch(`${api}type/delete/${formation.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token,
                },
            }).then(redirect);
        } else {
            document.querySelector(
                ".formation-page .alert-danger"
            ).style.display = "block";
        }
    }

    return (
        <div className="formation-page">
            <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
            >
                La categorie ne peux pas etre supprimé ! Elle appartient a une
                formation existante
            </div>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Formations Categories
                    </li>
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
                                <th scope="col">Nom</th>
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
                                                    <img
                                                        alt="edit icon"
                                                        src={`${images}edit.svg`}
                                                    />
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
                                                <img
                                                    alt="delete icon"
                                                    src={`${images}delete.svg`}
                                                />
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
