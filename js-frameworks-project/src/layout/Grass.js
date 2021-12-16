import React from 'react'
import GrassCards from '../components/GrassResults';
import Heading from '../components/Heading';

function Grass() {
    return (
        <div className="grass">
            <Heading content="Grass Pokemon Cards" secondHeadline="I choose.."/>
            <GrassCards />
        </div>
    )
}

export default Grass
