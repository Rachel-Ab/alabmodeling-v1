import React, { useState, useEffect } from "react";
import { api, images } from "../../../config";
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
            <Header img={information.logo} name="Informations" />
            <div id="informations">
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
                        <p className="information-textarea">
                            {information.infos}
                        </p>
                    </div>
                    <div className="informations-text">
                        <p className="informations-title">Emploi actuel :</p>
                        <p>{information.company}</p>
                    </div>
                    <div className="informations-text">
                        <p className="informations-title">Contact :</p>
                        <p>{information.phone}</p>
                        <p>{information.email}</p>
                        <a
                            target="_blank"
                            class="linkedin"
                            href={information.linkedin}
                            rel="noreferrer"
                        >
                            <img alt="linkedin icon" src={`${images}linkedin.svg`}/>
                        </a>
                    </div>
                    <Keywords
                        key1="Alabmodeling"
                        key2={information.titre}
                        key3="Informationen"
                        key4="Informations"
                    />
                </div>
            </div>
        </>
    );
}
