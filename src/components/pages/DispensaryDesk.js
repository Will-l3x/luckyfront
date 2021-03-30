import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';


function DispensaryDesk() {
    return (
        <>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/*<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/datepicker.css" />
          <link rel="stylesheet" href="assets/css/style.css" />*/}
        <div className="inner-layer">
          <div className="container">
            <div className="row no-margin">
              <div className="col-sm-7">
                <div className="content">
                  <h1>Book You Slot Now and Save your time</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis at lacus at rhoncus. Integer pharetra lacus vitae sapien blandit eleifend. </p>
                  <h2>For Help Call : +189-123-453</h2>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-data">
                  <div className="form-head">
                    <h2>Book Appointemnt</h2>
                  </div>
                  <div className="form-body">
                    <div className="row form-row">
                      <input type="text" placeholder="Enter Full name" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Enter Mobile Number" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Enter Email Adreess" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input id="dat" type="text" placeholder="Appointment Date" className="form-control" />
                    </div>
                    <h6>Address Details</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Enter Area" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Enter City" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Enter State" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Postal Code" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </>
    )
}

export default DispensaryDesk
