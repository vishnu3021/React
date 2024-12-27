import React, { useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "../firebase"
const Signup = () => {
    let signupDoneWith=getAuth(app)
    const  route= useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=  (e)=>{
        e.preventDefault()
        try{
            let a =  createUserWithEmailAndPassword(signupDoneWith,email,password);
            // alert("sucessfully done")
        }
        catch(error){
            console.log(error)
        }
        console.log("Form submitted");
        setEmail("")
        setPassword("")
        // alert("email:" + " "+email + " "+ "password "+' '+ password)
        route('/login')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type='password' placeholder='enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
