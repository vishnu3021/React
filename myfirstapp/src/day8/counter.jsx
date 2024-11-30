import { Component } from "react";
import React from "react";
class Counter extends Component {
  constructor(props) {
    super();
    this.state = { counter: 2 };
  }
  handleEventOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleEventTwo = () => {
    this.setState({ counter: this.state.counter + 2 });
  };
  handleEventThree = () => {
    this.setState({ counter: this.state.counter + 3 });
  };
  ReduceOne= ()=>{
    this.setState({ counter: this.state.counter - 1 });
  }
  ReduceTwo= ()=>{
    this.setState({ counter: this.state.counter - 2 });
  }
  ReduceThree= ()=>{
    this.setState({ counter: this.state.counter - 3 });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleEventOne}>+1</button>
        <button onClick={this.handleEventTwo}>+2</button>
        <button onClick={this.handleEventThree}>+3</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.ReduceOne}>-1</button>
        <button onClick={this.ReduceTwo}>-2</button>
        <button onClick={this.ReduceThree}>-3</button>
      </div>
    );
  }
}

export default Counter;
