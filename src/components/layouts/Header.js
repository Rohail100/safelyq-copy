import React from 'react'
import logo from '../../assets/images/logo.png'


function Header() {
    return (
        <header className="container">
            <div className="header px-1 py-2">
                <nav className="navbar box p-0">
                    <div className="navbar-brand" style={{ width: "100%" }}>
                        <a className="navbar-item brand" href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="navbar-item" style={{ marginLeft: "auto" }}>
                            <div className="buttons">
                                <button className="button is-small">Sign Up</button>
                                <button className="button is-outlined is-light is-info mr-2 is-small">Sign In</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default Header