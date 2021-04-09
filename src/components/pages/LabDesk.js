import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';


class LabDesk extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
      NewNode: 'http://127.0.0.1:8000',
     
      dataSource: [{}],
      url: 'http://localhost:8000/',
      PatientID: '',
      BloodTest: '',
      Xray: '',
      UltraSound: '',
      Lipid: '',
      Pulse: '',
      Hemoglobin: '',
      Cultures: '',
      urinanalysis: '',
      other: '',
      PriorityLevel: '',
      Height: '',
      
      
    }
    
    this.handleChangePatientID = this.handleChangePatientID.bind(this);
    this.handleChangeBloodTest = this.handleChangeBloodTest.bind(this);
    this.handleChangeUltraSound = this.handleChangeUltraSound.bind(this);
    this.handleChangeXray = this.handleChangeXray.bind(this);
    this.handleChangeLipid = this.handleChangeLipid.bind(this);
    this.handleChangeCultures = this.handleChangeCultures.bind(this);
    
    this.handleChangeHemoglobin = this.handleChangeHemoglobin.bind(this);
    this.handleChangeurinanalysis = this.handleChangeurinanalysis.bind(this);
    this.handleChangeother = this.handleChangeother.bind(this);
   
    
    
    
    this.Postdata = this.Postdata.bind(this);
    this.MineData = this.MineData.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
}


 async Postdata (){
  var axios = require('axios');
  

  var data = JSON.stringify({"PatientID":this.state.PatientID,"BloodTest":this.state.BloodTest, "Xray": this.state.Xray, "UltraSound": this.state.UltraSound, "Lipid": this.state.Lipid,"Pulse": this.state.Pulse, "Hemoglobin": this.state.Hemoglobin, "urinanalysis": this.state.urinanalysis, "other": this.state.other,"PriorityLevel": this.state.PriorityLevel, "Height": this.state.Height});
  
  var config = {
    method: 'post',
    url: this.state.NewNode+'/transactions/newlab',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert(JSON.stringify(response.data.messUltraSound));
    
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
handleChangeBloodTest(event) {
  this.setState({BloodTest: event.target.value});
}
handleChangeXray(event) {
  this.setState({Xray: event.target.value});
}
handleChangeUltraSound(event) {
  this.setState({UltraSound: event.target.value});
}
handleChangeLipid(event) {
  this.setState({Lipid: event.target.value});
}

handleChangeHemoglobin(event) {
  this.setState({Hemoglobin: event.target.value});
}
handleChangeCultures(event) {
  this.setState({Cultures: event.target.value});
}
handleChangeurinanalysis(event) {
  this.setState({urinanalysis: event.target.value});
}
handleChangeother(event) {
  this.setState({other: event.target.value});
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
                  <h1>Lab Results</h1>
                  <p> process patient lab results. </p>
                  <h2>For Help email : admin@blockmed.co.zw</h2>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-data">
                  <div className="form-head">
                    <h2>Process Results</h2>
                  </div>
                  <div className="form-body">
                    <div className="row form-row">
                      <input type="text" placeholder="Enter Full name" className="form-control" onChange={this.handleChangePatientID} />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Blood test" className="form-control" onChange={this.handleChangeBloodTest}/>
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="X-ray" className="form-control" onChange={this.handleChangeXray} />
                    </div>
                    <div className="row form-row">
                      <input id="dat" type="text" placeholder="Ultrasound" className="form-control" onChange={this.handleChangeUltraSound}/>
                    </div>
                    <h6>Other Details</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Cultures" className="form-control" onChange={this.handleChangeCultures}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="lipid panel" className="form-control" onChange={this.handleChangeLipid} />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="hemoglobin" className="form-control" onChange={this.handleChangeHemoglobin}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="urine analysis" className="form-control" onChange={this.handleChangeurinanalysis} />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Other" className="form-control" onChange={this.handleChangeother} />
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

export default LabDesk
