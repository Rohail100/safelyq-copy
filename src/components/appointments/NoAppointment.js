import React from 'react'
import styled from 'styled-components'

function NoAppointment() {
    return (
        <section className="is-flex">
            <a href='/#'>
                <Card>
                    <section className="section py-0 pl-3">
                        <div className="container">
                            <div className="columns is-mobile pr-4">
                                <div className="column is-8-mobile  pl-1 mt-1 has-text-centered">
                                    <div className="tile is-ancestor">
                                        <div className="tile is-parent">
                                            <article className="tile is-child box px-0 py-4">
                                                <h1 className="title  is-size-3-desktop is-size-5-mobile has-text-grey-light">
                                                    <strong>No Appointments</strong>
                                                </h1><button className="button is-info is-outlined ml-2 mb-3 is-small">
                                                    <span className="icon"><i className="fa fa-plus"></i>
                                                    </span><span>Add New Appointment</span>
                                                </button>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Card>
            </a>
        </section>
    )
}

const Card = styled.section`
min-width: 360px;
height: auto;
margin-right: 2px;
margin-bottom: 12px;
`

export default NoAppointment