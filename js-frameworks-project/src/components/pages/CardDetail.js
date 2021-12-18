import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URL } from "../../constants/api";
import Pokeball from '../images/Pokeball';
import Heading from '../Heading';
import Backhome from '../Backhome';

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
		return <div className="error-message">Dammit! We were unable to locate the cards. Please refresh the page.</div>;
	}

    document.title = `${pokeCards.name}`;

    return (
		<div className="carddetail-main">
                <Heading content={pokeCards.name} />
				<div className="carddetail-content">
					<img  className="carddetail-image" src={pokeCards.imageUrlHiRes}></img>
					<table className="carddetail-content_table">
						<tr>
							<th>Name</th>
							<td>{pokeCards.name}</td>
						</tr>
						<tr>
							<th>Supertype</th>
							<td>{pokeCards.supertype}</td>
						</tr>
						<tr>
							<th>Number</th>
							<td>{pokeCards.number}</td>
						</tr>
						<tr>
							<th>Hit Point</th>
							<td class="carddetail-bar">
								<div class="carddetail-bar_hp" style={{width: pokeCards.hp + '%'}}>{pokeCards.hp ? `${pokeCards.hp}%` : 'No HP'}</div>
							</td>
						</tr>
						<tr>
							<th>Rarity</th>
							<td>{pokeCards.rarity}</td>
						</tr>
						<tr>
							<th>Artist</th>
							<td>{pokeCards.artist}</td>
						</tr>
					</table>
				</div>
                <Pokeball />
				<Backhome />
            </div>
	);
}


export default CardDetail;
