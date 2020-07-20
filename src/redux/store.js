import { configureStore } from '@reduxjs/toolkit';

import phoneBookReducer from './phoneBookReducer.js';

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },
});

export default store;
