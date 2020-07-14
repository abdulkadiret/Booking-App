import { createStore } from 'redux';
import pReducer from './reducers/rootReducer';
import { persistStore } from 'redux-persist';

const store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;
