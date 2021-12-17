import React from 'react'
import Heading from '../components/Heading'
import Pokemon from '../components/images/Pokemon'
import Results from '../components/Results'
import { Search } from '../components/Search'
import Backtotop from '../components/Backtotop'

function Homepage() {
    return (
            <div className="homepage-main">
                <Heading content="Pokemon cards" secondHeadline="I choose.."/>
                <Search />
                <Results />
                <Pokemon />
                <Backtotop />
            </div>
    )
}

export default Homepage
