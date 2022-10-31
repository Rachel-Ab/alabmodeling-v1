import React, { useEffect, useState } from "react";
import { api } from "../../../config";
import Header from "../Components/Header";
import Keywords from "../Components/Keywords";
import "./logiciels.css";

export default function LogicielsClient() {
    const [information, setInformation] = useState([]);
    const [logiciels, setLogiciels] = useState([]);

    useEffect(() => {
        fetch(`${api}information/all`)
            .then((res) => res.json())
            .then((json) => setInformation(json.data[0]));
    }, []);
    useEffect(() => {
        fetch(`${api}logiciel/all`)
            .then((res) => res.json())
            .then((json) => setLogiciels(json.data));
    }, []);
    return (
        <>
            <Header img={information.logo} name="Logiciels" />
            <div id="logiciels">
                <div id="logiciels-content">
                    {logiciels.map((logiciel) => {
                        return (
                            <div className="informations-text" key={logiciel.id}>
                                <p className="informations-title">
                                    {logiciel.name} :
                                </p>
                                <p>{logiciel.content}</p>
                            </div>
                        );
                    })}
                </div>
                <Keywords
                    key1="Alabmodeling"
                    key2={information.titre}
                    key3="Software"
                    key4="Software"
                />
            </div>
        </>
    );
}
