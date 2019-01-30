import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from "./Number/Number.js";

class App extends Component {
  state = {
    numeral: [
        {digit: Math.floor(Math.random() * 100) + 1},
        {digit: Math.floor(Math.random() * 100) + 1},
        {digit: Math.floor(Math.random() * 100) + 1},
        {digit: Math.floor(Math.random() * 100) + 1},
        {digit: Math.floor(Math.random() * 100) + 1},
    ]
  };
  changeNuber = () => {
    let newState = {...this.state};
    newState.numeral[0].digit = Math.floor(Math.random() * 100) + 1;
    newState.numeral[1].digit = Math.floor(Math.random() * 100) + 1;
    newState.numeral[2].digit = Math.floor(Math.random() * 100) + 1;
    newState.numeral[3].digit = Math.floor(Math.random() * 100) + 1;
    newState.numeral[4].digit = Math.floor(Math.random() * 100) + 1;
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Number digit={this.state.numeral[0].digit}/>
        <Number digit={this.state.numeral[1].digit}/>
        <Number digit={this.state.numeral[2].digit}/>
        <Number digit={this.state.numeral[3].digit}/>
        <Number digit={this.state.numeral[4].digit}/>
        <div>
          <button onClick={this.changeNuber}>New numbers</button>
        </div>
      </div>
    );
  }
}

export default App;
