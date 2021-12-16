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
                        // console.log(json);
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
		return <div className="errorMsg">Dammit! We were unable to locate the cards. Please refresh the page.</div>;
	}

    document.title = `${pokeCards.name}`;

    return (
		<div className="card-detail">
			{/* <img src={pokeCards.imageUrlHiRes}></img>
			<div>
				<h1>{pokeCards.name}</h1>
				<p>{pokeCards.supertype}</p>
			</div> */}
			<table>
				<tr>
					<th>Name</th>
					<td>{pokeCards.name}</td>
				</tr>
				<tr>
					<th>Supertype</th>
					<td>{pokeCards.supertype}</td>
				</tr>
				<tr>
					<th rowspan="4"><img src={pokeCards.imageUrlHiRes}></img></th>
					<td>555-8745</td>
				</tr>
				<tr>
					<td>555-8745</td>
				</tr>
				<tr>
					<td>555-8745</td>
				</tr>
				<tr>
					<td>555-8745</td>
				</tr>
			</table>
		</div>
	);
}


export default CardDetail;
