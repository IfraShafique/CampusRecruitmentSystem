
import React, { useState } from 'react';
import img2 from '../Images/img2.png';
import { Link } from 'react-router-dom';


export default function CompanyInfo(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
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
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-building text-cyan-950 mr-5"></i><Link to='/companyinfo'>Companies</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-graduation-cap text-cyan-950 mr-5"></i><Link to='/studentinfo'>Students</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-regular fa-address-card text-cyan-950 mr-5"></i><Link to='/company'>Company Registration</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-id-card text-cyan-950 mr-5"></i><Link to='/company'>Student Registration</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-lock text-cyan-950 mr-5"></i><Link to='/changePass'>Change Password</Link></li>
              <li className='md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer'><i class="fa-solid fa-right-to-bracket text-cyan-950 mr-5"></i><Link to='/login'>Logout</Link></li>
            </ul>
          </div>
  

            {/* **************right side **************/}
            {/* password change */}
          <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 pt-20  ${menuOpen ? 'hidden' : 'block'}`}>
            
            <div className=' sm:w-[80%] w-[100%] ml-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mx-3'>
                <h1 className='text-cyan-950 sm:text-4xl text-2xl font-bold mb-10 text-center'>Company Details</h1>

                <div>
                    <table className='font-extralight w-[100%]'>
                        <thead className='lg:text-xl sm:text-sm text-sm'>
                            <th className='border-b-[1px] border-r-[1px] border-cyan-600 xl:px-4 pb-8'>S.No</th>
                            <th className='border-b-[1px] border-r-[1px] border-cyan-600 xl:px-10 lg:px-8 md:px-6 sm:px-4 pb-8'>Company Name</th>
                            <th className='border-b-[1px] border-r-[1px] border-cyan-600 xl:px-10 lg:px-8 md:px-6 sm:px-4 pb-8'>Contact No</th>
                            <th className='border-b-[1px] border-r-[1px] border-cyan-600 xl:px-10 lg:px-8 md:px-6 sm:px-4 pb-8'>Email</th>
                            <th className='border-b-[1px]  border-cyan-600 xl:px-10 lg:px-8 md:px-6 sm:px-4 pb-8'>Action</th>
                        </thead>

                        
                            <tr className='lg:text-base sm:text-sm text-xs'>
                                <th className='border-b-[1px] border-r-[1px] border-cyan-600 py-4 xl:px-10 lg:px-8 md:px-6 sm:px-4'>01</th>
                                <th className='border-b-[1px] border-r-[1px] border-cyan-600 py-4 xl:px-10 lg:px-8 md:px-6 sm:px-4'>InApp Solution</th>
                                <th className='border-b-[1px] border-r-[1px] border-cyan-600 py-4 xl:px-10 lg:px-8 md:px-6 sm:px-4'>0334-3586859</th>
                                <th className='border-b-[1px] border-r-[1px] border-cyan-600 py-4 xl:px-10 lg:px-8 md:px-6 sm:px-4'>abc@gmail.com</th>
                                <th className='border-b-[1px]  border-cyan-600 py-4 xl:px-10 lg:px-8 md:px-6 sm:px-4 text-cyan-500 hover:text-cyan-300'><Link to={'/details'}>Details</Link></th>
                            </tr>
                        
                    </table>
                </div>
               
            </div>
        
        
        
        </div>
      </div>
    </div>
  
  )
}