import React from 'react'
import Backtotop from '../Backtotop';
import Heading from '../Heading';
import PokemonGreen from '../images/PokemonGreen'
import GrassCards from '../GrassResults';

function Grass() {
    document.title = "Grass-themed Pokemon cards";
    return (
        <div className="grass-main">
                <Heading content="Grass Pokemon Cards" secondHeadline="I choose.."/>
                <GrassCards />
                <PokemonGreen />
                <Backtotop />
            </div>
    )
}

export default Grass
