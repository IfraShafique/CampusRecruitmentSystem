import React, { useState } from "react";
import img2 from "../Images/img2.png";
import img3 from "../Images/logoBlack.png";
import { Link } from 'react-router-dom';
import Title from "./Title";
import Menu from "./Menu";

export default function StudentProfile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

      
  const initialFields = [
    { name: 'Name:',type:"text",  value: '' },
    { name: 'Phone No: 0300-xxxxxxx',type:"text", value: '' },
    { name: 'Address',type:"text", value: '' },
    { name: 'Email:',type:"email", value: '' },
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
              <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
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

            <div className="my-3 text-white max-sm:mx-2">
                <button className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">Register</button>
            </div>
        </form>

    {/* Buttons */}
    <div className="my-3 text-white max-sm:mx-2">
       
            {/* back button */}
            <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
              <button><i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i> <Link to='/student-panel' className="font-semibold">Back to Dashboard</Link></button>
            </div>
          </div>
    </div>
        
       
        </div>
      </div>
      </div>
  );
}
