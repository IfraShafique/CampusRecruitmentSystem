import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    formData: {
      LoginID: "", // Make sure the property name matches the field name
      Name: "",
      Email: "",
      ContactNo: "",
      Password: "",
      ConfirmPassword: "",
      Role: "",
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
          `${process.env.REACT_APP_CONNECTION_URI}/registration`, formData
        );

        // Successfully registration message
        dispatch(RegistrationSlice.actions.setInfo("Successfully Registered"));

        // Reset all fileds
        dispatch(RegistrationSlice.actions.resetForm())
      }
      catch (error){
        dispatch(RegistrationSlice.actions.setError("Registration Failed"))
      }
    }
  )

  const RegistrationSlice = createSlice({
    name: "Registration",
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
  
export const {updateField, setError, setInfo, resetForm} = RegistrationSlice.actions;
export default RegistrationSlice.reducer;