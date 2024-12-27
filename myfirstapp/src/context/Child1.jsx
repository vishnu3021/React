import React from "react";
import { useContext} from "react";
import { userInfo } from "./parnt";

function Child1(){
    const value = (useContext(userInfo))
    console.log(useContext(userInfo))
    return(
        <div>
            
            <h1>Child 1 : {value}</h1>
        </div>
    )
}
export default Child1;