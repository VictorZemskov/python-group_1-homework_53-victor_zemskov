import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from "./Number/Number.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
      </div>
    );
  }
}

export default App;
