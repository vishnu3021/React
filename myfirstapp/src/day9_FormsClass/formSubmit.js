import React from "react";
 class FormSubmit extends React.Component{
    constructor(){
        super();
        this.state = {text:this.onSubmit}

    }
   onSubmit=(e)=>{
    e.preventDefault();
    this.setState({text:e.target.id1.value})
    this.setState({text:e.target.id2.value})
    this.setState({text:e.target.id3.value})
        console.log("Form submitted");
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" id="id1"/>
                    <input type="number" placeholder="number" id="id2"/>
                    <input type="text" placeholder="mailId" id="id3"/>
                    <input type="submit"/>
                </form>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
 }
 export default FormSubmit;