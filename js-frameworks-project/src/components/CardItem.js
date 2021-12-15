import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardItem({ id, name, supertype, imageUrl }) {
	return (
		<>
			<Link to={`cards/${id}`}>
				<div className="pokeCard">
					<img src={imageUrl}></img>
					<div className="pokeDetails">
						<h5>{name}</h5>
						<p>{supertype}</p>
					</div>
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
};

export default CardItem;