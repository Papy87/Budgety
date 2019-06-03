import React from "react"

const Footer = () => {
    return (
        <footer className="row">
            <div className="card bg-info text-white col-12">
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Rock-Marathon {new Date().getFullYear()}</p>
                        <p className="blockquote-footer text-white">Copyright &copy; <cite title="Source Title">Sonja-Rodoljub-Milan-Nemanja</cite></p>
                    </blockquote>
                </div>
            </div>
        </footer>
    )
}

export default Footer