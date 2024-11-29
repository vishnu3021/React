import { Component } from "react"
import React from "react"
class Propscomponent extends Component{
    render(props){
        return (<div>
             <h1> using class component in reactjs:</h1>
             <p>{this.props.name} and im intersted in  {this.props.role} and also {this.props.application}</p>
        </div>
           
        )
    }
}
export default Propscomponent;