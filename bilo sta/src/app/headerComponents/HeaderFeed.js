import React, { Component } from 'react';
import { Link } from "react-router-dom"

class HeaderFeed extends Component {

    render() {
        return (

            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                    <Link to="/" className="navbar-brand" >BiTBook</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav text-white">
                            <Link to="/feed/" ><li className="nav-item nav-link active text-white">Feed <span className="sr-only">(current)</span></li></Link>
                            <Link to="/peoples/" ><li className="nav-item nav-link text-white">People</li></Link>
                            <Link to="/profile/" > <li className="nav-item nav-link text-white">Profile</li></Link>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderFeed
