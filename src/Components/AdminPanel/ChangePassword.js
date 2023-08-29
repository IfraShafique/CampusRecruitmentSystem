
import React, { useState } from 'react';
import img2 from '../Images/img2.png';
import { Link } from 'react-router-dom';
import AllInfo from './AllInfo';
import Dashboard from './Dashboard'

export default function ChangePassword(props) {
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
        <h1 className='flex items-center justify-center bg-cyan-950 text-white sm:text-4xl text-2xl text-center font-semibold py-3 max-sm:-ml-10'><span className=''><img src={img2} alt="logo" className='w-[8rem]' /></span>Admin Dashboard</h1>
        </div>
        
        {/* Content */}
        <div className='flex '>
            {/* left side */}

          {/* menu */}
          <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
          <div className='text-center pt-8 pb-5'>
            <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>
  
            <ul className='max-md:text-sm'>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-gauge text-cyan-950 mr-5"></i><Link to='/admin-panel'>Dashboard</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-building text-cyan-950 mr-5"></i>Companies</li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-graduation-cap text-cyan-950 mr-5"></i>Student</li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-regular fa-address-card text-cyan-950 mr-5"></i><Link to='/company'>Company Registration</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-id-card text-cyan-950 mr-5"></i><Link to='/company'>Student Registration</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-lock text-cyan-950 mr-5"></i><Link to='/changePass'>Change Password</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-right-to-bracket text-cyan-950 mr-5"></i><Link to='/login'>Logout</Link></li>
            </ul>
          </div>
  

            {/* **************right side **************/}
            {/* password change */}
          <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 pt-20  ${menuOpen ? 'hidden' : 'block'}`}>
            
            <div className=' sm:w-[60%] w-[100%] mx-auto max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mx-3'>
                <h1 className='text-cyan-950 sm:text-4xl text-2xl font-bold mb-10 '>Change Password</h1>
                <div>
                <label htmlFor="oldPass" className='sm:text-xl  font-semibold mr-2'>Enter Old Password </label>
                <input type="password" name='password' placeholder='' className='xl:w-[50%] sm:w-[99%] w-[90%]  lg:y-4  py-2 rounded border-2 mb-2 '/>
                </div>

                <div className=''>
                <label htmlFor="oldPass" className='sm:text-xl  font-semibold'>Enter New Password </label>
                <input type="password" name='password' placeholder='' className='xl:w-[50%] sm:w-[99%] w-[90%]  lg:py-4 py-2   rounded border-2 mb-2'/>
                </div>

                <div className='flex  mt-10'>
                <button className="2xl:w-[25%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-cyan-950 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse">Submit</button>
                </div>
                {/* <input type="password" name='password' placeholder='Enter New Password' className='w-[70%] py-4 px-2 rounded border-2'/> */}
            </div>
        
        
        
        </div>
      </div>
    </div>
    // </BrowserRouter>
  )
}