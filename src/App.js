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

function App() {
  return(
    <>
    <Router>
      <Navbars/>
      
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/helpdesk' component={HelpDesk}/>
          <Route path='/admindesk' component={AdmissionDesk}/>
          <Route path='/assessmentdesk' component={AssessmentDesk} />
          <Route path ='/doctorsdesk' component={DoctorsDesk}/>
          <Route path = '/labdesk' component={LabDesk}/>
          <Route path = 'dispensary' component={DispensaryDesk} />
      </Switch>
    </Router>
  </>
  )
  
 
}

export default App;