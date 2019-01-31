import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Number } from "./Number/Number.js";


class App extends Component {

  state = {
    numeral: [{}, {}, {}, {}, {}]
  };

  changeNuber = () => {
    let newState = {...this.state};
    for (var a=0; a < newState.numeral.length; a++) {
      newState.numeral[a].digit = Math.floor(5 + Math.random() * (36 + 1 - 5));
    }
    this.setState(newState);
    // top:
    // for (var i=0; i < this.state.numeral.length; i++) {
    //   for (var j=i+1; j < this.state.numeral.length; j++) {
    //     if (this.state.numeral[i].digit === this.state.numeral[j].digit) {
    //         for (var a=0; a < newState.numeral.length; a++) {
    //             newState.numeral[a].digit = Math.floor(5 + Math.random() * (36 + 1 - 5));
    //         }
    //         this.setState(newState);
    //         continue top;
    //     }
    //   }
    // }
    while (true) {
        for (var i=0; i < this.state.numeral.length; i++) {
            for (var j=i+1; j < this.state.numeral.length; j++) {
                if (this.state.numeral[i].digit === this.state.numeral[j].digit) {
                    for (var a=0; a < newState.numeral.length; a++) {
                        newState.numeral[a].digit = Math.floor(5 + Math.random() * (36 +1 -5));
                    }
                    this.setState(newState);
                }
                else
                    break;
            }
        }
    }
  };

  render() {
      let numbers = [...this.state.numeral]; numbers.sort(function(a, b) { return a.digit - b.digit; });
      return (
      <div className="App">
        <Number digit={numbers[0].digit}/>
        <Number digit={numbers[1].digit}/>
        <Number digit={numbers[2].digit}/>
        <Number digit={numbers[3].digit}/>
        <Number digit={numbers[4].digit}/>
        <div>
          <button onClick={this.changeNuber}>New numbers</button>
        </div>
      </div>
    );
  }
}

export default App;
