import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm, ErrorMessage } from 'react-hook-form';
import { connect } from 'react-redux';
import { addBooking } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Booking = ({ addBookingProps }) => {
  const [bookingId, setBookingId] = useState('');

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (booking, e) => {
    const id = uuidv4();
    setBookingId(id);
    addBookingProps({ ...booking, id });
    e.target.reset();
  };

  const today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  const date = yyyy + '-' + mm + '-' + dd;

  return (
    <Container className="d-flex flex-column align-items-center shadow p-5 my-3 bg-light">
      <>
        <h3>Make Your Booking Here</h3>
        <p>It's quick and easy</p>
      </>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-group d-flex flex-column justify-content-center"
      >
        <div className="form-group d-flex">
          <div className="col-md-6">
            <label htmlFor="firstName" className="text-muted">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              ref={register({
                required: 'Required',
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              as="p"
              style={{ color: 'red', fontSize: 12 }}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="text-muted">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              ref={register({
                required: 'Required',
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              as="p"
              style={{ color: 'red', fontSize: 12 }}
            />
          </div>
        </div>
        <div className="form-group d-flex justify-content-center">
          <div className="col-md-4">
            <label htmlFor="numberOfGuests" className="text-muted">
              &#8470; of Guests
            </label>
            <input
              type="number"
              name="numberOfGuests"
              className="form-control"
              id="numberOfGuests"
              min="1"
              ref={register({
                required: 'Required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="numberOfGuests"
              as="p"
              style={{ color: 'red', fontSize: 12 }}
            />
          </div>
          <div className="col-md-4 mr-auto ml-auto">
            <label htmlFor="date" className="text-muted">
              Pick Date
            </label>
            <input
              type="date"
              name="date"
              className="form-control"
              id="date"
              min={`${date}`}
              ref={register({
                required: 'Required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="date"
              as="p"
              style={{ color: 'red', fontSize: 12 }}
            />
          </div>
        </div>
        <div className="form-group d-flex">
          <div className="col-sm-6">
            <label htmlFor="phone" className="text-muted">
              Phone &#8470;
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="phone"
              ref={register({
                required: 'Required',
                minLength: {
                  value: 11,
                  message: 'Phone number should be minimum of 11 digits',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="phone"
              as="p"
              style={{ color: 'red', fontSize: 12 }}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="email" className="text-muted">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address format',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              as="p"
              style={{ color: 'red', fontSize: 12 }}
            />
          </div>
        </div>
        <input
          type="submit"
          className="p-2 m-3 bg-primary text-white border-0 rounded"
        />
      </form>
      {bookingId && <Redirect to={`/myBooking/${bookingId}`} />}
    </Container>
  );
};

Booking.propTypes = {
  addBookingProps: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBookingProps: (newBooking) => dispatch(addBooking(newBooking)),
  };
};

export default connect(null, mapDispatchToProps)(Booking);
