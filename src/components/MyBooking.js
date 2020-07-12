import React from 'react';
import { Card, Container } from 'react-bootstrap';

const MyBooking = ({ array = {} }) => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Card className="col-md-6 d-flex flex-column align-items-center shadow p-3 my-3 bg-light rounded">
        <Card.Body>
          <Card.Text>
            <dl className="row">
              <dt className="col-md-6">First Name: </dt>
              <dd className="col-md-6">{array.firstName}</dd>

              <dt className="col-md-6">Last Name: </dt>
              <dd className="col-md-6">{array.lastName}</dd>

              <dt className="col-md-6">Number of Guests: </dt>
              <dd className="col-md-6">{array.numberOfGuests}</dd>

              <dt className="col-md-6">Dining Date: </dt>
              <dd className="col-md-6">{array.date}</dd>

              <dt className="col-md-6">Phone Number: </dt>
              <dd className="col-md-6">{array.phone}</dd>

              <dt className="col-md-6">Email: </dt>
              <dd className="col-md-6">{array.email}</dd>
            </dl>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyBooking;
