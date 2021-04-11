import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbars from './components/navbar';
import Home from './components/pages/Home';
import HelpDesk from './components/pages/HelpDesk';
import AdmissionDesk from './components/pages/AdmissionDesk';
import AssessmentDesk from './components/pages/AssessmentDesk';
import DoctorsDesk from './components/pages/DoctorsDesk';
import LabDesk from './components/pages/LabDesk';
import DispensaryDesk from './components/pages/DispensaryDesk';
import Admin from './components/pages/Admin';
import Login from './components/Auth/Login';
import Table from './components/table';
import TableGetChain from './components/table';
import TableTransactions from './components/TableTransactions';
import AdmissionTable from './components/pages/AdmissionDeskTable';
import AssessmentTable from './components/pages/AssessmentDeskTable';


function App() {
  return(
    <>
    <Router>
      <Navbars/>
      
      <Switch>
          <Route path='/' exact component={Login}/>
          <Route exact path='/helpdesk' component={HelpDesk}/>
          <Route exact path='/admindesk' component={AdmissionDesk}/>
          <Route exact path='/assessmentdesk' component={AssessmentDesk} />
          <Route exact path ='/doctorsdesk' component={DoctorsDesk}/>
          <Route exact path = '/labdesk' component={LabDesk}/>
          <Route exact path = '/dispensary' component={DispensaryDesk} />
          <Route exact path = '/admin' component={Admin} />
          <Route exact path = '/tablechain' component={TableGetChain} />
          <Route exact path = '/table' component={TableTransactions} />
          <Route exact path = '/admissiontable' component={AdmissionTable} />
          <Route exact path = '/assessmenttable' component={AssessmentTable} />
      </Switch>
    </Router>
  </>
  )
  
 
}

export default App;