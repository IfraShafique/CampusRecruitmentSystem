import React, { useState, useEffect } from 'react';
import Title from "./CompanyTitle";
import Menu from "./CompanyMenu";
import axios from 'axios'

export default function StudentList() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [stuProfiles, setStuProfile] = useState([])
    
  useEffect(() => {
    // Make a GET request to fetch company data
    axios.get('http://localhost:4000/get-studentProfileData')
      .then((response) => {
        setStuProfile(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching company data:', error);
      });
  }, []);

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
        <Title/>
        
        {/* Content */}
        <div className='flex '>
            {/* left side */}

          {/* menu */}
          <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
          <div className='text-center pt-8 pb-5'>
            <i className="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>
  
          <Menu/>
          </div>
  

            {/* **************right side **************/}
            {/* password change */}
          <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 pt-20  ${menuOpen ? 'hidden' : 'block'}`}>
            
            <div className=' sm:w-[60%] w-[100%] mx-auto max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mx-3'>
                <h1 className='text-cyan-950 md:text-4xl text-2xl font-bold mb-10 '>List of Students</h1>
                
                 <div>
                    <table className=' text-cyan-950 xl:w-[70%] w-[100%] list-none'>
                        <thead>
                        <tr className='lg:text-2xl sm:text-base text-xl font-bold '>
                            {/* <td className='w-[20%]'>S No.</td> */}
                            <td className='w-[65%] px-3'>Student Name</td>
                            <td className='w-[15%]'>Resume</td>
                        </tr>
                        </thead><br/>

                        <tbody className='pt-5'>
                          {stuProfiles.map((stuProfile) => (
                            <tr className='  '>
                                {/* <td>1</td> */}
                                <td className='px-3'>{stuProfile.Name}</td>
                                <td className='cursor-pointer hover:text-cyan-600'>
                                <a href={stuProfile.resumePath} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf text-cyan-900 text-2xl"></i></a></td>
                            </tr>
                          ))}

                            {/* <tr className=' '>
                                <td>2</td>
                                <td className='px-3'>Muzna</td>
                                <td className='cursor-pointer hover:text-cyan-600'>Resume</td>                     
                            </tr> */}
                        </tbody>
                        
                        
                    </table>
                 </div>
            </div>
        
        
        
        </div>
      </div>
    </div>
  
  )
}