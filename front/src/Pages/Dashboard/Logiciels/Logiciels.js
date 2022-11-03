import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, images } from "../../../config";
import "../admin.css";

export default function Logiciel() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [logiciels, setLogiciels] = useState([]);

    useEffect(() => {
        fetch(`${api}logiciel/all`)
            .then((res) => res.json())
            .then((json) => setLogiciels(json.data));
    }, []);
    function deleteLogiciel(logiciel) {
        fetch(`${api}logiciel/delete/${logiciel.id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(() => (window.location.href = "/dashboard/logiciels"));
    }
    return (
        <div className="logiciel-page">
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Logiciels</li>
                </ol>
            </nav>

            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <Link to="/dashboard/logiciel-add">
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
                            {logiciels.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td className="table-buttons">
                                            <Link
                                                to={`/dashboard/logiciel-edit/${item.slug}`}
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
                                                    deleteLogiciel(item)
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
