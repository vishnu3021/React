import React, { Component } from "react";
import Card from "./card";
import axios from "axios";
import Spiner from "./Spinner";

class Update extends Component {
  constructor() {
    super();
    console.log("constructor 1");
    this.state = { count: 0, product: null };
  }
  componentDidUpdate(previousProps, previousState) {
    console.log(previousProps.count, " is previous count");
    console.log(previousState.count, " is previous state count");
    axios
      .get(`https://fakestoreapi.com/products/${this.state.count}`)
      .then((res) => {
        this.setState({ product: res.data });
      });
    // console.log("component did update 2");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count >= 100) {
      return false;
    }
    else{
        return true
    }
    // console.log("should component update 3");
  }
  decrement=()=>{
    this.setState({ count: this.state.count - 1 });
  };
  seven=()=>{
    this.setState({ count: this.state.count + 7 });
  };
  four=()=>{
    this.setState({ count: this.state.count + 4 });
  };
  add=()=>{
    this.setState({ count: this.state.count + 1 });
  };
   reset=()=>{this.setState({count: this.state.count * 0})}

  render() {
    const { count, product } = this.state;
    // console.log("render 4");

    return (
      <div>
        <h1> {count}</h1>

        <button onClick={this.add}>increment</button>
        <button onClick={this.decrement} disabled={count <= 0}>
          decrement
        </button>
        <button onClick={this.seven}>seven</button>
        <button onClick={this.four}>Four</button>
        <button onClick={this.reset}>Reset</button>
        <div style={{
          display: 'flex',
          flexWrap:'wrap',
          gap:"50px",
          justifyContent:"center"
        }}>
        {!product ? (
          <Spiner/>
        ) : (
          <h1>
            <Card 
            img={product.image}
            title={product.title}
            price={product.price} 
            description={product.description}

            />
          </h1>
        )}
        </div>
        {/* {product?(<h1>no card</h1>):(<h1>cards are their </h1>)} */}
      </div>
    );
  }
}
export default Update;
