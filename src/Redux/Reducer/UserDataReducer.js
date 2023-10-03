import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from 'jwt-decode';


export const fetchUserRegistrationData = createAsyncThunk(
    "userData/ fetchUserRegistrationData",
    async () => {
        try {
            const token = localStorage.getItem('jwt');

            const decodedToken = jwtDecode(token);
            
            if (token) {
              const currentTime = Date.now() / 1000; // Convert to seconds
              if (decodedToken.exp < currentTime) {
                // Token has expired
                // Perform logout or redirect to login page
                localStorage.removeItem('jwt'); // Clear the expired token from local storage
              }}
        
            console.log(decodedToken);
            // Token exists, make authenticated request
            axios.defaults.withCredentials = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`${process.env.REACT_APP_CONNECTION_URI}/userData`);

            console.log('Result:', response.data);
            console.log("Token", token);
        
            // Return the data fetched from the server
            return response.data;
            
            
        } catch (error) {
            throw(error)
        }

    }
)


// Define a slice with a reducer
const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
      data: null,
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserRegistrationData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchUserRegistrationData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchUserRegistrationData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message; // Handle the error as needed
        });
    },
  });
  
  // Export the reducer and actions
  export default userDataSlice.reducer;