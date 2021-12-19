import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardItem({ id, name, supertype, imageUrl, subtype, artist, rarity }) {
	return (
		<>
			<Link to={`cards/${id}`}>
				<div className="pokeCard">
					<img className="pokeCard-image" src={imageUrl} alt="pokemon card"/>
					<div className="pokeCard-details">
						<div className="pokeCard-details_rarity">{rarity}</div>
						<table>
							<tbody>
								<tr>
									<td colSpan="2"><h2>{name}</h2></td>
								</tr>
								<tr>
									<td>Type</td>
									<th>{supertype}</th>
								</tr>
								<tr>
									<td>Attacks</td>
									<th>{subtype ? `${subtype}` : 'No attacks'}</th>
								</tr>
								<tr>
									<td>Artist</td>
									<th>{artist}</th>
								</tr>
							</tbody>
						</table>
					</div>
					<button>I choose you! &rsaquo;</button>
				</div>
			</Link>
		</>
	);
}

CardItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	supertype: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	subtype: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	rarity: PropTypes.string.isRequired,
};

export default CardItem;