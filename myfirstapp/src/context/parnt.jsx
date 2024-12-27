import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
// import Child3 from "./Child3";
import { useState, createContext } from "react";

export const userInfo = createContext();
export const productsInfo = createContext();

function Parent() {
  const [user, updateUser] = useState("vishnu");
  const [products,updateProducts]= useState({
    id:1,
    name: "mobile",
    price: 10000,
    year:2024
  })
  return (
    <div>
        <productsInfo.Provider value={products}>
      <userInfo.Provider value={user}>
        {/* <h1>Parent Component:</h1> */}
        <Child1 />
        <Child2 />
      </userInfo.Provider>
      </productsInfo.Provider>
    </div>
  );
}
export default Parent;
