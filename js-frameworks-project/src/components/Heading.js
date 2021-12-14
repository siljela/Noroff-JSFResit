import React from "react";
import PropTypes from "prop-types";

// function Heading(props) {
//     return <h1>{props.content}</h1>;
// }

// export default Heading;

export default function Heading({ title }) {
    return <h1>{title}</h1>;
   }
   
   Heading.propTypes = {
    title: PropTypes.string,
   };