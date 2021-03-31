import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';


function AssessmentDesk() {
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
                  <h1>Assessment Results</h1>
                  <p>Enter the patients screening results. </p>
                  <h2>For Help email: admin@medblocl.co.zw</h2>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-data">
                  <div className="form-head">
                    <h2>Patient Results</h2>
                  </div>
                  <div className="form-body">
                    <div className="row form-row">
                      <input type="text" placeholder="Enter Full name" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Notes on Patient" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Allergies" className="form-control" />
                    </div>
                    <div className="row form-row">
                      <input id="dat" type="text" placeholder="Symptoms" className="form-control" />
                    </div>
                    <h6>Physical Details</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="BP" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Pulse" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Temperature" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Respirations" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Oxygen" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Weight" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Height" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Priority Level" className="form-control" />
                      </div>
                    </div>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment">
                        Send To Doctor
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

export default AssessmentDesk
