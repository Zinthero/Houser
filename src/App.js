import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import {Link} from 'react-router-dom'

//components
import Dashboard from './component/Dashboard/Dashboard'
import Header from './component/Header/Header'
import House from './component/House/House'
import Wizard from './component/Wizard/Wizard'

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <Header/>
      </div>
    );
  }
}

export default App;
