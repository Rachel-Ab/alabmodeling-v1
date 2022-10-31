import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../config";
import Header from "../Components/Header";
import Keywords from "../Components/Keywords";
import "./chantier.css";

export default function ChantiersClient() {
    let { slug } = useParams();
    const [chantier, setChantier] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch(`${api}chantier/by-slug-fk/${slug}`)
            .then((res) => res.json())
            .then((json) => setChantier(json.data));
    }, []);

    return (
        <>
            {chantier.entreprise ? (
                <>
                    <Header
                        img="logo-alab.jpg"
                        name={chantier.name}
                        color={chantier.entreprise.color}
                    />
                    <div id="chantier">
                        <div id="chantier-content">
                            <h4>
                                {console.log(chantier)}
                                {/* {console.log(chantier.entreprise.color)} */}
                                Chantiers page {slug}
                            </h4>
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
