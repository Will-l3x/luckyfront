import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

 
function Navbars() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-back fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" >Medical</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-syringe fa-2x" />
                    
                    </button>
                    <Link></Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="/">Help Desk</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Admissions Desk</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Assessment Portal</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Doctors Portal</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Admin Panel</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Dispensary</a></li>
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbars
