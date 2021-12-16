import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardItem({ id, name, supertype, imageUrl, subtype, artist, rarity }) {
	return (
		<>
			<Link to={`cards/${id}`}>
				<div className="pokeCard">
					<img src={imageUrl} alt="pokemon card"/>
					<div className="pokeDetails">
						<div className="rarity">{rarity}</div>
						<table>
							<tr>
								<td colspan="2"><h2>{name}</h2></td>
							</tr>
							<tr>
								<td>Type</td>
								<th>{supertype}</th>
							</tr>
							<tr>
								<td>Attacks</td>
								<th>{subtype}</th>
							</tr>
							<tr>
								<td>Artist</td>
								<th>{artist}</th>
							</tr>
						</table>
					</div>
					<Link to={`cards/${id}`}><button>I choose you! &rsaquo;</button></Link>
				</div>
			</Link>
		</>
	);
}

CardItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	supertype: PropTypes.string.isRequired,
	imageUrl: PropTypes.isRequired,
	subtype: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	rarity: PropTypes.string.isRequired,
};

export default CardItem;