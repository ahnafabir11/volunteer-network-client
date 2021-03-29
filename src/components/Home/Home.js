import './Home.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';


function Home() {
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/events`)
      .then(res => res.json())
      .then(data => {

        setEvents(data.reverse());
      })
  })

  return (
    <div className="Home">
      <div className="container">
        <div className="d-flex justify-content-around flex-wrap">
          {
            events.map((event, idx)=> {
              return(
                <Card style={{ width: '16rem', marginBottom: '20px' }} className="bg-dark" key={idx}>
                  <Card.Img variant="top" src={event.imageUrl} style={{height: '200px'}} />
                  <Card.Body>
                    <Card.Title className="text-center text-white">{event.title}</Card.Title>
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home