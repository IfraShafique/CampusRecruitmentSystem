import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setInfo } from "./studentRegistrationSlice";
import axios from "axios";

const initialState = {
  formData: {
    JobTitle: '',
    CompanyName: '',
    JobType: '',
    Location: '',
    Salary: '',
    SkillsRequirement: '',
    JobResponsibilities: '',
    JobDescription: '',
  },
  errorMessage: "",
  infoMessage: "",
};


export const submitForm = createAsyncThunk(
  "postJob/submitForm",
  async (formData, { dispatch }) => { // Remove the 'dispatch' parameter here
    try {
      const response = await axios.post(
        process.env.REACT_APP_POSTJOB_URI,
        formData,
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

  

const postJobSlice = createSlice({
  name: "postJob",
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

export const { updateField, resetForm } = postJobSlice.actions;
export default postJobSlice.reducer;
