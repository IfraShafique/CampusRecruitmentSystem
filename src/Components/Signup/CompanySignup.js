import React, { useState } from "react";
import img2 from "../Images/img2.png";
import img3 from "../Images/logoBlack.png";
import { Link } from 'react-router-dom';

export default function CompanySignup() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const initialFields = [
    { name: 'Company Name:',type:"text",  value: '' },
    { name: 'Industry:',type:"text", value: '' },
    { name: 'HR Name:',type:"text", value: '' },
    { name: 'Company Email:',type:"email", value: '' },
    { name: 'Contact No:',type:"text", value: '' },
    { name: 'Website Link:',type:"text", value: '' },
    { name: 'About Company:',type:"text", value: '' },
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
    // <div className="bg-cyan-950 text-white flex  w-[100%] h-[100%] ">
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

        <ul className='max-md:text-sm'>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-gauge text-cyan-950 mr-5"></i><Link to='/admin-panel'>Dashboard</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-building text-cyan-950 mr-5"></i><Link to='/companyinfo'>Companies</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-graduation-cap text-cyan-950 mr-5"></i><Link to='/studentinfo'>Students</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-handshake text-cyan-950 mr-5"></i><Link to='/vacancy'>Vacancies</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-regular fa-address-card text-cyan-950 mr-5"></i><Link to='/company'>Company Registration</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-id-card text-cyan-950 mr-5"></i><Link to='/company'>Student Registration</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-lock text-cyan-950 mr-5"></i><Link to='/changePass'>Change Password</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-right-to-bracket text-cyan-950 mr-5"></i><Link to='/login'>Logout</Link></li>
            </ul>
        </div>

 
        {/* Details */}
        <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
        {/* <Routes>
          <Route path='/dashboard' element = {<AllInfo/>}/>
          <Route path='/changepass' element = {<ChangePassword/>}/>
        </Routes> */}
        {/* <AllInfo/> */}
        
         {/* Signup */}
      
      <div div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:w-[50%]">
        <div>
          <img src={img3} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
          <h1 className="lg:text-5xl sm:text-3xl  text-2xl font-bold  max-sm:text-center mb-10">Company Registration</h1>
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
      <div className="my-3 text-white max-sm:mx-2">
        <button className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">Register</button>
      </div>
    </form>

    {/* Buttons */}
    <div className="my-3 text-white max-sm:mx-2">
            {/* <button className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-black hover:bg-gray-900 hover:text-white hover:animate-pulse">Sign Up</button> */}
          
            {/* signup */}
            {/* <div className="mt-8 ml-1 max-sm:text-sm">
              <p>Already have an account? <span className="cursor-pointer hover:text-gray-400"><Link to='/login'>Login</Link></span></p>
            </div> */}

            {/* back button */}
            <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
              <button><i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i> <Link to='/admin-panel' className="font-semibold">Back to Dashboard</Link></button>
            </div>
          </div>
    </div>
        
       
        </div>
      </div>
      {/* logo */}
      {/* <div className="-ml-52 max-sm:hidden max-lg:w-[80%] max-lg:-ml-32 max-lg:my-auto sticky">
        <img src={img2} alt="logo" className="opacity-90 " />
      </div> */}

      {/* Signup */}
      {/* Login Account */}
      {/* <div div className="sm:mt-32 my-auto max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:w-[50%]">
        <div>
          <img src={img2} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
          <h1 className="lg:text-5xl sm:text-3xl  text-xl sm:font-bold max-sm:text-center mb-10">Company Signup</h1>
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
      ))} */}
      {/* <div className="my-3 text-white max-sm:mx-2">
        <button className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-black hover:bg-gray-900 hover:text-white hover:animate-pulse">Submit</button>
      </div> */}
    {/* </form> */}

    {/* Buttons */}
    {/* <div className="my-3 text-white max-sm:mx-2">
            <button className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-black hover:bg-gray-900 hover:text-white hover:animate-pulse">Sign Up</button>
           */}
            {/* signup */}
            {/* <div className="mt-8 ml-1 max-sm:text-sm">
              <p>Already have an account? <span className="cursor-pointer hover:text-gray-400"><Link to='/login'>Login</Link></span></p>
            </div> */}

            {/* back button */}
            {/* <div className="mt-3 ml-1 max-sm:text-sm">
              <button><i className="fa-solid fa-arrow-left text-white sm:text-sm text-xs  sm:mr-1  "></i> <Link to='/admin-panel'>Back to Dashboard</Link></button>
            </div>
          </div>
    </div> */}
    </div>
  );
}
