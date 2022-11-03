import React, { useState, useEffect } from "react";
import { api } from "../../../config";
import Header from "../Components/Header";
import Keywords from "../Components/Keywords";
import "./formations.css";

export default function FormationsClient() {
    const [formation, setFormation] = useState([]);

    useEffect(() => {
        fetch(`${api}type/all-byFk`)
            .then((res) => res.json())
            .then((json) => setFormation(json.data));
    }, []);
    return (
        <>
            <Header name="formations" img="logo-alab.jpg" />
            <div id="formations">
                <div id="formations-content">
                    {formation.map((formation) => {
                        return (
                            <div className="informations-text" key={formation.id}>
                                <p className="informations-title">
                                    {formation.name}
                                </p>
                                {formation.formations.map((item) => {
                                    return (
                                        <div className="formation-content-box" key={item.id}>
                                            {item.year !== 0 && (
                                                <p className="formation-year">
                                                    {item.year}
                                                </p>
                                            )}
                                            <p className="formation-name">
                                                {item.name}
                                            </p>
                                            <p>{item.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}

                    <Keywords
                        key1="Alabmodeling"
                        key2="PROJETEUR 3D"
                        key3="Ausbildung"
                        key4="Training"
                    />
                </div>
            </div>
        </>
    );
}
