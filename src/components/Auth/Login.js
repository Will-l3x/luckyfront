import React from 'react';
import './Style.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        user: '',
        pass: '',
        log: 0,
    }
    this.handleChangeusername = this.handleChangeusername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.Login = this.Login.bind(this);
    
  }
  handleChangeusername(event) {
    this.setState({user: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({pass: event.target.value});
  }

  async Login(){
    if(this.state.user === "helpdesk@medlab.com" && this.state.pass === "help123"){
      alert('Help Desk LogIn Successful');
      this.setState({
        log: 1,
      })

    }else if(this.state.user === "admin@medlab.com" && this.state.pass === "admin123"){
      alert('Admnistrator Desk LogIn Successful');
      this.setState({
        log: 2,
      })

    }else if(this.state.user === "admissiondesk@medlab.com" && this.state.pass === "admission123"){
      alert('Admission Desk LogIn Successful');
      this.setState({
        log: 3, 
      })

    }else if(this.state.user === "assessmentdesk@medlab.com" && this.state.pass === "assess123"){
      alert('Assessment Desk LogIn Successful');
      this.setState({
        log: 4,
      })

    }else if(this.state.user === "doctor@medlab.com" && this.state.pass === "doctor123"){
      alert('Doctor Desk LogIn Successful');
      this.setState({
        log: 5,
      })

    }else if(this.state.user === "labdesk@medlab.com" && this.state.pass === "lab123"){
      alert('Lab Desk LogIn Successful');
      this.setState({
        log: 6,
      })
      
    }else if(this.state.user === "dispensary@medlab.com" && this.state.pass === "disp123"){
      alert('Dispensary Desk LogIn Successful');
      this.setState({
        log: 7,
      })

    }else{
      alert("incorrect username or password");
    }
  }
  render(){
    if (this.state.log === 1){
      return <Redirect to="/helpdesk" />
    }else if(this.state.log === 2){
      return <Redirect to =  "/admin" />
    }else if(this.state.log === 3){
      return <Redirect to = "/admissiontable" />
    }else if(this.state.log === 4){
      return <Redirect to = "/assessmenttable" />
    }else if(this.state.log === 5){
      return <Redirect to = "/doctortable" />
    }else if(this.state.log === 6){
      return <Redirect to  ="/labdesk" />
    }else if(this.state.log === 7){
      return <Redirect to = "/pharmacytable" />
    }
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
                  <h1>Log In To YOUR DESK</h1>
                  <p> </p>
                  <h2>For Help email: admin@blockmed.co.zw</h2>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-data">
                  <div className="form-head">
                    <h2>Log In To Your Desk</h2>
                  </div>
                  <div className="form-body">
                    
                      <input type="text" placeholder="Enter Email Adreess" className="form-control" onChange={this.handleChangeusername} />
                    </div>
                    <div className="form-body">
                    
                      <input type="password" placeholder="Enter Your Password" className="form-control" onChange={this.handleChangePassword}/>
                    </div>
                    
                    
                    
                    
                    
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.Login}>
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

export default Login
