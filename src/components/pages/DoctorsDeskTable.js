import React, { Component } from 'react'
import '../table.css'
import {Redirect} from 'react-router';


class DoctorTable extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { 
          
        //state is by default an object
        log: 0,
         students: [
            { PatientID: 1, Notes: 'known asthmatic condition', Allergies: 'Dust, Pollen', Symptoms: 'rapind breathing', BP: '130/70', Temperature: '36.5' },
            { PatientID: 2, Notes: 'known diabetic condition', Allergies: 'None', Symptoms: 'tiredness, fever', BP: '130/70', Temperature: '37.5' },
            { PatientID: 3, Notes: 'no known chronic condition', Allergies: 'Peanuts', Symptoms: 'headache, muscle cramps', BP: '130/70', Temperature: '36.4' },
            { PatientID: 4, Notes: 'known hayfever condition', Allergies: 'Dust, Pollen', Symptoms: 'shortness of breath', BP: '130/70', Temperature: '36.7' },
            
            
            
            
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
       const { PatientID, Notes, Allergies, Symptoms, BP, Temperature } = student //destructuring
       return (
          <tr key={PatientID}>
             <td>{PatientID}</td>
             <td>{Notes}</td>
             <td>{Allergies}</td>
             <td>{Symptoms}</td>
             <td>{BP}</td>
             <td>{Temperature}</td>
             
             <td>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment" onClick={this.movePage}>
                        Proceed To Diagnose Patient
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
        return <Redirect to = "/doctorsdesk" />
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

export default DoctorTable