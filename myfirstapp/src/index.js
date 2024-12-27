import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from "./day2/Sample"
import Header from './day3/Header';
import Footer from './day3/Footer';
import Gallary from './day3/Gallary';
import Comp from './day4/Gvr';
import Fetch from './day5/Fetch'
import Data from './day5/Data'
import Props1 from "./day5/props/Props1"
import Props2 from "./day5/props/Props2"
import Props3 from "./day5/props/Props3";
import Card from './day6/boot/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from "./day6/boot/home";
import Accordion from './day7/Accordion';
import Condrend from './day7/Conditional';
// import Parent from './day8/parent/parent';
import Condinal from './day8/condition/Condition';
import Counter from './day8/counter'
import Toggle from './day9_FormsClass/Toggle';
import Toggles from './day9_FormsClass/Toogle2';
import FormSubmit from './day9_FormsClass/formSubmit';
import Food from './Food/Food';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Food/>
    {/* <App /> */}
    {/* <Sample/> */}
    {/* <Header/> */}
    {/* <Gallary/> */}
    {/* <Footer/>  */}  
    {/* <Comp/> */}
    {/* <P>fetch concept from react js</P> */}
    {/* <Fetch/> */}
    {/* <Data/> */}
    {/* <p> Practice props from reactjs:</p> */}
    {/* <Props1 name='vishnu' city= 'knl'/>
    <Props1 name ='vardhan' city='hyd'/>
    <Props1 name = 'GVVR' city="Hyderbad"/> */}
    {/*NOTE: implementing on class compount in jsx   */}
    {/* <Props2 name=' VISHNU VARDHAN ' city='knl' role="front-end developer" application="application developer"/> */}

    {/* { creating child and implementing in jsx using functions} */}
{/* <Props3>
  <p>hello</p>
  <p>
  <h1>mobile</h1>
  <p>moto g85</p>
  <p>price : 18,000</p>
  </p>
</Props3> */}
{/* <Card title='New 5g mobile'/> */}
{/* <Api/> */}
{/* date:27/11/2024 class code: */}
{/* <Accordion/>
<Condrend/> */}
{/* date:28/11/2024 class code:   day8*/}
 {/* <Parent parentpage='im a parent page '/> */}
 {/* note: topic CONDITIONAL RENDERING  */}
 {/* <Condinal login="user"/> */}
 {/* notes :
 => in react , state  is an object which store the dynamic variables .They cand be user inputs / API response/calculation 
 => Whene ever a data changes in a state then state can be update and then component can be re-render
 */}
  
 {/* <Counter /> */}
 {/* day9 Different examples for state updating in class component */}
 {/* <Toggle/>  */}
 {/* <Toggles/> */}
 {/* <FormSubmit/> */}
 {/* <Card/> */}

 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
