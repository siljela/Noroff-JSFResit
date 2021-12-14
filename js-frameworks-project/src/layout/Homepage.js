import React from 'react'
import Heading from '../components/Heading'
import Results from '../components/Results'
import { Search } from '../components/Search'

function Homepage() {
    return (
        <div>
            <Heading title="Homepage"/>
            <Search />
            <Results />
        </div>
    )
}

export default Homepage
