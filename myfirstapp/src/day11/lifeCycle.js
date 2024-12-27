import React, { Component } from "react";
import Card from "./card";
class LifeCycle extends Component {
  constructor() {
    super();
    console.log("consructor 1")
    this.state = { products: [] };
  }
  componentDidMount() {
    console.log("component did mount 2")
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }

  static getDerivedStatesFromProps() {
    console.log("getDerivedStatesFromProps 3");
    return null;
  }
  render() {
    console.log("rendering 4");
    return (
      <div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {this.state.products.map((a, b) => {
            return (
              <Card
                img={a.image}
                title={a.title}
                price={a.price}
                description={a.description}
                rate={a.rating.rate}
                key={b}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default LifeCycle;
