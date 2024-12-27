import React, { useState } from "react";

function Forms() {
  const [userName, setUserName] = useState("");
  const [newName, setNewName] = useState();
  const getUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewName(userName);
    setUserName("");
    //    setNewName("")
  };
  return (
    <div>
      <h1>
        {" "}
        Hello:
        {newName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={getUserName} />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Forms;
