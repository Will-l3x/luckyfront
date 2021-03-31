import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';


function AdmissionDesk() {
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
                  <h1>Admissions Desk</h1>
                  <p>Collect Patient details, insurance, address etc, </p>
                  <h2>For Help email: admin@blockmed.co.zw</h2>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-data">
                  <div className="form-head">
                    <h2>Book patients</h2>
                  </div>
                  <div className="form-body">
                    <div className="row form-row">
                      <input type="text" placeholder="Enter Full name" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Next of Kin" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Gender" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input id="dat" type="text" placeholder="Age" className="form-control" />
                    </div>
                    <h6>Insurance Information</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Date Of Birth" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="National ID Number" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Marital Status" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Medical Aid Affiliation" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Medical Aid Number" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Consultation Fee" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment">
                        Process Patient
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

export default AdmissionDesk
