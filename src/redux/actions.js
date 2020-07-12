export const NEW_BOOKINGS = 'NEW_BOOKINGS';

export const addBooking = (newBooking) => {
  const action = { type: NEW_BOOKINGS, newBooking };
  return action;
};
