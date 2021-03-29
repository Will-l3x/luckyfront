import React from 'react';
import '../App.css';

function Footer() {
    return (
        <div>
            <footer className="footer py-4 mt-5">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-back btn-social mx-2" href="#!">
                        <i className="fab fa-twitter" /></a>
                        <a className="btn btn-back btn-social mx-2" href="#!">
                        <i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-back btn-social mx-2" href="#!">
                        <i className="fab fa-linkedin-in" /></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3 text" href="#!">Privacy Policy</a>
                        <a href="#!" className="text">Terms of Use</a></div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
