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
          <Route exact path='/helpdesk' component={HelpDesk}/>
          <Route exact path='/admindesk' component={AdmissionDesk}/>
          <Route exact path='/assessmentdesk' component={AssessmentDesk} />
          <Route exact path ='/doctorsdesk' component={DoctorsDesk}/>
          <Route exact path = '/labdesk' component={LabDesk}/>
          <Route exact path = '/dispensary' component={DispensaryDesk} />
      </Switch>
    </Router>
  </>
  )
  
 
}

export default App;