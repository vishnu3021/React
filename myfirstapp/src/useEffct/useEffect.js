import React, { useState, useEffect } from "react";
function UseEffectComp() {
  const [number, updateNumber] = useState(1);
  const [value, updateValue] = useState("vishnu");
  const[appears, updateAppears] = useState("GVR");
  const handleBtn = () => {
    updateNumber(number + 1);
  };
  const display = () => {
    updateAppears(appears + "   from Kurnool");
  };
  useEffect(() => {
    {
      updateValue(value+ "11r");
    }
  }, [number,appears]);

  return (
    <div>
      <h1> Number:{number} </h1>
      <h1>value:{value}</h1>
      <h2>display{appears}</h2>
      <button onClick={handleBtn}> click me </button>
      <button onClick={display}> display </button>
    </div>
  );
}
export default UseEffectComp;
