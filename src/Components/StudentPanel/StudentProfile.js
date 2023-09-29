import React, { useState, useEffect } from "react";
import img3 from "../Images/logoBlack.png";
import { Link, useNavigate } from 'react-router-dom';
import Title from "./Title";
import Menu from "./Menu";
import { setError, setInfo } from "../../Redux/Reducer/RegistrationSlice";
import { submitForm, resetForm, updateField } from "../../Redux/Reducer/studentProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default function StudentProfile() {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const errorMessage = useSelector((state) => state.studentProfile.errorMessage);
  const infoMessage = useSelector((state) => state.studentProfile.infoMessage);
  const formData = useSelector((state) => state.studentProfile.formData);
  const navigate = useNavigate(); // Initialize useNavigate
  const [userData, setUserData] = useState(null)

  // Feching data
  
  useEffect(() => {

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
console.log(token);
    // Token exists, make authenticated request
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

axios
  .get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/userData')
  .then((result) => {
    console.log('Result:', result.data);
    console.log("Token", token);
    setUserData(result.data);
    
  })
      .catch((err) => console.log('Axios Error:', err));
  }, []);


  const [resume, setResume] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFieldChange = (fieldName, value) => {
    dispatch(updateField({fieldName, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data before validation:", formData);

    const requiredFields = [
      "Name",
      "ContactNo",
      "Address",
      "Department",
      "CurrentSemester",
      "CGPA",
      "Skills",
    ];

    const isAnyFieldEmpty = requiredFields.some(
      (fieldName) => !formData[fieldName]
    );

    console.log("Is any field empty:", isAnyFieldEmpty);
    if (isAnyFieldEmpty) {
      dispatch(setError('No field should be empty'));
      return; // Prevent form submission if any field is empty
    }

    else if (!/^\d{11}$/.test(formData.ContactNo)){
      dispatch(setError("Contact no should have exactly 11 digits"));
      dispatch(setInfo(""));
      return;
    }

    else if (formData.CurrentSemester > 8 || formData.CurrentSemester === 8 ){
      dispatch(setError("Semester should be less than or equal to 8"));
      dispatch(setInfo(""));
      return;
    }

    else if (formData.CGPA > 4 || formData.CGPA === 4 ) {
      dispatch(setError("CGPA should not be greater than 4"));
      dispatch(setInfo(""));
      return;
    }

    // Create a FormData object to send the file along with other form data
    const formDataToSend = new FormData();
    formDataToSend.append("resume", resume);

    // Append other form fields to formDataToSend
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataToSend.append(key, formData[key]);
      }
    }

    dispatch(setError(""));
    dispatch(setInfo(""));
    
    dispatch(submitForm({ formDataToSend }));
    dispatch(setInfo("Successfully Registered"));
    
  };

  const initialFields = [
    { name: 'Name', type: "text" },
    { name: 'ContactNo', type: "text" },
    { name: 'Address', type: "text" },
    { name: 'Department', type: "text" },
    { name: 'CurrentSemester', type: "number" },
    { name: 'CGPA', type: "number" },
    { name: 'Skills', type: "text" },
  ];

  return (
    <div className="">
      {/* Hamburger Button */}
      <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 z-20">
        <button onClick={toggleMenu} className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <Title />
      {/* Content */}
      <div className="flex ">
        {/* menu */}
        <div
          className={`w-[60%] h-[100vh] ${
            menuOpen ? "block" : "hidden"
          } sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}
        >
          <div className="text-center pt-8 pb-5">
            <i className="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>
          <div className='text-xl md:text-2xl ml-10 my-5 font-bold text-cyan-950'>
        Profile: {userData ? userData.Name : 'Loading...'}
        </div>
          <Menu />
        </div>

        {/* Right Side */}
        {/* Profiles */}
        <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>


          <div div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col justify-center items-center sm:w-[50%]">
            <div>
              <img src={img3} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
              <h1 className="lg:text-5xl sm:text-3xl  text-2xl font-bold  max-sm:text-center mb-10">Profile Details</h1>
              <p className="sm:w-[70%] mb-6 max-sm:mx-10 text-sm"> <span className="font-bold text-xl">Note:</span> Please ensure that you enter your information correctly during signup, as changes cannot be made afterward.</p>
            </div>
            <form onSubmit={handleSubmit} >
              {initialFields.map((field, index) => (
                <div key={index}>
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    placeholder={field.name}
                    className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black"
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  />
                </div>
              ))}

              <div className="mt-3">
                <label htmlFor="Upload Resume" className=""> Upload Resume</label><br/>
                <label htmlFor="Note" className="text-xs text-red-600"> Should be in PDF format</label><br/>
                <input type="file" name="resume" className="my-2 " required onChange={(e) => setResume(e.target.files[0])}/>
              </div>

              <div className="my-3 text-white max-sm:mx-2">
                <button type="submit" className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">Register</button>
              </div>
            </form>

            {/* Buttons */}
            <div className="my-3 text-white max-sm:mx-2">
              {/* back button */}
              <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
                <button><i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i> <Link to='/student-panel' className="font-semibold">Back to Dashboard</Link></button>
                <h1 className="text-red-700 font-semibold mt-2">{errorMessage}</h1>
                <h1 className="text-green-600 font-semibold mt-2">{infoMessage}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


