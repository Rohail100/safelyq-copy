import React from 'react'
import Book from './Book'
import Discounts from './Discounts'
import Offers from './Offers'
import BusinessDetails from './BusinessDetails'
import BusinessInfo from './BusinessInfo'
import Reviews from './reviews/Reviews'
import Wrapper from '../layouts/Wrapper'

function Business() {
    return (
        <Wrapper>
            <div className="columns is-centered is-multiline">
                <div className="column is-4">
                    <div className="columns is-multiline">
                        <div className="column is-12">
                            <BusinessDetails />
                        </div>
                        <div className="column is-12">
                            <BusinessInfo />
                        </div>
                        <div className="column is-12">
                            <Reviews />
                        </div>
                    </div>
                </div>
                <div className="column is-6">
                    <div className="columns is-multiline">
                        <div className="column is-12">
                            <Offers />
                        </div>
                        <div className="column is-12">
                            <Discounts />
                        </div>
                        <div className="column is-12">
                            <Book />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Business