import React,{Component} from "react";
class Toggles extends Component {
    constructor() {
      super();
      this.state = {
        Btn: "false",
      } 
    }
    one = ()=>{
        this.setState({Btn:!this.state.Btn})
          }
    render() {
      return (
        <>
          <button onClick={this.one}>
            {/* {" "} */}
            {this.state.Btn ? <h1>switch on</h1> : <h1>switch off</h1>}
          </button>
          <p> {!this.state.Btn ? <p> click the above button to switch on</p> : <p> click the above button to switch off</p>}</p>
        </>
      );
    }
  }
  export default Toggles;