import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.sass';
import Home from './components/Home'
import ShoppingList from './components/ShoppingList'
class App extends Component {
  render() {
    return <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/shopping-list" component={ShoppingList} />
        </div>
      </Router>;
  }
}

export default App;
