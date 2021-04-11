import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './style.css';


class DispensaryDesk extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      HostName: '',
      NewNode: 'http://127.0.0.1:8000',
      TransactionId: 0,
      Pname: '',
      Wname: '',
      DrugType: '',
      DrugName: '',
      Quantity: '',
      dataSource: [],
      url: 'http://localhost:8000/',
      Details: ''
      
    }
    
    this.handleChangeDrugName = this.handleChangeDrugName.bind(this);
    this.handleChangeDetails = this.handleChangeDetails.bind(this);
    
    
    this.Postdata = this.Postdata.bind(this);
    this.MineData = this.MineData.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
    this.getChain = this.getChain.bind(this);
    this.getprescriptions = this.getprescriptions.bind(this);
}

componentDidMount(){
  this.getChain();
}

 async Postdata (){
  var axios = require('axios');
  

  var data = JSON.stringify({"PatientID":this.state.Details,"Medication":this.state.DrugName});
  
  var config = {
    method: 'post',
    url: this.state.NewNode+'/transactions/newDisp',
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
    url: this.state.NewNode+'/mineDispensary',
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
getChain(){
        
  fetch(this.state.NewNode+'/deskchain')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        dataSource: result.chain,
       
      });
      alert('pescription chain grab successful!')
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

handleChangeDrugName(event) {
  this.setState({DrugName: event.target.value});
}
handleChangeDetails(event) {
  this.setState({Details: event.target.value});
}

getprescriptions(){
  
  const meds = this.state.dataSource.map((el)=>{
    <li key={el.index.toString()}>
      {el.transactions.map((tel)=>{
        <li>
          {tel.PatientID}
          {tel.Prescription}
        </li>
      })}
    </li>
  })
  return (
    <ul>{meds}</ul>
  )
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
                <button className="btn btn-success btn-appointment" onClick={this.getprescriptions}>
                        Get Pescription
                      </button>
                  <h1>Patient Medicine & Prescription</h1>
                  <p>doctors pescription appear here. </p>
                  <h2>For help email : admin@medblock.co.zw </h2>
                </div>
              </div>
              <div>
               
              </div>
              
              <div>
              {this.state.dataSource.map((el)=>{
                        return <div>
                            
                             
                            {el.transactions.map((tel)=>{
                                return <div>
                                    <h4>{tel.PatientID}</h4>
                                    <h4>{tel.Prescription}</h4>
                                    
                                </div>
                            })}
                        </div>
                    })
                    }
              </div>
              <div className="col-sm-5">
                <div className="form-data">
                  <div className="form-head">
                    <h2>Pharmacy Tab</h2>
                  </div>
                  <div className="form-body">
                    <div className="row form-row">
                      <input type="text" placeholder="Enter Patient ID" className="form-control" onChange={this.handleChangeDetails} />
                    </div>
                    <div className="row form-row">
                      <input type="text" placeholder="Prescription" className="form-control" onChange={this.handleChangeDrugName} />
                    </div>
                    
                    
                    
                    
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.Postdata}>
                        Clear Pescription
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

export default DispensaryDesk
