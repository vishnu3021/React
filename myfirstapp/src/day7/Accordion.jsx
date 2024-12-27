import React from "react";
import Accordion from 'react-bootstrap/Accordion';
function Accordin(){
    return(
        <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
         hello every one im name vishnu . im learning react js at 10,000 coders kphb
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          hey have a great day 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
        </div>
    )
}

export default Accordin;