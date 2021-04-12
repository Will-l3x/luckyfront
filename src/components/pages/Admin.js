import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './admin.css';
import {Redirect} from 'react-router'


class Admin extends React.Component {
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
      dataSource: [{}],
      url: 'http://localhost:8000/',
      Details: '',
      log: 0
      
    }
    
    this.handleChangeDrugName = this.handleChangeDrugName.bind(this);
    this.handleChangeDetails = this.handleChangeDetails.bind(this);
    
    
    this.Postdata = this.Postdata.bind(this);
    this.MineData = this.MineData.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
    this.getChain = this.getChain.bind(this);
    this.movePage = this.movePage.bind(this);
    this.ResolveChain = this.ResolveChain.bind(this);
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
        
  fetch(this.state.NewNode + '/deskchain')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        dataSource: result.chain,
        log: 2
        
      });
      alert('chain successfully captured')
      alert(result.chain);
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
movePage(){
  this.setState({
      log: 1,
    })
}

handleChangeDrugName(event) {
  this.setState({DrugName: event.target.value});
}
handleChangeDetails(event) {
  this.setState({Details: event.target.value});
}
ResolveChain(){
  fetch('http://localhost:8000/nodes/resolve')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        dataSource: result.chain,
        log: 3
       
      });
      alert(result.message)
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
  render(){
    if(this.state.log === 1){
      return <Redirect to = "/search" />
  }else if(this.state.log === 2){
    return <Redirect to = "tablechain" />
  }  
    return (
        <>
  <meta charSet="utf-8" />
  <title />
  <style media="screen" dangerouslySetInnerHTML={{__html: "\n    .market-update-block {\n      padding: 2em 2em;\n      background: #999;\n    }\n\n    .market-update-block h3 {\n      color: #fff;\n      font-size: 2.5em;\n      font-family: 'Carrois Gothic', sans-serif;\n    }\n\n    .market-update-block h4 {\n      font-size: 1.2em;\n      color: #fff;\n      margin: 0.3em 0em;\n      font-family: 'Carrois Gothic', sans-serif;\n    }\n\n    .market-update-block p {\n      color: #fff;\n      font-size: 0.8em;\n      line-height: 1.8em;\n    }\n\n    .market-update-block.clr-block-1 {\n      background: #ff0000;\n      margin-right: 0.8em;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n      transition: 0.5s all;\n      -webkit-transition: 0.5s all;\n      -moz-transition: 0.5s all;\n      -o-transition: 0.5s all;\n    }\n\n    .market-update-block.clr-block-2 {\n      background: #FC8213;\n      margin-right: 0.8em;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n      transition: 0.5s all;\n      -webkit-transition: 0.5s all;\n      -moz-transition: 0.5s all;\n      -o-transition: 0.5s all;\n    }\n\n    .market-update-block.clr-block-3 {\n      background: #1355f9;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n      transition: 0.5s all;\n      -webkit-transition: 0.5s all;\n      -moz-transition: 0.5s all;\n      -o-transition: 0.5s all;\n    }\n\n    .market-update-block.clr-block-1:hover {\n      background: #3C3C3C;\n      transition: 0.5s all;\n      -webkit-transition: 0.5s all;\n      -moz-transition: 0.5s all;\n      -o-transition: 0.5s all;\n    }\n\n    .market-update-block.clr-block-2:hover {\n      background: #3C3C3C;\n      transition: 0.5s all;\n      -webkit-transition: 0.5s all;\n      -moz-transition: 0.5s all;\n      -o-transition: 0.5s all;\n    }\n\n    .market-update-block.clr-block-3:hover {\n      background: #3C3C3C;\n      transition: 0.5s all;\n      -webkit-transition: 0.5s all;\n      -moz-transition: 0.5s all;\n      -o-transition: 0.5s all;\n    }\n\n    .market-update-right i.fa.fa-user-o {\n      font-size: 3em;\n      color: #68AE00;\n      width: 80px;\n      height: 80px;\n      background: #fff;\n      text-align: center;\n      border-radius: 49px;\n      -webkit-border-radius: 49px;\n      -moz-border-radius: 49px;\n      -o-border-radius: 49px;\n      line-height: 1.7em;\n    }\n\n    .market-update-right i.fa.fa-user-md {\n      font-size: 3em;\n      color: #FC8213;\n      width: 80px;\n      height: 80px;\n      background: #fff;\n      text-align: center;\n      border-radius: 49px;\n      -webkit-border-radius: 49px;\n      -moz-border-radius: 49px;\n      -o-border-radius: 49px;\n      line-height: 1.7em;\n    }\n\n    .market-update-right i.fa.fa-calendar {\n      font-size: 3em;\n      color: #337AB7;\n      width: 80px;\n      height: 80px;\n      background: #fff;\n      text-align: center;\n      border-radius: 49px;\n      -webkit-border-radius: 49px;\n      -moz-border-radius: 49px;\n      -o-border-radius: 49px;\n      line-height: 1.7em;\n    }\n\n    .market-update-left {\n      padding: 0px;\n    }\n  " }} />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <div className="market-updates">
    <div className="col-md-4 market-update-gd">
      <div className="market-update-block clr-block-1">
        <div className="col-md-8 market-update-left" onClick={this.movePage}>
          <h3>Search Records</h3>
          <h4>ALl Records</h4>
          <p>Run Blockchain Search Query</p>
        </div>
        <div className="col-md-4 market-update-right">
          <i className="fa fa-user-md" />
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="col-md-4 market-update-gd">
      <div className="market-update-block clr-block-2">
        <div className="col-md-8 market-update-left" onClick={this.getChain}>
          <h3>Get Full Chain Desk</h3>
          <h4>FUll chain reading</h4>
          <p>lets us view the entireity of the blockchain without abstraction</p>
        </div>
        <div className="col-md-4 market-update-right">
          <i className="fa fa-user-o" />
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="col-md-4 market-update-gd">
      <div className="market-update-block clr-block-3">
        <div className="col-md-8 market-update-left" onClick={this.MineData}>
          <h3>Resolve Blockchain</h3>
          <h4>Longest Chain is Valid</h4>
          <p>lets resolve our blockchain should conflicts arise</p>
          
        </div>
        <div className="col-md-4 market-update-right">
          <i className="fa fa-calendar"> </i>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="clearfix"> </div>
  </div>
</>

    )
  }
}

export default Admin
