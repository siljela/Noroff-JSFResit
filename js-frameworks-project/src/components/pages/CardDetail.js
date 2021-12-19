import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URL } from "../../constants/api";
import Pokeball from '../images/Pokeball';
import Heading from '../Heading';
import Backhome from '../Backhome';
import Readmore from '../Readmore';

function CardDetail() {
    const [pokeCards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const [displayDetails, setDetails] = useState(false);

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


	const toggleDetails = () => {
		setDetails(!displayDetails);
	  };

    return (
		<div className="carddetail-main">
                <Heading content={pokeCards.name} />
				<div className="carddetail-content">
					<img className="carddetail-image" src={pokeCards.imageUrlHiRes} alt="pokemon card"></img>
					<div>
					<table className="carddetail-content_table">
						<tbody>
							<tr>
								<th>Name</th>
								<td>{pokeCards.name}</td>
							</tr>
							<tr>
								<th>Supertype</th>
								<td>{pokeCards.supertype}</td>
							</tr>
							<tr>
								<th>Subtype</th>
								<td>{pokeCards.subtype ? `${pokeCards.subtype}` : 'No Subtype'}</td>
							</tr>
							<tr>
								<th>Number</th>
								<td>{pokeCards.number}</td>
							</tr>
							<tr>
								<th>Hit Point</th>
								<td className="carddetail-bar">
									<div className="carddetail-bar_hp" style={{width: pokeCards.hp + '%'}}>{pokeCards.hp ? `${pokeCards.hp}%` : 'No HP'}</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div onClick={toggleDetails}><Readmore /></div>
					<div>
						{displayDetails ? 
							<table>
								<tbody>
									<tr>
										<th>Rarity</th>
										<td>{pokeCards.rarity  ? `${pokeCards.rarity}` : 'No rarity'}</td>
									</tr>
									<tr>
										<th>Artist</th>
										<td>{pokeCards.artist  ? `${pokeCards.artist}` : 'No artist'}</td>
									</tr>
									<tr>
										<th>National Pokedex Number</th>
										<td>{pokeCards.nationalPokedexNumber  ? `${pokeCards.nationalPokedexNumber}` : 'No National Pokedex Number'}</td>
									</tr>
									<tr>
										<th>Types</th>
										<td>{pokeCards.types ? `${pokeCards.types}` : 'No types'}</td>
									</tr>
									<tr>
										<th>RetreatCost</th>
										<td>{pokeCards.retreatCost  ? `${pokeCards.retreatCost[0]}` : 'RetreatCost'}</td>
									</tr>
									<tr>
										<th>Series</th>
										<td>{pokeCards.series ? `${pokeCards.series}` : 'No series'}</td>
									</tr>
									<tr>
										<th>Set</th>
										<td>{pokeCards.set ? `${pokeCards.set}` : 'No set'}</td>
									</tr>
									<tr>
										<th>SetCode</th>
										<td>{pokeCards.setCode ? `${pokeCards.setCode}` : 'No SetCode'}</td>
									</tr>
									<tr>
										<th>Attacks</th>
										<td>{pokeCards.attacks  ? `${pokeCards.attacks[0].cost[0]}` : 'No attacks'}</td>
									</tr>
									<tr>
										<th>Weaknesses</th>
										<td>{pokeCards.weaknesses  ? `${pokeCards.weaknesses[0].type}` : 'No weaknesses'}</td>
									</tr>
								</tbody>
							</table>
							: ""}
					</div>
					</div>
				</div>
                <Pokeball />
				<Backhome />
            </div>
	);
}


export default CardDetail;
