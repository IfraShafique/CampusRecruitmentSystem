import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentRegistrationSlice, { setError, setInfo } from "./studentRegistrationSlice";
import axios from "axios";


const initialState = {
    formData: {
        LoginID: "",
        CompanyName: "",
        Industry: "",
        HRName: "",
        CompanyEmail: "",
        ContactNo: "",
        WebsiteLink: "",
        AboutCompany: "",
        Password: "",
        ConfirmPassword: "",
    },
    errorMessage: "",
    infoMessage: "",
};

// create a post function for company registration
export const submitForm = createAsyncThunk(
    "companyRegistration/SubmitForm",
    async (formData, { dispatch }) => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_COMPANYREGISTRATION_URI,
          formData
        );
  
        // Successfully Registered message
        dispatch(studentRegistrationSlice.actions.setInfo("Successfully Registered"));
  
        // Reset all fields
        dispatch(companyRegistrationSlice.actions.resetForm());
      } catch (error) {
        // Show error message
        dispatch(studentRegistrationSlice.actions.setError("Registration Failed"))
      }
    }
  );
  

const companyRegistrationSlice = createSlice({
    name: "companyRegistration",
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { fieldName, value } = action.payload; // Fix the typo here
            state.formData[fieldName] = value;
          },
  
      resetForm: (state, action) => {
        state.formData = { ...initialState.formData }; // Fix the property name here
        state.errorMessage = "";
        state.infoMessage = "";
      },
    },
  });
  export { setError, setInfo };
export const {updateField, resetForm} = companyRegistrationSlice.actions;
export default companyRegistrationSlice.reducer;