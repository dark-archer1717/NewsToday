import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadbdgBar from 'react-top-loadbdg-bar'

const App = ()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadbdgBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="bd" category="general"/></Route> 
          <Route exact path="/busbdess"><News setProgress={setProgress} apiKey={apiKey} key="busbdess" pageSize={pageSize} country="bd" category="busbdess"/></Route> 
          <Route exact path="/entertabdment"><News setProgress={setProgress} apiKey={apiKey} key="entertabdment" pageSize={pageSize} country="bd" category="entertabdment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="bd" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="bd" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="bd" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="bd" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="bd" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;