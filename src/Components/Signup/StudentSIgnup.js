import React, { useState } from "react";
import img2 from "../Images/img2.png";
import { Link } from 'react-router-dom';

export default function StudentSignup() {
  const initialFields = [
    { name: 'Name:',type:"text",  value: '' },
    { name: 'Student ID:',type:"text", value: '' },
    { name: 'Phone No: 0300-xxxxxxx',type:"text", value: '' },
    { name: 'Address',type:"text", value: '' },
    { name: 'Email:',type:"email", value: '' },
    { name: 'Institute Name:',type:"text", value: '' },
    { name: 'Department:',type:"text", value: '' },
    { name: 'Current Semester:',type:"number", value: '' },
    { name: 'CGPA:',type:"number", value: '' },
    { name: 'Skills:',type:"text", value: '' },
    { name: 'Password:',type:"password", value: '' },
    { name: 'Confirm Password:',type:"password", value: '' },
    
    // Add more fields as needed
  ];

  const [fields, setFields] = useState(initialFields);

  const handleFieldChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].value = value;
    setFields(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here
    console.log(fields);
  };

  return (
    <div className="bg-cyan-950 text-white flex  w-[100%] h-[100%] ">

      {/* logo */}
      <div className="-ml-52 max-sm:hidden max-lg:w-[80%] max-lg:-ml-32 max-lg:my-auto">
        <img src={img2} alt="logo" className="opacity-90" />
      </div>

      {/* Signup */}
      {/* Login Account */}
      <div div className="sm:mt-32 my-auto max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:w-[50%]">
        <div>
          <img src={img2} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
          <h1 className="lg:text-5xl sm:text-3xl  text-xl sm:font-bold max-sm:text-center mb-10">Student Signup</h1>
          <p className="sm:w-[70%] mb-6 max-sm:mx-10"> <span className="font-bold text-xl">Note:</span> Please ensure that you enter your information correctly during signup, as changes cannot be made afterward.</p>
        </div>
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={field.name}>
          
          <input
            type={field.type}
            value={field.value}
            placeholder={field.name}
            className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black"
            onChange={(e) => handleFieldChange(index, e.target.value)}
          />
        </div>
      ))}
      <div className="mt-3">
      <label htmlFor="Upload Resume" className=""> Upload Resume</label><br/>
      <input type="file" className="my-2 " required/>
      </div>
    </form>

    {/* Buttons */}
    <div className="my-3 text-white max-sm:mx-2">
            <button className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-black hover:bg-gray-900 hover:text-white hover:animate-pulse">Sign Up</button>
          
            {/* signup */}
            <div className="mt-8 ml-1 max-sm:text-sm">
              <p>Already have an account? <span className="cursor-pointer hover:text-gray-400"><Link to='/login'>Login</Link></span></p>
            </div>

            {/* back button */}
            <div className="mt-3 ml-1 max-sm:text-sm">
              <button><i className="fa-solid fa-arrow-left text-white sm:text-sm text-xs  sm:mr-1  "></i> <Link to='/admin-panel'>Back to Dashboard</Link></button>
            </div>
          </div>
    </div>
    </div>
  );
}
