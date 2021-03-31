import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';

function HelpDesk() {
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
            <h1>Patient Registrations</h1>
            <p>at this stage we check the validity and the rapid screening of covid 19 patients actively so that we address them. </p>
            <h2>For Help email : admin@blockmed.co.zw</h2>
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
                <input type="text" placeholder="Covid 19 Status" className="form-control" />
              </div>
              <div className="row form-row">
                <input type="text" placeholder="Date of issue of certificate" className="form-control" />
              </div>
              <div className="row form-row">
                <input id="dat" type="text" placeholder="Temperature" className="form-control" />
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

export default HelpDesk
