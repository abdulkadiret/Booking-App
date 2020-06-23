import React from "react";
import DATA from "../data/bookingData.json";

const Booking = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Dining Data</th>
            <th>Number of Covers</th>
            <th>phone number</th>
            <th>Email</th>
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
    </div>
  );
};

export default Booking;
