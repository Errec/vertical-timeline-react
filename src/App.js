import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import './App.sass';

import Home from './components/Home'
import ShoppingList from './components/ShoppingList'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/shopping-list" component={ShoppingList} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
