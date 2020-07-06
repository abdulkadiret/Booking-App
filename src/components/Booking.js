import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Booking = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              ref={register({ required: true })}
            />
          </div>
          <div className="col-md-6">
            <label for="lastName" className="text-muted">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div className="form-group d-flex justify-content-center">
          <div className="col-md-4">
            <label for="quantity" className="text-muted">
              Number of people:
            </label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              id="quantity"
              ref={register({ required: true })}
            />
          </div>
          <div className="col-md-4 mr-auto ml-auto">
            <label for="date-picker" className="text-muted">
              Pick date:
            </label>
            <input
              type="date"
              className="form-control"
              name="datePicker"
              id="datePicker"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div className="form-group d-flex">
          <div className="col-sm-6">
            <label for="phone" className="text-muted">
              Phone Number:
            </label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              ref={register({ required: true })}
            />
          </div>
          <div className="col-sm-6">
            <label for="email" className="text-muted">
              Email:{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              ref={register({ required: true })}
            />
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
