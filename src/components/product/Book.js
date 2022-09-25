import React from 'react'

function Book() {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <div className="icon-text is-align-items-center">
                        <span className="icon">
                            <i name="calendar-check-o" className="fa fa-calendar-check-o">
                            </i>
                        </span>
                        <h5 className="is-marginless">New Appointment</h5>
                    </div>
                </div>
                <div className="columns is-multiline">
                    <div size="12" className="column is-12">
                        <div className="field">
                            <label htmlFor="appointment-date" className="label is-size-small">
                                Appointment Date
                            </label>
                            <input id="appointment-date" className="input" type="date" onChange={e => console.log(e)} value="2022-09-25" />
                        </div>
                    </div>
                    <div size="6" className="column is-6">
                        <div className="field">
                            <label className="label is-size-small">Service</label>
                            <div className="select is-fullwidth">
                                <select>
                                    <option onChange={e => console.log(e)} value="">Select Service</option>
                                    <option onChange={e => console.log(e)} value="58">Take Home</option>
                                    <option onChange={e => console.log(e)} value="1">Dine In The Restaurant</option>
                                    <option onChange={e => console.log(e)} value="2">Pickup</option>
                                    <option onChange={e => console.log(e)} value="121">Test</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div size="6" className="column is-6">
                        <div className="field">
                            <label className="label is-size-small">Additional Guests</label>
                            <div className="select is-fullwidth">
                                <select>
                                    <option onChange={e => console.log(e)} value="">No of Guests</option>
                                    <option onChange={e => console.log(e)} value="1">1</option>
                                    <option onChange={e => console.log(e)} value="2">2</option>
                                    <option onChange={e => console.log(e)} value="3">3</option>
                                    <option onChange={e => console.log(e)} value="4">4</option>
                                    <option onChange={e => console.log(e)} value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div size="6" className="column is-6">
                        <div className="field">
                            <label className="label is-size-small">&nbsp;</label>
                            <h6 size="6" className="title is-6">
                                <span className="icon has-text-danger" color="danger">
                                    <i name="times" className="fa fa-times"></i>
                                </span>
                                Children not allowed
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="py-5 content">
                    <p color="grey-light" className="has-text-grey-light has-text-centered has-text-weight-bold">
                        Select a service to see available time slots
                    </p>
                </div>
                <div className="field">
                    <label htmlFor="notes" className="label is-size-small">
                        Notes
                    </label>
                    <textarea id="notes" name="notes" className="textarea">
                    </textarea>
                </div>
                <button color="info" disabled="" className="button is-info">
                    Set Appointment
                </button>

            </div>
        </div>
    )
}

export default Book