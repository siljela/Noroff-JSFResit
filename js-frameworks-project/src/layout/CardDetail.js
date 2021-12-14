import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URL } from "../constants/api";

function CardDetail() {
    const [pokeCards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let history = useNavigate();
    const { id } = useParams();

	if (!id) {
		history.push("/");
	}

    const url = `${URL}/` + id;

    useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);

					if (response.ok) {
                        const results = await response.json();
                        const json = results.card;
                        console.log(json);
                        setCards(json);
					} else {
						setError("An error occured");
					}
				} catch (error) {
					setError(error.toString);
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);
    
    if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

    document.title = `${pokeCards.name}`;

    return (
		<div className="card-detail">
			<h1>{pokeCards.name}</h1>
			<p>{pokeCards.supertype}</p>
		</div>
	);
}


export default CardDetail;
