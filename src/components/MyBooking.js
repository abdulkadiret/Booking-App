import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MyBooking = ({ array = {} }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
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
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-muted mr-2">Status: </label>
            <input
              type="radio"
              name="status"
              className="mx-1"
              id="notArrived"
              value="Not Arrived"
              ref={register}
            />

            <label for="notArrived" className="text-muted mr-2">
              Not Arrived
            </label>

            <input
              type="radio"
              name="status"
              className="mr-1"
              id="seated"
              value="Seated"
              ref={register}
            />
            <label for="seated" className="text-muted mr-2">
              Seated
            </label>
            <input
              type="submit"
              className="bg-primary text-white border-0 rounded px-2 py-1"
            />
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default MyBooking;
