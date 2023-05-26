import React from "react";
import './Restcard.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Restcard({restdata}) {
  return (
    <>
       <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:'none'}}>
        <Card className="first" style={{ width: '18rem'}}>
          <Card.Img variant="top" src={restdata.photograph} />
          <Card.Body>
            <Card.Title style={{ border: '1px solid rgb(204, 71, 233)'}}><b>{restdata.name}</b></Card.Title>
            <Card.Text>
            <p>{restdata.cuisine_type}</p>
            <p>Neighbourhood {restdata.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>

      </Link>   
  </>
  );
}

export default Restcard;
