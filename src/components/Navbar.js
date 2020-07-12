import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Booking
          </Nav.Link>
          <Nav.Link as={NavLink} to="/MyBooking">
            My Booking
          </Nav.Link>
          <Nav.Link as={NavLink} to="/seating">
            Seating
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
