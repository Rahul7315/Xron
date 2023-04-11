
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';
import Info from './components/Info';
import Aboutus from './components/Aboutus';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  const[mode,setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b3864';
      allAlerts("This is notification for dark mode, success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      allAlerts("This is notification for light mode  , success");
    }
  }

  const [showAlert,setAlert] = useState(null);

  const allAlerts = (msg,type) =>{
      setAlert({
        msg : msg,
        type : type
      })
  }

  const [info,setInfo] = useState(null);

  const info1 = () => {
    setInfo("Website developed by Rahul Lad");
  }
  return (
   
      
  <>
    <Router>
    <Navbar title="X R O N " mode={mode} toggleMode={toggleMode} info={info1}  Aboutus = "Aboutus"/>
    <Alert alert={showAlert}/>
    <Info info={info}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/Aboutus">
            <Aboutus />
          </Route>
          <Route path="/">
            <TextForm heading= "The Text Editor" mode={mode} allAlerts={allAlerts}/>
          </Route>
         
      </Switch>
      </div>  
      </Router>
    </>
    
   
     );
}


export default App;   
