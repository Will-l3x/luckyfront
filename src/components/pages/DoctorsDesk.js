import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';
class DoctorsDesk extends React.Component {
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
      recommendation: '',
      Diagnosis: '',
      Prescription: '',
      PriorityLevel: '',
      LabNotes: '',
      
      
    }
    
    this.handleChangePatientID = this.handleChangePatientID.bind(this);
    this.handleChangeNotes = this.handleChangeNotes.bind(this);
    this.handleChangeSymptoms = this.handleChangeSymptoms.bind(this);
    this.handleChangeAllergies = this.handleChangeAllergies.bind(this);
    this.handleChangeBP = this.handleChangeBP.bind(this);
    this.handleChangerecommendation = this.handleChangerecommendation.bind(this);
    this.handleChangePulse = this.handleChangePulse.bind(this);
    this.handleChangeTemperature = this.handleChangeTemperature.bind(this);
    this.handleChangeDiagnosis = this.handleChangeDiagnosis.bind(this);
    this.handleChangePrescription = this.handleChangePrescription.bind(this);
    this.handleChangePriorityLevel = this.handleChangePriorityLevel.bind(this);
    this.handleChangeLabNotes = this.handleChangeLabNotes.bind(this);
    
    
    
    this.Postdata = this.Postdata.bind(this);
    this.MineData = this.MineData.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
}


 async Postdata (){
  var axios = require('axios');
  

  var data = JSON.stringify({"PatientID":this.state.PatientID,"Notes":this.state.Notes, "Allergies": this.state.Allergies, "Symptoms": this.state.Symptoms, "BP": this.state.BP,"Pulse": this.state.Pulse, "Temperature": this.state.Temperature, "Diagnosis": this.state.Diagnosis, "Prescription": this.state.Prescription,"PriorityLevel": this.state.PriorityLevel, "LabNotes": this.state.LabNotes});
  
  var config = {
    method: 'post',
    url: this.state.NewNode+'/transactions/newdoctor',
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
handleChangerecommendation(event) {
  this.setState({recommendation: event.target.value});
}
handleChangeDiagnosis(event) {
  this.setState({Diagnosis: event.target.value});
}
handleChangePrescription(event) {
  this.setState({Prescription: event.target.value});
}
handleChangePriorityLevel(event) {
  this.setState({PriorityLevel: event.target.value});
}
handleChangeLabNotes(event) {
  this.setState({LabNotes: event.target.value});
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
            <h1>Doctors Desk</h1>
            <p>record diagnosis and prognosis. </p>
            <h2>For Help email: admin@medblock.co.zw</h2>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-data">
            <div className="form-head">
              <h2>Book Appointemnt</h2>
            </div>
            <div className="form-body">
              <div className="row form-row">
                <input type="text" placeholder="Enter Full name" className="form-control" onChange={this.handleChangePatientID}/>
              </div>
              <div className="row form-row">
                <input type="text" placeholder="Notes If Applicable" className="form-control" onChange={this.handleChangeLabNotes}/>
              </div>
              <div className="row form-row">
                <input type="text" placeholder="Diagnosis" className="form-control" onChange={this.handleChangeDiagnosis} />
              </div>
              <div className="row form-row">
                <input id="dat" type="text" placeholder="Recommendation" className="form-control" onChange={this.handleChangerecommendation} />
              </div>
              <h6>Medicine</h6>
              <div className="row form-row">
                <div className="col-sm-6">
                  <input type="text" placeholder="Prescription" className="form-control" onChange={this.handleChangePrescription} />
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder="Direction" className="form-control"  />
                </div>
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

export default DoctorsDesk
