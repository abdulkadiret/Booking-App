import { NEW_BOOKINGS } from '../actions';

const INITIAL_BOOKINGS = [];

const bookingReducer = (state = INITIAL_BOOKINGS, action) => {
  console.log('action =====>', action);
  switch (action.type) {
    case NEW_BOOKINGS:
      return [...state, { ...action.newBooking }];

    default:
      return state;
  }
};

export default bookingReducer;
