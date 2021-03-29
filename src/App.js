import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbars from './components/navbar';
import Home from './components/pages/Home';

function App() {
  return(
    <>
    <Router>
      <Navbars/>
      
      <Switch>
          <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  </>
  )
  
 
}

export default App;