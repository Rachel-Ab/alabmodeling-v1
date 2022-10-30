import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config";
import Header from "../Components/Header";
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
                logoE={information.logo}
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
                    <h4 className="keyword1">Key word1</h4>
                    <h4 className="keyword2">Key word2</h4>
                    <div className="keyword3-box">
                        <h4 className="keyword3">Key word3</h4>
                    </div>
                    <div className="keyword4-box">
                        <h4 className="keyword4">Key word4</h4>
                    </div>
                </div>
            </div>
        </>
    );
}
