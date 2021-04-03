import React from 'react';
import './Style.css';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Name: '',
      Address: '',
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.RegisterNoder = this.RegisterNoder.bind(this);
  }
  handleChangeName(event) {
    this.setState({Name: event.target.value});
  }
  handleChangeAddress(event) {
    this.setState({Address: event.target.value});
  }

  async RegisterNoder(){
    var axios = require('axios');
    var data = JSON.stringify({"nodes":[this.state.Address]});

    var config = {
      method: 'post',
      url: 'http://localhost:8000/nodes/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert(JSON.stringify(response.data.message))
      this.setState({
        Name: '',
        Address: "",
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
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
                    
                      <input type="text" placeholder="Enter Network Adreess" className="form-control"  onChange={this.handleChangeAddress}/>
                    </div>
                    <div className="form-body">
                    
                      <input type="text" placeholder="Enter The Name of The Node" className="form-control" onChange={this.handleChangeName} />
                    </div>
                    
                    
                    
                    
                    
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.RegisterNoder}>
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
}

export default Register

