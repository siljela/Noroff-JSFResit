import React from 'react'
import Backtotop from '../Backtotop'
import Heading from '../Heading'
import Pokemon from '../images/Pokemon'
import Results from '../Results'
import { Search } from '../Search'


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
