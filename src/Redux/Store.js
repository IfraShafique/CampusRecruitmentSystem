import { configureStore } from '@reduxjs/toolkit';
import studentRegistrationSlice from './Reducer/studentRegistrationSlice'; // Updated import
import companyRegistrationSlice from './Reducer/companyRegistrationSlice';
import studentProfileSlice from './Reducer/studentProfileSlice';
import postJobSlice from './Reducer/postJobSlice';

const store = configureStore({
  reducer: {
    studentRegistration: studentRegistrationSlice,
    companyRegistration: companyRegistrationSlice,
    studentProfile: studentProfileSlice,
    postJob: postJobSlice,
  },
});


export default store;
