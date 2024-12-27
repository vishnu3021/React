import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let route = useNavigate();
  const logInWithFb = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email,password)
    try {
      let logInSucess = signInWithEmailAndPassword(
        logInWithFb,
        email,
        password
      );
      if (logInSucess) {
        console.log("sucessfully log in");
        
        route("/home");
        console.log("login done")
      }
      //    console.log("sucessfully log in")
      //    route("/home")
      else {
        alert("login failed");
      }
    } catch (error) {
      console.log(error);
      alert(error)
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
