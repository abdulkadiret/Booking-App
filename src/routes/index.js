import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Booking from '../components/Booking';
import Seating from '../components/Seating';
import MyBooking from '../components/MyBooking';

export default () => (
  <Switch>
    <Route exact path="/" component={Booking} />
    <Route path="/seating" component={Seating} />
    <Route path="/myBooking" component={MyBooking} />
  </Switch>
);
