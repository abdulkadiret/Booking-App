import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { markSeated } from '../redux/actions';
import PropTypes from 'prop-types';

const MyBooking = ({ getBookingProps, markSeatedProps }) => {
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    const { pathname } = window.location;
    const bookingId = pathname && pathname.split('/')[2];
    setBookingId(bookingId);
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const { pathname } = window.location;
    const bookingId = pathname && pathname.split('/')[2];
    console.log('statusData=========>>>', data);
    markSeatedProps(bookingId, data.status);
    e.target.reset();
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <Card className="col-md-6 d-flex flex-column align-items-center shadow p-3 my-3 bg-light rounded">
        <Card.Body>
          <div>
            <dl className="row">
              <dt className="col-md-6 text-muted">First Name: </dt>
              <dd className="col-md-6">
                {getBookingProps(bookingId).firstName}
              </dd>

              <dt className="col-md-6 text-muted">Last Name: </dt>
              <dd className="col-md-6">
                {getBookingProps(bookingId).lastName}
              </dd>

              <dt className="col-md-6 text-muted">&#8470; of Guests: </dt>
              <dd className="col-md-6">
                {getBookingProps(bookingId).numberOfGuests}
              </dd>

              <dt className="col-md-6 text-muted">Dining Date: </dt>
              <dd className="col-md-6">{getBookingProps(bookingId).date}</dd>

              <dt className="col-md-6 text-muted">Phone &#8470;: </dt>
              <dd className="col-md-6">{getBookingProps(bookingId).phone}</dd>

              <dt className="col-md-6 text-muted">Email: </dt>
              <dd className="col-md-6">{getBookingProps(bookingId).email}</dd>
            </dl>
          </div>
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

            <label htmlFor="notArrived" className="text-muted mr-2">
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
            <label htmlFor="seated" className="text-muted mr-2">
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

MyBooking.propTypes = {
  getBookingProps: PropTypes.func.isRequired,
  markSeatedProps: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    getBookingProps: (bookingId) =>
      state.bookings.find((booking) => booking.id === bookingId) || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markSeatedProps: (bookingId, status) =>
      dispatch(markSeated(bookingId, status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooking);
