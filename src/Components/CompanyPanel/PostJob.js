import React, { useState } from 'react';
import Title from "./CompanyTitle";
import Menu from "./CompanyMenu";
import img3 from "../Images/logoBlack.png";
import { Link } from 'react-router-dom';

export default function PostJob(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

        
  const initialFields = [
    { name: 'Job Title:',type:"text",  value: '' },
    { name: 'Company Name',type:"text", value: '' },
    { name: 'Job Type',type:"text", value: '' },
    { name: 'Location e.g Karachi, Lahore',type:"text", value: '' },
    { name: 'Salary',type:"text", value: '' },
    { name: 'Skills Requirement',type:"text", value: '' },
    
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

      <div className=''>
         
          {/* Hamburger Button */}
        <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
          <button onClick={toggleMenu} className="text-xl">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        {/* title */}
        <Title/>
        
        {/* Content */}
        <div className='flex '>
            {/* left side */}

          {/* menu */}
          <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
          <div className='text-center pt-8 pb-5'>
            <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>
  
          <Menu/>
          </div>
  

            {/* **************right side **************/}
            {/* password change */}
            <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
  
      
  <div div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col justify-center items-center sm:w-[50%]">
    <div>
      <img src={img3} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
      <h1 className="lg:text-5xl sm:text-3xl  text-2xl font-bold  max-sm:text-center mb-10">Post a Job</h1>
    
    </div>
    <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
            <div key={field.name}>
                {/* <label htmlFor={field.name} className='mr-5'>{field.name} </label> */}
            <input
                type={field.type}
                value={field.value}
                placeholder={field.name}
                className="2xl:w-[60%] xl:w-[55%] lg:w-[80%]  py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-3 my-1 text-black"
                onChange={(e) => handleFieldChange(index, e.target.value)}
            />

            </div>
        ))}

        <div>
            <textarea type="textarea" placeholder='Job Responsiblities' className="2xl:w-[60%] xl:w-[55%] h-[15Vh] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black" required/>  
            <textarea type="textarea" placeholder='Job Description' className="2xl:w-[60%] xl:w-[55%]  h-[15Vh] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black" required/>  
        </div>



        <div className="my-3 text-white max-sm:mx-2">
            <button className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">Post</button>
        </div>
    </form>

{/* Buttons */}
<div className="my-3 text-white max-sm:mx-2">
   
        {/* back button */}
        <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
          <button><i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i> <Link to='/company-panel' className="font-semibold">Back to Dashboard</Link></button>
        </div>
      </div>
</div>
    
   
    </div>
  </div>
  </div>
);
}
