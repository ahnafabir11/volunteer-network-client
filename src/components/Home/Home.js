import './Home.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';


function Home() {
  
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://boiling-oasis-42648.herokuapp.com/events`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setEvents(data.reverse());
      })
  })

  return (
    <div className="Home">
      <div className="container">
        <h2 className="text-center pb-3">I GROW BY HELPING PEOPLE IN NEED</h2>
        <Form.Group style={{width: '300px', display: 'flex', margin: '0px auto 2rem auto'}}>
          <Form.Control type="text" name="searchEvent" placeholder="search events...." disabled />
          <Button disabled>Search</Button>
        </Form.Group>
        { isLoading &&
          <div className="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        }
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