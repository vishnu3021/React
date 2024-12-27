import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
// import pic from "../image/R.jpeg"

function Cards(props){
    return (
        <div style={{}}>
        
    <Card style={{ width: '18rem' , color:'blue', borderRadius:'30px', color:"white"}}>
      {/* <Card.Img variant="top" src={props.image}  height={'200px'}/> */}
      <Card.Img variant="top" src={props.img}  height={'200px'} />
      <Card.Body style={{height:'280px', color:"green"}}>
        <Card.Title style={{backgroundColor:"white",color:"purple",borderRadius:"20px",overflowY:"scroll"}}>{props?.title}</Card.Title>
        <Card.Text style={{overflowY:"scroll", height:"15vh"}}>
        <p>{props.description}</p>
        </Card.Text>
      </Card.Body>
      <h1>{props.price}</h1>
      
      
      <Card.Footer className="text-muted"> <Button variant="primary">Go somewhere</Button></Card.Footer>
    </Card>
    
        </div>
    )
}
export default Cards;
