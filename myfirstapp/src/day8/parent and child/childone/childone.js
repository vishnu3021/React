import React from "react";
import Childtwo from "../childtwo/childtwo";
function Childone(props){
    return(<div>
        <h1>Childone</h1>
        <p>{props.c1}</p>
        <Childtwo c2={props.c2}/>
    </div>)
}
export default Childone;