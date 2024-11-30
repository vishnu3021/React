import React from "react";
import Loginpage from "./loginpage";
import Userpage from "./userpage";
function Condinal(props){
    return (
    <>
    {props.login ==="ur"?<Userpage/>:<Loginpage/>}
    </>
    )
    
}
export default  Condinal;