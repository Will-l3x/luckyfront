import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class AssessmentDesk extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
      NewNode: 'http://127.0.0.1:8000',
     
      dataSource: [{}],
      url: 'http://localhost:8000/',
      PatientID: '',
      Notes: '',
      Allergies: '',
      Symptoms: '',
      BP: '',
      Pulse: '',
      Temperature: '',
      Respirations: '',
      weight: '',
      oxygen: '',
      PriorityLevel: '',
      Height: '',
      
      
    }
    
    this.handleChangePatientID = this.handleChangePatientID.bind(this);
    this.handleChangeNotes = this.handleChangeNotes.bind(this);
    this.handleChangeSymptoms = this.handleChangeSymptoms.bind(this);
    this.handleChangeAllergies = this.handleChangeAllergies.bind(this);
    this.handleChangeBP = this.handleChangeBP.bind(this);
    this.handleChangeRespirations = this.handleChangeRespirations.bind(this);
    this.handleChangePulse = this.handleChangePulse.bind(this);
    this.handleChangeTemperature = this.handleChangeTemperature.bind(this);
    this.handleChangeweight = this.handleChangeweight.bind(this);
    this.handleChangeoxygen = this.handleChangeoxygen.bind(this);
    this.handleChangePriorityLevel = this.handleChangePriorityLevel.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    
    
    
    this.Postdata = this.Postdata.bind(this);
    this.MineData = this.MineData.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
}


 async Postdata (){
  var axios = require('axios');
  

  var data = JSON.stringify({"PatientID":this.state.PatientID,"Notes":this.state.Notes, "Allergies": this.state.Allergies, "Symptoms": this.state.Symptoms, "BP": this.state.BP,"Pulse": this.state.Pulse, "Temperature": this.state.Temperature, "Respirations":this.state.Respirations, "Weight": this.state.weight, "Oxygen": this.state.oxygen,"PriorityLevel": this.state.PriorityLevel, "Height": this.state.Height});
  
  var config = {
    method: 'post',
    url: this.state.NewNode+'/transactions/newassessment',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert(JSON.stringify(response.data.messSymptoms));
    
  })
  .catch(function (error) {
    console.log(error);
  });
  this.MineData();
}
async MineData(){
  var axios = require('axios');

  var config = {
    method: 'get',
    url: this.state.NewNode+'/mineassessment',
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
handleChangeNotes(event) {
  this.setState({Notes: event.target.value});
}
handleChangeAllergies(event) {
  this.setState({Allergies: event.target.value});
}
handleChangeSymptoms(event) {
  this.setState({Symptoms: event.target.value});
}
handleChangeBP(event) {
  this.setState({BP: event.target.value});
}
handleChangePulse(event) {
  this.setState({Pulse: event.target.value});
}
handleChangeTemperature(event) {
  this.setState({Temperature: event.target.value});
}
handleChangeRespirations(event) {
  this.setState({Respirations: event.target.value});
}
handleChangeweight(event) {
  this.setState({weight: event.target.value});
}
handleChangeoxygen(event) {
  this.setState({oxygen: event.target.value});
}
handleChangePriorityLevel(event) {
  this.setState({PriorityLevel: event.target.value});
}
handleChangeHeight(event) {
  this.setState({Height: event.target.value});
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
                      <input type="text" placeholder="Enter Patient ID" className="form-control" onChange={this.handleChangePatientID} />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Notes on Patient" className="form-control" onChange={this.handleChangeNotes} />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Allergies" className="form-control" onChange={this.handleChangeAllergies} />
                    </div>
                    <div className="row form-row">
                      <input id="dat" type="text" placeholder="Symptoms" className="form-control" onChange={this.handleChangeSymptoms} />
                    </div>
                    <h6>Physical Details</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="BP" className="form-control"  onChange={this.handleChangeBP}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Pulse" className="form-control" onChange={this.handleChangePulse} />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Temperature" className="form-control" onChange={this.handleChangeTemperature} />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Respirations" className="form-control" onChange={this.handleChangeRespirations} />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Oxygen" className="form-control" onChange={this.handleChangeoxygen}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Weight" className="form-control" onChange={this.handleChangeweight} />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Height" className="form-control" onChange={this.handleChangeHeight} />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Priority Level" className="form-control" onChange={this.handleChangePriorityLevel} />
                      </div>
                    </div>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.Postdata}>
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
}

export default AssessmentDesk
