import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import pic from "../../image/R.jpeg"
function Cards(props){
    return (
        <>
        
    <Card style={{ width: '18rem' , color:'blue', borderRadius:'30px'}}>
      <Card.Img variant="top" src={props.photo}  height={'200px'}/>
      <Card.Body style={{height:'280px'}}>
        <Card.Title>{props?.title}</Card.Title>
        <Card.Text style={{overflowY:"scroll", height:"15vh"}}>
        <p>{props.description}</p>
        </Card.Text>
      </Card.Body>
      <h1>{props.price}</h1>
      
      <Card.Footer className="text-muted"> <Button variant="primary">Go somewhere</Button></Card.Footer>
    </Card>
    
        </>
    )
}
export default Cards;
