import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';


class AdmissionDesk extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
      NewNode: 'http://127.0.0.1:8000',
     
      dataSource: [{}],
      url: 'http://localhost:8000/',
      PatientID: '',
      NextofKin: '',
      Gender: '',
      Age: '',
      DOB: '',
      IDnumber: '',
      MaritalStatus: '',
      EmailAddress: 'admin@medlab.com',
      MedicalAid: '',
      MedicalAidNumber: '',
      ConsultationFee: '',
      TestsFee: '',
      
      
    }
    
    this.handleChangePatientID = this.handleChangePatientID.bind(this);
    this.handleChangeNextofKin = this.handleChangeNextofKin.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangeDOB = this.handleChangeDOB.bind(this);
    this.handleChangeEmailAddress = this.handleChangeEmailAddress.bind(this);
    this.handleChangeIDNumber = this.handleChangeIDNumber.bind(this);
    this.handleChangeMaritalStatus = this.handleChangeMaritalStatus.bind(this);
    this.handleChangeMedicalAid = this.handleChangeMedicalAid.bind(this);
    this.handleChangeMedicalAidNumber = this.handleChangeMedicalAidNumber.bind(this);
    this.handleChangeConsultationFee = this.handleChangeConsultationFee.bind(this);
    this.handleChangeTestsFee = this.handleChangeTestsFee.bind(this);
    
    
    
    this.Postdata = this.Postdata.bind(this);
    this.MineData = this.MineData.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
    this.getChain = this.getChain.bind(this);
}
componentDidMount(){
  this.getChain();
}
getChain(){
        
  fetch(this.state.NewNode+'/deskchain')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        dataSource: result.chain,
       
      });
      
      console.log(this.state.dataSource)
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )

}



 async Postdata (){
  var axios = require('axios');
  

  var data = JSON.stringify({"PatientID":this.state.PatientID,"NextofKin":this.state.NextofKin, "Gender": this.state.Gender, "Age": this.state.Age, "DOB": this.state.DOB,"IDNumber": this.state.IDnumber, "MaritalStatus": this.state.MaritalStatus,"EmailAddress":this.state.EmailAddress, "MedicalAid": this.state.MedicalAid, "MedicalAidNumber": this.state.MedicalAidNumber,"ConsultationFee": this.state.ConsultationFee, "TestsFee": this.state.TestsFee});
  
  var config = {
    method: 'post',
    url: this.state.NewNode+'/transactions/newadmin',
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
  this.MineData();
}
async MineData(){
  var axios = require('axios');

  var config = {
    method: 'get',
    url: this.state.NewNode+'/mineadmission',
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
handleChangeNextofKin(event) {
  this.setState({NextofKin: event.target.value});
}
handleChangeGender(event) {
  this.setState({Gender: event.target.value});
}
handleChangeAge(event) {
  this.setState({Age: event.target.value});
}
handleChangeDOB(event) {
  this.setState({DOB: event.target.value});
}
handleChangeIDNumber(event) {
  this.setState({IDnumber: event.target.value});
}
handleChangeMaritalStatus(event) {
  this.setState({MaritalStatus: event.target.value});
}
handleChangeEmailAddress(event) {
  this.setState({EmailAddress: event.target.value});
}
handleChangeMedicalAid(event) {
  this.setState({MedicalAid: event.target.value});
}
handleChangeMedicalAidNumber(event) {
  this.setState({MedicalAidNumber: event.target.value});
}
handleChangeConsultationFee(event) {
  this.setState({ConsultationFee: event.target.value});
}
handleChangeTestsFee(event) {
  this.setState({TestsFee: event.target.value});
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
                      <input type="text" placeholder="Enter Patient ID" className="form-control" onChange={this.handleChangePatientID}/>
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Next of Kin" className="form-control" onChange={this.handleChangeNextofKin}/>
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Gender" className="form-control" onChange={this.handleChangeGender}/>
                    </div>
                    <div className="row form-row">
                      <input id="dat" type="text" placeholder="Age" className="form-control" onChange={this.handleChangeAge} />
                    </div>
                    <h6>Insurance Information</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Date Of Birth" className="form-control" onChange={this.handleChangeDOB}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="National ID Number" className="form-control" onChange={this.handleChangeIDNumber}/>
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Marital Status" className="form-control" onChange={this.handleChangeMaritalStatus}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Medical Aid Affiliation" className="form-control" onChange={this.handleChangeMedicalAid} />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Medical Aid Number" className="form-control" onChange={this.handleChangeMedicalAidNumber}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Consultation Fee" className="form-control" onChange={this.handleChangeConsultationFee}/>
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Tests Fee" className="form-control" onChange={this.handleChangeTestsFee}/>
                      </div>
                    </div>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.Postdata}>
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
}

export default AdmissionDesk
