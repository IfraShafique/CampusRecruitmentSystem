import { createSlice } from "@reduxjs/toolkit";

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