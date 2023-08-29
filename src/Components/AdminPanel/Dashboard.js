import React, { useState } from 'react';
import img2 from '../Images/img2.png';
import { Link } from 'react-router-dom';
import AllInfo from './AllInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChangePassword from './ChangePassword';

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    // <BrowserRouter>
    <div className=''>
       
        {/* Hamburger Button */}
      <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
        <button onClick={toggleMenu} className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {/* title */}
      <div className='text-center'>
      <h1 className='flex items-center justify-center bg-cyan-950 text-white sm:text-4xl text-2xl text-center font-semibold py-3'><span className=''><img src={img2} alt="logo" className='w-[8rem]' /></span>Admin Dashboard</h1>
      </div>
      
      {/* Content */}
      <div className='flex '>

        {/* menu */}
        <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
        <div className='text-center pt-8 pb-5'>
          <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
        </div>

          <ul className='max-md:text-sm'>
            <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-gauge text-cyan-950 mr-5"></i>Dashboard</li>
            <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-building text-cyan-950 mr-5"></i>Companies</li>
            <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-graduation-cap text-cyan-950 mr-5"></i>Student</li>
            <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-regular fa-address-card text-cyan-950 mr-5"></i><Link to='/company'>Company Registration</Link></li>
            <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-id-card text-cyan-950 mr-5"></i><Link to='/company'>Student Registration</Link></li>
            <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-lock text-cyan-950 mr-5"></i><Link to='/changePass'>Change Password</Link></li>
            <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-right-to-bracket text-cyan-950 mr-5"></i><Link to='/login'>Logout</Link></li>
          </ul>
        </div>

 
        {/* Details */}
        <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
        {/* <Routes>
          <Route path='/dashboard' element = {<AllInfo/>}/>
          <Route path='/changepass' element = {<ChangePassword/>}/>
        </Routes> */}
        <AllInfo/>
        
        
        {/* <div className={` bg-gray-100 text-white md:text-2xl  max-md:font-semibold text-center ${menuOpen ? 'hidden' : 'block'}`}> */}
        {/* <div className='sm:w-[80%] w-[100%] h-[100vh] bg-gray-100 text-white sm:text-2xl max-sm:font-semibold text-center  '> */}
          {/* <div className='mt-20 sm:mx-20 ml-2 max-sm:pl-5'>
            <ul className='flex flex-wrap max-md:flex-col'>
              <li className='lg:w-[30%] xl:w-[35%] w-[90%] h-[25vh] xl:h-[20vh] bg-cyan-800 pt-8'>Total Company Registered
                <p className='sm:pt-3 text-3xl'>5</p>
              </li>
              <li className='lg:w-[30%]  w-[90%] h-[25vh] xl:h-[20vh] bg-white text-black pt-8'>Total Students Registered
                <p  className='sm:pt-3 text-3xl'>10</p>
              </li>
              <li className='lg:w-[30%]  w-[90%] h-[25vh] xl:h-[20vh] bg-cyan-800 pt-8'>Total Vacancy
                <p  className='sm:pt-3 text-3xl'>12</p>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
        </div>
      </div>
    </div>
    // </BrowserRouter>
  )
}