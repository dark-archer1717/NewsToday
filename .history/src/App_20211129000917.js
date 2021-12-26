import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadusgBar from 'react-top-loadusg-bar' 

const App = ()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
       { <LoadusgBar
        height={3}
        color='#f11946'
        progress={progress} 
      /> }
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/></Route> 
          <Route exact path="/bususess"><News setProgress={setProgress} apiKey={apiKey} key="bususess" pageSize={pageSize} country="us" category="bususess"/></Route> 
          <Route exact path="/entertausment"><News setProgress={setProgress} apiKey={apiKey} key="entertausment" pageSize={pageSize} country="us" category="entertausment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;