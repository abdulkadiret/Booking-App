import React from "react";
import DATA from "../data/bookingData.json";
import { Container } from "react-bootstrap";

const Booking = () => {
  return (
    <Container className="table-responsive">
      <h1 className="text-center">Booking</h1>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Dining Data</th>
            <th scope="col">Number of Covers</th>
            <th scope="col">phone number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {DATA.map((data) => {
          return (
            <tbody>
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.diningDate}</td>
                <td>{data.numberOfCovers}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </Container>
  );
};

export default Booking;
