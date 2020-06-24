import React from "react";
import DATA from "../data/bookingData.json";
import { Container } from "react-bootstrap";

const Seating = () => {
  return (
    <Container className="table-responsive">
      <h1 className="text-center">Seating</h1>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Dining Data</th>
            <th scope="col">Number of Covers</th>
            <th scope="col">phone number</th>
            <th scope="col">Email</th>
            <th scope="col">Arrived</th>
          </tr>
        </thead>
        {DATA.map((data) => {
          return (
            <tbody>
              <tr scope="row">
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.diningDate}</td>
                <td>{data.numberOfCovers}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.email}</td>
                <td>{data.isArrived ? "Seated" : "Not Arrived"}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </Container>
  );
};

export default Seating;
