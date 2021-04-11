import React, { Component } from 'react'
import '../table.css'
import {Redirect} from 'react-router';


class PharmacyTable extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { 
          
        //state is by default an object
        log: 0,
         students: [
            { PatientName: 'Luckson Dombo', Prescription: 'Paracetamol', Recommendation: '2 tablet 3 times a day'},
            { PatientName: 'WIlvanos Zhira', Prescription: 'Amoxylin', Recommendation: '1 tablet 3 times a day'},
            { PatientName: 'Tadiwanashe Chigwedere', Prescription: 'Vitamin Cs', Recommendation: '1 a day'},
            { PatientName: 'Ruvarashe Moyo', Prescription: 'Salbutamol', Recommendation: '1 tablet three times a day'},
            
            
            
            
         ]
      }
      this.movePage = this.movePage.bind(this);
   }
    movePage(){
        this.setState({
            log: 1,
          })
    }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { PatientName, Prescription, Recommendation,  } = student //destructuring
       return (
          <tr >
             <td>{PatientName}</td>
             <td>{Prescription}</td>
             <td>{Recommendation}</td>
             
             
             <td>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.movePage}>
                        Clear Prescription
                      </button>
                      
                    </div>
             </td>
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    if(this.state.log === 1){
        return <Redirect to = "/dispensary" />
    }  
    return (
         <div>
            <h1>Admissions Records</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            
         </div>
      )
   }
}

export default PharmacyTable