export const NEW_BOOKINGS = 'NEW_BOOKINGS';
export const BOOKINGS_MARK_STATUS = 'BOOKINGS_MARK_STATUS';
export const GET_BOOKING = 'GET_BOOKING';

export const addBooking = (newBooking) => {
  return { type: NEW_BOOKINGS, newBooking };
};

export const getBooking = (bookingId) => {
  const action = { type: GET_BOOKING, bookingId };
  return action;
};

export const markSeated = (bookingId, status) => {
  return { type: BOOKINGS_MARK_STATUS, bookingId, status };
};
