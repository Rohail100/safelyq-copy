import React from 'react'
import Book from './Book'
import Offers from './Offers'
import ProductDetails from './ProductDetails'
import ProductInfo from './ProductInfo'

function Product() {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-centered is-multiline">
                    <div className="column is-4">
                        <div className="columns is-multiline">
                            <div className="column is-12">
                                <ProductDetails />
                            </div>
                            <div className="column is-12">
                                <ProductInfo />
                            </div>
                            <div className="column is-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="content">
                                            <p>content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="columns is-multiline">
                            <div className="column is-12">
                                <Offers />
                            </div>
                            <div className="column is-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="content">
                                            <p>content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-12">
                                <Book />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product