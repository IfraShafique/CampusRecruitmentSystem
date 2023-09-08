import { configureStore } from '@reduxjs/toolkit';
import studentRegistrationReducer from './Reducer'; // Updated import

const store = configureStore({
  reducer: {
    studentRegistration: studentRegistrationReducer, // Corrected key name
  },
});

export default store;
