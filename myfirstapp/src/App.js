import logo from "./logo.svg";
import "./App.css";
import LifeCycle from "./day11/lifeCycle";
import Update from "./day12/updating";
import Forms from "./FuncCom/FormComp";
import Formstwo from "./FuncCom/Formcom2";
import UseEffectComp from "./useEffct/useEffect";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import MovieList from "./UseParams/MovieList";
import MovieData from "./UseParams/MoviesData";
import Parent from "./context/parnt";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Home from "./Login/Home";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [userLoggIn, setUserLoggin] = useState(null);
  const authorised = getAuth();
  useEffect(() => {
    let a = onAuthStateChanged(authorised, (e) => {
      if (e) {
        setUserLoggin(true);
      } else {
        setUserLoggin(false);
      }
    });
  }, [authorised]);
  return (
    <div>
      {/* <Parent/> */}
      <Router>
        <Routes>
          <Route
            path="/home"
            element={userLoggIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={userLoggIn ? <Navigate to="/home" /> : <Login />}
          />
        </Routes>
      </Router>
      {/* // <Signup/> */}
    </div>
    // <Router>
    //   <nav style={{
    //     display:"flex",
    //     justifyContent:"space-around",
    //     background:"black",
    //     color:"white",
    //     textDecoration:"none"
    //     // alignItems:"center"
    //   }}>
    //     <Link className='Links' to="/LifeCycle">LifeCycle</Link>
    //     <Link className='Links' to="/Update">Update</Link>
    //     <Link className='Links' to="/Forms">Forms</Link>
    //     <Link className='Links' to="/Formstwo">Formstwo</Link>
    //     <Link className='Links' to="/UseEffectComp">UseEffectComp</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/LifeCycle" element={<LifeCycle/>}/>
    // <Route path="/Update" element={<Update/>}/>
    //     <Route path="/Forms" element={<Forms/>}/>
    //     <Route path="/Formstwo" element={<Formstwo/>}/>
    //     <Route path="/UseEffectComp" element={<UseEffectComp/>}/>

    //   </Routes>
    // </Router>

    // {/* <Router>
    //   <Link to="/movieList">Movie List</Link>
    //   <Link to="/data"><MovieData/></Link>
    //   <Routes>
    //     <Route path="/movieList" element={<MovieList/>}/>
    //     <Route path="/movieList/:id" element={<MovieData/>}/>
    //   </Routes>
    // </Router> */}
  );

  // <div className="App">
  {
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
  }
  // {/* <LifeCycle/> */}
  // {/* <Update/> */}
  // {/* <Forms/> */}
  // {/* <Formstwo/> */}
  // // <UseEffectComp/>

  // </div>
}

export default App;
