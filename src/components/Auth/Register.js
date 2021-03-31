import React from 'react';
import './Style.css';

function Register() {
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
                  <h1>Register Your Node in The System</h1>
                  <p>input your network address and the name of the network so that you can be able to transact on the blockchain! </p>
                  <h2>For Help email: admin@blockmed.co.zw</h2>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-data">
                  <div className="form-head">
                    <h2>Register Node</h2>
                  </div>
                  <div className="form-body">
                    
                      <input type="text" placeholder="Enter Network Adreess" className="form-control" />
                    </div>
                    <div className="form-body">
                    
                      <input type="text" placeholder="Enter The Name of The Node" className="form-control" />
                    </div>
                    
                    
                    
                    
                    
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment">
                        Proceed
                      </button>
                    </div>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment">
                        Back
                      </button>
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

export default Register

