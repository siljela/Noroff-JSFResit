import React from 'react'
import Heading from '../components/Heading'
import Pokemon from '../components/Pokemon'
import Results from '../components/Results'
import { Search } from '../components/Search'

function Homepage() {
    return (
            <div className="main">
                <Heading content="Pokemon cards" secondHeadline="I choose.."/>
                <Search />
                <Results />
                <Pokemon />
            </div>
    )
}

export default Homepage
