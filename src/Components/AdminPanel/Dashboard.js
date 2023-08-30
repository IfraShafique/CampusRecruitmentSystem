import React, { useState } from 'react';
import img2 from '../Images/img2.png';
import { Link } from 'react-router-dom';
import AllInfo from './AllInfo';
import AdminMenu from './AdminMenu';


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

        <AdminMenu/>
        </div>

 
        {/* Details */}
        <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
          <AllInfo/>
        
        
       
        </div>
      </div>
    </div>

  )
}