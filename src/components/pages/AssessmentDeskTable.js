import React, { Component } from 'react'
import '../table.css'
import {Redirect} from 'react-router';


class AssessmentTable extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { 
          
        //state is by default an object
        log: 0,
         students: [
            { PatientID: 1, Age: 24, MedicalAid: 'PSMAS', MedicalAidNumber: 123456 },
            { PatientID: 2, Age: 26, MedicalAid: 'CIMAS', MedicalAidNumber: 123456 },
            { PatientID: 3, Age: 14, MedicalAid: 'FIRST MUTUAL', MedicalAidNumber: 123456 },
            { PatientID: 4, Age: 19, MedicalAid: 'ECO SURE', MedicalAidNumber: 123456 },
            
            
            
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
       const { PatientID, Age, MedicalAid, MedicalAidNumber } = student //destructuring
       return (
          <tr key={PatientID}>
             <td>{PatientID}</td>
             <td>{Age}</td>
             <td>{MedicalAid}</td>
             <td>{MedicalAidNumber}</td>
             
             <td>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.movePage}>
                        Proceed To Assess Patient
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
        return <Redirect to = "/assessmentdesk" />
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

export default AssessmentTable