import { configureStore } from '@reduxjs/toolkit';
import RegistrationSlice from './Reducer/RegistrationSlice'; // Updated import
import studentProfileSlice from './Reducer/studentProfileSlice';
import postJobSlice from './Reducer/postJobSlice';
import UserDataSlice from './Reducer/UserDataReducer';

const store = configureStore({
  reducer: {
    studentRegistration: RegistrationSlice,
    studentProfile: studentProfileSlice,
    postJob: postJobSlice,
    userData: UserDataSlice,
  },
});


export default store;
