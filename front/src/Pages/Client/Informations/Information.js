import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";
import Header from "../Components/Header";
import Keywords from "../Components/Keywords";
import "./information.css";

export default function Information() {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        fetch(`${api}information/all`)
            .then((res) => res.json())
            .then((json) => setInformation(json.data[0]));
    }, []);
    return (
        <>
            <Header
                img={information.logo}
                name="Informations"
            />
            <div id="informations">
                {console.log(information)}
                <div id="informations-content">
                    <div className="informations-text">
                        <p className="informations-title">Name :</p>
                        <p>{information.name}</p>
                    </div>
                    <div className="informations-text">
                        <p className="informations-title">Titre :</p>
                        <p>{information.titre}</p>
                    </div>
                    <div className="informations-text">
                        <p className="informations-title">Infos :</p>
                        <p>{information.infos}</p>
                    </div>
                    <div className="informations-text">
                        <p className="informations-title">Emploi actuel :</p>
                        <p>{information.company}</p>
                    </div>
                    <div className="informations-text">
                        <p className="informations-title">Contact :</p>
                        <p>{information.phone}</p>
                        <p>{information.email}</p>
                        <p>{information.linkedin}</p>
                    </div>
                    <Keywords key1="Alabmodeling" key2={information.titre} key3="Informationen" key4="Informations"/>
                </div>
            </div>
        </>
    );
}
