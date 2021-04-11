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
            { PatientID: 1, PatientName: 'Luckson', PatientSurname: 'Dombo', CovidStatus: 'false', Temperature: 36.5, DateofCertificate: '27 MArch 2021' },
            { PatientID: 2, PatientName: 'Wilvanos', PatientSurname: 'Zhira', CovidStatus: 'false', Temperature: 36.7, DateofCertificate: '7 April 2021'},
            { PatientID: 3, PatientName: 'tadiwanashe', PatientSurname: 'Chigwedere', CovidStatus: 'false', Temperature: 36.3, DateofCertificate: '02 April 2021' },
            { PatientID: 4, PatientName: 'Ruvarashe', PatientSurname: 'Moyo', CovidStatus: 'true', Temperature: 37.2, DateofCertificate: '10 April 2021'}
            
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
       const { PatientID, PatientName, PatientSurname, CovidStatus, Temperature, DateofCertificate } = student //destructuring
       return (
          <tr key={PatientID}>
             <td>{PatientID}</td>
             <td>{PatientName}</td>
             <td>{PatientSurname}</td>
             <td>{CovidStatus}</td>
             <td>{Temperature}</td>
             <td>{DateofCertificate}</td>
             <td>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.movePage}>
                        Proceed To Admit Patient
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