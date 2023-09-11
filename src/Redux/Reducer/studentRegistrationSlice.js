import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    formData: {
      StudentID: "", // Make sure the property name matches the field name
      StudentName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
    errorMessage: "",
    infoMessage: "",
  };
  

  // Async Function to Post StudentRegistration Data

  export const submitForm = createAsyncThunk(
    "studentRegistration/SubmitForm",
    async (formData, {dispatch}) => {
      try{
        const response = await axios.post(
          process.env.REACT_APP_STUDENTREGISTRATION_URI, formData
        );

        // Successfully registration message
        dispatch(studentRegistrationSlice.actions.setInfo("Successfully Registered"));

        // Reset all fileds
        dispatch(studentRegistrationSlice.actions.resetForm())
      }
      catch (error){
        dispatch(studentRegistrationSlice.actions.setError("Registration Failed"))
      }
    }
  )

  const studentRegistrationSlice = createSlice({
    name: "studentRegistration",
    initialState,
    reducers: {
      updateField: (state, action) => {
        const { fieldName, value } = action.payload; // Fix the typo here
        state.formData[fieldName] = value;
      },
  
      setError: (state, action) => {
        state.errorMessage = action.payload;
      },
  
      setInfo: (state, action) => {
        state.infoMessage = action.payload;
      },
  
      resetForm: (state, action) => {
        state.formData = { ...initialState.formData }; // Fix the property name here
        state.errorMessage = "";
        state.infoMessage = "";
      },
    },
  });
  
export const {updateField, setError, setInfo, resetForm} = studentRegistrationSlice.actions;
export default studentRegistrationSlice.reducer;