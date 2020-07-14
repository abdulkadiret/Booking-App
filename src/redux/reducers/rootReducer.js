import { combineReducers } from 'redux';
import bookingReducer from './bookingReducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  bookings: bookingReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

export default pReducer;
