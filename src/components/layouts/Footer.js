import React from 'react'

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="columns">
                    <div className="has-text-left-desktop has-text-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd column">
                        <span>Copyright © 2022 &nbsp;<a className="has-text-white is-underlined" href="/#">SafelyQ</a></span>
                    </div>
                    <div className="sc-jSMfEi iuhvyf has-text-right-desktop has-text-centered column">
                        <a className="has-text-white" href="/#">
                            Admin Login
                        </a>
                        <span className="mx-3">|</span><a className="has-text-white" href="/#">About Us</a><span className="mx-3">|</span><a className="has-text-white" href="/#">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer