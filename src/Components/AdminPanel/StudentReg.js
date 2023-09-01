import React, { useState } from "react";
import img2 from "../Images/img2.png";
import img3 from "../Images/logoBlack.png";
import { Link } from 'react-router-dom';
import AdminMenu from "./AdminMenu";
import axios from "axios";

export default function CompanySignup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const initialFormState = {
    StudentID: "",
    StudentName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit= (event) => {
    event.preventDefault();

    const requiredFields = [
      "StudentID",
      "StudentName",
      "Email",
      "Password",
      "ConfirmPassword",
    ];

    const isAnyFieldEmpty = requiredFields.some(
      (fieldName) => !formData[fieldName]
    );
  
    if (isAnyFieldEmpty) {
      setErrorMessage("No field should be empty");
      return; // Prevent form submission if any field is empty
    }

    else if (formData.Password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long");
      setInfoMessage(""); // Clear the success message
      return; // Prevent form submission if the password is too short
    }

    else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&!?])[A-Za-z\d@#$%&!?]+$/.test(formData.Password)){
      setErrorMessage("Password should contain at least one letter, one number, and one special character");
      setInfoMessage("");
      return;
    }

    else if (formData.Password !== formData.ConfirmPassword) {
      setErrorMessage("Password and Confirm Password do not match");
      return; // Prevent form submission if they don't match
    }

    setErrorMessage("");
    setInfoMessage("");

    axios
    .post("http://localhost:4000/studentreg", formData)
    .then((result) => {
      console.log("StudentRegistration", result.data);
      setInfoMessage("Successfully Registered"); // You can show a success message
      // Reset form fields to their initial empty state
        setFormData(initialFormState);
        
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Registration Failed"); // You can show an error message
      });
  };
  
  const handleFieldChange = (fieldName, value) => {
    // Update the form data with the new value
    setFormData({ ...formData, [fieldName]: value });
  };


 // Modify your initialFields to include initial values
const initialFields = [
  { name: 'StudentID', type: 'text', value: formData.StudentID },
  { name: 'StudentName', type: 'text', value: formData.StudentName },
  { name: 'Email', type: 'email', value: formData.Email },
  { name: 'Password', type: 'password', value: formData.Password },
  { name: 'ConfirmPassword', type: 'password', value: formData.ConfirmPassword },
  // Add more fields as needed
];


  return (

<div>
        {/* Hamburger Button */}
        <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
        <button onClick={toggleMenu} className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {/* title */}
      <div className=' text-center'>
      <h1 className='flex items-center justify-center bg-cyan-950 text-white sm:text-4xl  text-center text-xl font-semibold py-3'><span className=''><img src={img2} alt="logo" className='w-[8rem]' /></span>Admin Dashboard</h1>
      </div>
      
      {/* Content */}
      <div className='flex '>

        {/* menu */}
        <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
        <div className='text-center pt-8 pb-5'>
          <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
        </div>

          <AdminMenu/>
        </div>

 
        {/* Details */}
        <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
  
      
      <div div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col justify-center items-center sm:w-[50%]">
        <div>
          <img src={img3} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
          <h1 className="lg:text-5xl sm:text-3xl  text-2xl font-bold  max-sm:text-center mb-10">Student Registration</h1>
        </div>
    <form onSubmit={handleSubmit}>
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
      <div className="my-3 text-white max-sm:mx-2">
        <button className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">Register</button>
      </div>
    </form>

    {/* Buttons */}
    <div className="my-3 text-white max-sm:mx-2">
       
            {/* back button */}
            <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
              <button><i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i> <Link to='/admin-panel' className="font-semibold">Back to Dashboard</Link></button>
            </div>

              <h1 className="text-red-700 font-semibold mt-2">{errorMessage}</h1>
              <h1 className="text-green-600 font-semibold mt-2">{infoMessage}</h1>
          </div>
    </div>
        
       
        </div>
      </div>
      </div>
  );
}
