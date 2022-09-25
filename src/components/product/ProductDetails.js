import React from 'react'
import lef from '../../assets/images/lef.jpg'

function ProductDetails() {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img style={{ height: "200px" }}
                        src={lef} alt="lef" />
                </figure>
            </div>
            <div className="pb-3 card-content">
                <div className="mb-2 content">
                    <h4 className="mb-1">Le Frenchy</h4>
                    <p className="has-text-grey mb-1">Dallas</p>
                    <a href="/#" className="has-text-black is-flex is-justify-content-space-between">
                        <p className="mb-1">2440 Victory Park Lane</p>
                        <span className="has-text-info">
                            <i name="location-arrow" className="fa fa-location-arrow"></i>
                        </span>
                    </a>
                    <a href="tel:+1 972-433-9987" className="has-text-grey is-flex is-justify-content-space-between">
                        <p className="mb-1">+1 972-433-9987</p>
                        <span className="has-text-info">
                            <i name="phone" className="fa fa-phone"> </i>
                        </span>
                    </a>
                    <a href="/#" className="has-text-black is-flex is-justify-content-space-between">
                        <p className="mb-1">http://le-frency.com</p><span className="has-text-info"><i name="globe"
                            className="fa fa-globe"></i></span>
                    </a>
                </div>
                <aside className="menu">
                    <p className="menu-label has-text-success has-text-weight-bold" color="success" style={{ fontSize: "13px" }}>
                        OPEN
                        <a className="has-text-black" href="/#">
                            {" "}Closes At 08:00 PM
                            <span className="icon">
                                <i name="angle-down" className="fa fa-angle-down">
                                </i>
                            </span>
                        </a>
                    </p>
                </aside>
            </div>
        </div>
    )
}

export default ProductDetails