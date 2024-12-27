import { Component } from "react";
import './Gvr.css';
import vishnu2 from '../image/5g.jpeg' //5g mobile
import vishnu1 from '../image/R.jpeg' // mobile
import laptop from "../image/laptop.jpg";
import vishnu4 from '../image/watch.jpg';
                //  using arrary 
const product =[
    {
        model: 'mobile',
        id:"Rs.5000",
        avaliable: true,
    },
    {
        model:"5g mobile",
        id:8000,
        avaliable: true 
    },{
        model:"laptob",
        id:55000,
        avaliable: false
    },
    {
        model:"watch",
        id:2000,
        avaliable: true
    },
    {
        model:"shoes",
        size:8,
        avaliable: true
    }
]

class Main extends Component{
    render(){
        return(
            <>
            <div className="maindiv">
                <div className={product[0].avaliable? 'avaliable': 'unavaliable'}>
                    <h1>
                   {product[0].model}  </h1>
                   <img src={vishnu1} alt="mobile" height={'100vh'}/>
                   <h1>
                   {product[0].id}</h1>
                </div>
                <div className={product[1].avaliable? 'avaliable': 'unavaliable'}>
                    <h1>
                    {product[1].model}</h1>
                    <img src={vishnu2} alt="mobile" height={'100vh'}/>
                    <h1>
                    {product[1].id}</h1>
                </div>
                <div className={product[2].avaliable? 'avaliable': 'unavaliable'}><h1>
                    {product[2].model}</h1>
                    <img src={laptop} alt="mobile" height={'100vh'}/>
                    <h1>
                    {product[2].id}</h1>
                </div>
                <div className={product[3].avaliable? 'avaliable': 'unavaliable'}><h1>
                    {product[3].model}</h1>
                    <img src={vishnu4} alt="mobile" height={'100vh'}/>
                    <h1>
                    {product[3].id}</h1>
                </div>
               
            </div>
            </>
        )
    }
}
// default export Gvr;
export default Main;