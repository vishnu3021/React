import React from "react";
import Childone from "../../childone/childone";
// import Childtwo from "../childtwo/childtwo";
function Parent(props){
    return(<>
    <h1>Parent</h1>
    <p>{props.parentpage}</p>
    <Childone c1='im a child one page' c2='im a child 2 page'/>
    {/* <Childtwo/> */}
    </>
    )
}
export default Parent;