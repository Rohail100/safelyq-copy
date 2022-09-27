import React from 'react'

function Header() {
    return (
        <div>
            <div className="columns is-mobile">
                <div className="column pr-0 ml-0">
                    <span className="subtitle is-6 pb-0 has-text-weight-bold has-text-grey">Tuesday September 27th, 2022
                    </span>
                </div>
                <div className="column pr-2 mr-2 has-text-right">
                    <a href="/#">
                        <span className="icon">
                            <i className="fa fa-plus-circle is-size-3" style={{ borderRadius: "50%", color: "rgb(3, 127, 252)" }}>
                            </i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header