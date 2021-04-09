import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';

class HelpDesk extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
      NewNode: 'http://127.0.0.1:8000',
      
      dataSource: [{}],
      url: 'http://localhost:8000/',
      PatientID: '',
      PatientName: '',
      PatientSurname: '',
      CovidStatus: '',
      Temperature: '',
      
      
    }
    
    this.handleChangePatientID = this.handleChangePatientID.bind(this);
    this.handleChangePatientName = this.handleChangePatientName.bind(this);
    this.handleChangePatientSurname = this.handleChangePatientSurname.bind(this);
    this.handleChangeCovidStatus = this.handleChangeCovidStatus.bind(this);
    this.handleChangeTemperature = this.handleChangeTemperature.bind(this);
    
    
    this.Postdata = this.Postdata.bind(this);
    this.MineData = this.MineData.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
}


 async Postdata (){
  var axios = require('axios');
  

  var data = JSON.stringify({"PatientID":this.state.PatientID,"PatientName":this.state.PatientName, "PatientSurname": this.state.PatientSurname, "CovidStatus": this.state.CovidStatus,"Temperature": this.state.Temperature});
  
  var config = {
    method: 'post',
    url: this.state.NewNode+'/transactions/newdesk',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert(JSON.stringify(response.data.message));
    
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
async MineData(){
  var axios = require('axios');

  var config = {
    method: 'get',
    url: this.state.NewNode+'/mine',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert(JSON.stringify(response.data.message))
    this.setState({
      dataSource: JSON.stringify(response.data.transactions)
    })
  })
  .catch(function (error) {
    console.log(error);
  });
  

}
async RegisterNode (){
  var axios = require('axios');
  var data = JSON.stringify({"nodes":[this.state.NewNode]});

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
      alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

handleChangePatientID(event) {
  this.setState({PatientID: event.target.value});
}
handleChangePatientName(event) {
  this.setState({PatientName: event.target.value});
}
handleChangePatientSurname(event) {
  this.setState({PatientSurname: event.target.value});
}
handleChangeCovidStatus(event) {
  this.setState({CovidStatus: event.target.value});
}
handleChangeTemperature(event) {
  this.setState({Temperature: event.target.value});
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
                <input type="text" placeholder="Enter Patient ID" className="form-control" onChange={this.handleChangePatientID}/>
              </div>
              <div className="row form-row">
                <input type="text" placeholder="Enter First Name" className="form-control" onChange={this.handleChangePatientName} />
              </div>
              <div className="row form-row">
                <input type="text" placeholder="Enter Surname" className="form-control" onChange={this.handleChangePatientSurname} />
              </div>
              <div className="row form-row">
                <input type="text" placeholder="Covid 19 Status" className="form-control" onChange={this.handleChangeCovidStatus} />
              </div>
              <div className="row form-row">
                <input type="text" placeholder="Date of issue of certificate" className="form-control" />
              </div>
              <div className="row form-row">
                <input id="dat" type="text" placeholder="Temperature" className="form-control" onChange={this.handleChangeTemperature} />
              </div>
              
              
              
              <div className="row form-row">
                <button className="btn btn-success btn-appointment" onClick={this.Postdata}>
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
}

export default HelpDesk
