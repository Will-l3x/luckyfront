import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './table.css';
import LabDesk from './pages/LabDesk';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './pages/style.css';


class TableTransactions extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
          NewNode: 'http://127.0.0.1:8000',
           students: [
  
              {indexx: 1, proof: 22, timestamp: 'sometime', transactions: [{ diagnosis: 'weight', Labnotes: 'weights', prescription: 'paracetamol'

              }]
            }
              
           ],
           dataSource: [
               
           ],
           loading: true,
        }
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
            loading: false,
            dataSource: result.chain,
           
          });
         
          console.log(this.state.dataSource)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            loading: false,
            error
          });
        }
      )
    
    }
    renderTableData() {
      return this.state.students.map((el)=>{
         el.transactions.map((tel)=>{
            return (
               <tr>
                  <td>{tel.Labnotes}</td>
                  <td>{tel.diagnosis}</td>
                  <td>{tel.prescription}</td>
               </tr>
            )
         })
      })       
      
   }
   renderTableHeader() {
      let header = Object.keys(this.state.students.map(sell=>(
         sell.transactions[0]
      )))
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
     
      this.state.students.map((gy)=>{
         let header = Object.keys(gy.transactions[0])
         return header.map((key, index)=>{
            return <th key={index}>{key.toLocaleUpperCase()}</th>
         })
      })
      
   }
    
 

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
     const personalList = this.state.dataSource.map(student=>(
        student.transactions.map(sell=>(
           <h2 onClick={<Redirect to ='/dispensary'/>}>The Patient that is {sell.PatientID} has been given a {sell.Prescription} which has to be taken {sell.recommendation}</h2>
        ))
       
     ))
      return (
         <div className="inner-layer">
         <div className="container">
           <div className="row no-margin">
             <div className="col-sm-7">
               <div className="content">
               <button className="btn btn-success btn-appointment" onClick={()=>{<Redirect to='/dispensary' />}}>
                        Handout Pescription
                      </button>
                 <h1>Patient Registrations</h1>
                 {personalList}
               </div>
            </div>
         </div>
         </div>
         </div>
      )
   }
}

export default TableTransactions