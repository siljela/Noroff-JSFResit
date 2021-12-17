import React from 'react'
import GrassCards from '../components/GrassResults';
import Heading from '../components/Heading';
import PokemonGreen from '../components/images/PokemonGreen';
import Backtotop from '../components/Backtotop';

function Grass() {
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
