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
            const response = await axios.get(
        "https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/userData"
      );

      return response.data;
    } catch (error) {
      throw error; // This will be captured by fetchUserRegistrationData.rejected action
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
