import React, { Component } from "react";
class Toggle extends Component{
    constructor(){
        super();
        //code 1:
        this.state = {
            btmTxt:'SWITCH ON', nrmlTxt:'SWITCH OFF'
        }
    }

Button=()=>{
    this.setState({btmTxt:'switch off', nrmlTxt:'turn on'})

}
render() {
    return(<>
    <button onClick={this.Button}>{this.state.btmTxt} </button>
    <h1>{this.state.nrmlTxt}</h1>
    </>
    );
}
}

export default Toggle;
