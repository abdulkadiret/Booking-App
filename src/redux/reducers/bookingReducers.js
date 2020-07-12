import { NEW_BOOKINGS, BOOKINGS_MARK_STATUS } from '../actions';

const INITIAL_BOOKINGS = [];

const bookingReducer = (state = INITIAL_BOOKINGS, action) => {
  console.log('action =====>', action);
  switch (action.type) {
    case NEW_BOOKINGS:
      return [...state, { ...action.newBooking }];

    case BOOKINGS_MARK_STATUS:
      return state.map((booking) => {
        if (booking && booking.id === action.bookingId) {
          return {
            ...booking,
            status: action.seated,
          };
        } else return booking;
      });
    default:
      return state;
  }
};

export default bookingReducer;
