import { combineReducers } from 'redux';
import bookingReducer from './bookingReducers';

const allReducers = combineReducers({
  bookings: bookingReducer,
});

export default allReducers;
