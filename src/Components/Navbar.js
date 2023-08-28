import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import img2 from './Images/img2.png';


export default function Navbar() {
  // const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='bg-cyan-800 text-xs sm:text-base flex max-sm:text-center'>
      {/* Navbar */}
      <div className='flex items-center justify-between  w-full max-sm:p- relative z-20 '>
        {/* logo and name */}
        <div className='sm:flex sm:mx-6 justify-start max-sm:hidden items-center'>
          {/* logo */}
          <span className=''><img src={img2} alt="logo" className='w-[8rem]' /></span>
          {/* title */}
          <span className='-ml-2 italic text-white font-bold md:text-2xl sm:text-sm'>Campus Recruiter Hub</span>
        </div>

        {/* navigation */}
        <div className='flex items-center '>
          <ul className='flex text-white sm:font-semibold max-sm:-ml-3 max-sm:justify-center'>
            <li className='sm:mr-5 mr-1  px-4 py-1 rounded transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'>
            <Link to='/'>Home</Link>
            </li>
            <li className='cursor-pointer sm:mr-5 mr-1 px-4 py-1 rounded  transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'>
            <ScrollLink to='about' smooth={true} duration={500}>About</ScrollLink>
            {/* <a href='#about'>About</a> */}
            </li>
            <li className=' cursor-pointer sm:mr-5 mr-1 px-4 py-1 rounded  transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'>
            <ScrollLink to='contact' smooth={true} duration={500}>Contact</ScrollLink>
            {/* <a href='#about'>About</a> */}
            </li>
          </ul>
          <div className='text-white sm:font-semibold flex'>
          <button  className='sm:mr-5 mr-1 px-4 py-1 rounded  transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'>
              <Link to='/login'>Login</Link>
            </button>
            {/* <div className='text-white sm:font-semibold flex relative  group'>
            <button
              className='sm:mr-5 mr-1 px-4 py-1 rounded
              transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Signup
            </button>
            {showDropdown && (
              <div className=' absolute top-full left-0 mt-2 bg-cyan-800 text-white rounded shadow-md z-20'>
                <ul className='py-2'>
                  <li className='px-5 py-2 hover:bg-gray-200 cursor-pointer transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'><Link to='/student'>Student</Link></li>
                  <li className='px-5 py-2 hover:bg-gray-200 cursor-pointer transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'><Link to='/company'>Company</Link></li>
                  <li className='px-5 py-2 hover:bg-gray-200 cursor-pointer transform sm:hover:scale-105 hover:bg-gray-300 hover:text-cyan-900 transition-transform duration-300'><Link to='/admin'>Admin</Link></li>
                </ul>
              </div>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
