import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../config";
import Header from "../Components/Header";
import Keywords from "../Components/Keywords";
import "./chantier.css";

export default function ChantiersClient() {
    let { slug } = useParams();
    const [chantier, setChantier] = useState([]);

    useEffect(() => {
        fetch(`${api}chantier/by-slug-fk/${slug}`)
            .then((res) => res.json())
            .then((json) => setChantier(json.data));
    }, [slug]);

    return (
        <>
            {chantier.entreprise ? (
                <>
                    <Header
                        logoE={chantier.entreprise.logo}
                        img="logo-alab.jpg"
                        name={chantier.name}
                        color={chantier.entreprise.color}
                    />
                    <div id="chantier">
                        <div id="chantier-content">
                            <p className="introduction">
                                {chantier.intro}
                            </p>
                            <div className="img-container1">
                                {chantier.img1 && <img alt="" id="img-1" src={chantier.img1}/>}
                                <div
                                    className="entreprise-name"
                                    style={{
                                        backgroundColor:
                                            chantier.entreprise.color,
                                    }}
                                >
                                    <h4>{chantier.entreprise.name}</h4>
                                </div>
                            </div>
                            <div className="img-container2">
                                <div className="chantier-text">
                                    <p
                                        className="chantier-title"
                                        style={{
                                            borderBottom: `3px solid ${chantier.entreprise.color}`,
                                            color: chantier.entreprise.color,
                                        }}
                                    >
                                        Spécifications :
                                    </p>
                                    <p>{chantier.specifications}</p>
                                </div>
                                {chantier.img2 && <img alt="" id="img-2" src={chantier.img2}/>}
                            </div>
                            <div className="img-container3">
                                <div className="chantier-text">
                                    <p
                                        className="chantier-title"
                                        style={{
                                            borderBottom: `3px solid ${chantier.entreprise.color}`,
                                            color: chantier.entreprise.color,
                                        }}
                                    >
                                        Tâches :
                                    </p>
                                    <p className="chantier-tasks">
                                        {chantier.taches}
                                    </p>
                                </div>
                                {chantier.img3 &&<img alt="" id="img-3" src={chantier.img3} />}
                            </div>

                            <Keywords
                                key1={chantier.key1}
                                key2={chantier.key2}
                                key3={chantier.key3}
                                key4={chantier.key4}
                                color={chantier.entreprise.color}
                            />
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
}
