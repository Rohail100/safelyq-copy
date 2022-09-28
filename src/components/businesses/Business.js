import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

function Business({ business }) {
    const { name, description, rating, reviews, city, img } = business
    return (
        <Wrapper className="mr-1 my-3 p-0">
            <section className="section p-0 ml-4 ">
                <div className="columns is-mobile">
                    <div className="column ">
                        <div className="tile is-ancestor mr-2 mt-1">
                            <div className="tile is-parent px-0 py-1">
                                <article className="tile is-child box p-1">
                                    <Link to={"business/1"}>
                                        <div className="columns is-mobile pt-1 px-2">
                                            <div className="column is-6 pr-1">
                                                <figure className="image is-3by2">
                                                    <img src={img} alt="" />
                                                </figure>
                                            </div>
                                            <div className="column is-6 pl-2">
                                                <nav className="level is-mobile mb-1">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                            <Text className="is-6 has-text-weight-bold"
                                                                title={name}>
                                                                {name}
                                                            </Text>
                                                        </div>
                                                    </div>
                                                    <div className="level-right">
                                                        <div className="level-item">
                                                            <span className="icon is-size-6">
                                                                <i className="fa fa-heart-o" title="Favorite"
                                                                    style={{ color: "rgb(3, 127, 252)", cursor: "pointer" }}></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </nav>
                                                {description ? <p className="subtitle is-size-6" title={description}>{description}</p> : 
                                                <p className="subtitle is-size-6" title="No Description">No Description</p>}
                                                <nav className="level is-mobile mb-1" style={{ marginTop: "-15px" }}>
                                                    <div className="level-left">
                                                        <div className="level-item mr-0" style={{ marginLeft: "-4px" }}><span
                                                            className="icon is-size-6"><i className="fa fa-map-marker"
                                                                style={{ color: "rgb(3, 127, 252)" }}></i></span></div>
                                                        <div className="level-item">
                                                            <p className="subtitle is-7">{city}</p><br />
                                                        </div>
                                                    </div>
                                                </nav>
                                                <nav className="level is-mobile mb-1">
                                                    <div>
                                                        <div className="level-item is-justify-content-flex-end">
                                                            <div style={{ color: "rgb(26, 17, 186)" }}>
                                                                <StarRatings
                                                                    rating={rating}
                                                                    starRatedColor="#3273dc"
                                                                    numberOfStars={5}
                                                                    name="rating"
                                                                    starDimension="16px"
                                                                    starSpacing="2px"
                                                                />
                                                            </div>&nbsp;[{reviews}]
                                                        </div>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </Wrapper >
    )
}

const Text = styled.div`
width: 100px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis
`
const Wrapper = styled.section`
min-width: 400px;
height: auto;
`

export default Business