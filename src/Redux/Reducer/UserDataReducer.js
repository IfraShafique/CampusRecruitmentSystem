import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserRegistrationData = createAsyncThunk(
  "userData/fetchUserRegistrationData",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwt');

      if (!token) {
        return rejectWithValue('Token not found');
      }

      axios.defaults.withCredentials = true;

      const response = await axios.get(
        "https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/userData",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

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
        state.error = action.error.message;
      });
  },
});

export default userDataSlice.reducer;
