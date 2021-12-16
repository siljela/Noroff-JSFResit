import React from "react";

function Heading(props) {
    return (
        <>
            <h1>{props.content}</h1>
            <h2>{props.secondHeadline}</h2>
        </>
    );
}

export default Heading;
