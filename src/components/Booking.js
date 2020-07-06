import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Booking = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    numberOfPerson: '',
    date: '',
    Phone: '',
    email: '',
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
  console.log('Date', date);
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <>
        <h3>Make Your Booking Here</h3>
        <p>It's quick and easy</p>
      </>
      <form
        class="form-group d-flex flex-column justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group d-flex">
          <div className="col-md-6">
            <label for="firstName" className="text-muted">
              First Name:{' '}
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              ref={register({
                required: {
                  value: true,
                  message: 'First name is required',
                },
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
            />
            {errors.firstName && (
              <p style={{ color: 'red' }}>
                <small> {errors.firstName.message}</small>
              </p>
            )}
          </div>
          <div className="col-md-6">
            <label for="lastName" className="text-muted">
              Last Name:{' '}
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              ref={register({
                required: {
                  value: true,
                  message: 'Last name is required',
                },
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
            />
            {errors.lastName && (
              <p style={{ color: 'red' }}>
                <small>{errors.lastName.message}</small>
              </p>
            )}
          </div>
        </div>
        <div className="form-group d-flex justify-content-center">
          <div className="col-md-4">
            <label for="quantity" className="text-muted">
              Number of people:{' '}
            </label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              id="quantity"
              min="1"
              ref={register({
                required: {
                  value: true,
                  message: 'Number of covers is required',
                },
              })}
            />
            {errors.quantity && (
              <p style={{ color: 'red' }}>
                <small> {errors.quantity.message}</small>
              </p>
            )}
          </div>
          <div className="col-md-4 mr-auto ml-auto">
            <label for="date-picker" className="text-muted">
              Pick date:{' '}
            </label>
            <input
              type="date"
              className="form-control"
              name="datePicker"
              id="datePicker"
              min={`${date}`}
              ref={register({
                required: {
                  value: true,
                  message: 'Date is required',
                },
              })}
            />
            {errors.datePicker && (
              <p style={{ color: 'red' }}>
                <small> {errors.datePicker.message}</small>
              </p>
            )}
          </div>
        </div>
        <div className="form-group d-flex">
          <div className="col-sm-6">
            <label for="phone" className="text-muted">
              Phone Number:{' '}
            </label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              ref={register({
                required: {
                  value: true,
                  message: 'Phone number is required',
                },
                minLength: {
                  value: 11,
                  message: 'Phone number should be minimum of 11 digits',
                },
              })}
            />
            {errors.phone && (
              <p style={{ color: 'red' }}>
                <small> {errors.phone.message}</small>
              </p>
            )}
          </div>
          <div className="col-sm-6">
            <label for="email" className="text-muted">
              Email:{' '}
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              ref={register({
                required: { value: true, message: 'Email is required' },
              })}
            />
            {errors.email && (
              <p style={{ color: 'red' }}>
                <small> {errors.email.message}</small>
              </p>
            )}
          </div>
        </div>
        <input
          type="submit"
          className="p-2 m-3 bg-primary text-white border-0 rounded"
        />
      </form>
    </Container>
  );
};

export default Booking;
