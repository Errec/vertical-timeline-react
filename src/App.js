import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
