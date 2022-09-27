import React from 'react'
import { suggestions } from '../suggestions'
import Businesses from './businesses/Businesses'

function Suggestions() {
    
    return (
        <div>
            <p className="title is-5 has-text-weight-bold p-3">Suggested for you</p>
            <div className="px-2 pt-4">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="section px-0 py-2">
                        <p className="px-2 py-0 is-size-6">{suggestion.name}</p>
                        <Businesses businesses={suggestion.businesses} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Suggestions