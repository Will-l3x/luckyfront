import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/datepicker.css';
import './table.css';

class TableGetChain extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        NewNode: 'http://127.0.0.1:8000',
         students: [

            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' } 
            
         ],
         dataSource: [
             {PatientID: 'patient zero', Prescription: 'paracetamol', recommendation: 'take two a day'},
             {PatientID: 'patient hero', Prescription: 'paracetamol', recommendation: 'take two a day'},
             {PatientID: 'patient nero', Prescription: 'paracetamol', recommendation: 'take two a day'}
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
    return this.state.dataSource.map((record, indexx) => {
        
        const { index, previous_hash, proof, timestamp, } = record //destructuring
       return (
          <tr >
            <td>{index}</td>
             <td>{previous_hash}</td>
             <td>{proof}</td>
             <td>{timestamp}</td>
             
          </tr>
       )
        
       
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.dataSource[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    if (this.state.loading === true) {
        return <span>Loading...</span>;
    }

    return (
        <div>
           <h1 id='title'>React Dynamic Table</h1>
           <table id='students'>
           <tbody>
                  <tr onClick={this.getChain}>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
           </table>
        </div>
     )
   }
}

export default TableGetChain
