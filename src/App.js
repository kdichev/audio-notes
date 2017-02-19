import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controlls from './components/Controlls.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controlls />
      </div>
    );
  }
}

export default App;
