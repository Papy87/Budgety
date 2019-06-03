import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderLog extends Component {


    render() {
        return (
            <>

                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                        <Link to="/" className="navbar-brand" >BiTBook</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}
export default HeaderLog