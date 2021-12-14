import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardItem({ id, name, supertype }) {
	return (
		<Link to={`cards/${id}`}>
			<h5>{name}</h5>
			<p>{supertype}</p>
		</Link>
	);
}

CardItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	supertype: PropTypes.string.isRequired,
};

export default CardItem;