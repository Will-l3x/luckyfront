import React from 'react';
import '../App.css';


function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-back fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#">Medical</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-syringe fa-2x" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Medical Camps</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default navbar
