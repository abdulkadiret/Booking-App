import { combineReducers } from 'redux';
import bookingReducer from './bookingReducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const allReducers = combineReducers({
  bookings: bookingReducer,
});

const pReducer = persistReducer(persistConfig, allReducers);

export default pReducer;
