import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setInfo } from "./RegistrationSlice";
import axios from "axios";

const initialState = {
  formData: {
    Name: "",
    ContactNo: "",
    Address: "",
    Department: "",
    CurrentSemester: "",
    CGPA: "",
    Skills: "",
  },
  errorMessage: "",
  infoMessage: "",
};

export const submitForm = createAsyncThunk(
  "studentProfile/submitForm",
  async ({ formDataToSend }, { dispatch }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CONNECTION_URI}/stuprofile`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      dispatch(setInfo("Successfully Updated"));
      dispatch(resetForm());
    } catch (error) {
      dispatch(setError("Registration Failed"));
    }
  }
);

const studentProfileSlice = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {
    updateField: (state, action) => {
        const { fieldName, value } = action.payload;
        state.formData[fieldName] = value;
      },
      

    resetForm: (state, action) => {
      state.formData = { ...initialState.formData };
      state.errorMessage = "";
      state.infoMessage = "";
    },
  },
});

export const { updateField, resetForm } = studentProfileSlice.actions;
export default studentProfileSlice.reducer;
