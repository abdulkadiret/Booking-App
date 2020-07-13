import bookingReducer, {
  INITIAL_BOOKINGS,
} from '../../../redux/reducers/bookingReducers';
import { NEW_BOOKINGS, BOOKINGS_MARK_STATUS } from '../../../redux/actions';

describe('bookings reducer', () => {
  const initialBookings = bookingReducer(INITIAL_BOOKINGS);

  it('should return all bookings initially', () => {
    expect(initialBookings.length).toEqual(0);
  });

  it('should allow adding a new booking', () => {
    const result = bookingReducer(INITIAL_BOOKINGS, {
      type: NEW_BOOKINGS,
      newBooking: {
        firstName: 'Abdulkadir',
        lastName: 'Awel',
        numberOfGuests: '2',
        date: '2020-07-20',
        phone: '07467843562',
        email: 'email@email.com',
      },
    });
    expect(result).toHaveLength(1);
  });

  it('should allow marking a booking as Seated', () => {
    //Arrange
    const initialBookings = [
      { id: 1, firstName: 'Akey' },
      { id: 2, firstName: 'Awet' },
    ];
    const action = {
      type: BOOKINGS_MARK_STATUS,
      bookingId: 2,
      status: true,
    };
    //Act
    const result = bookingReducer(initialBookings, action);
    //Assert
    expect(result[0].status).toBeUndefined();
    expect(result[1].status).toBeTruthy();
  });
});
