import React from "react";
import { useContext } from "react";
import { productsInfo } from "./parnt";

 function Child2(){
    const data = (useContext(productsInfo))
    console.log(useContext(productsInfo))
    return(
        <div>
            <h1>child2: </h1>
            <h1>{data.name}</h1>
            <h2>{data.price}</h2>
            <h3>
              price:  {data.year}
            </h3>
        </div>
    )
}
export default Child2;