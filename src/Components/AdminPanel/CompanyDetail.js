import React, { useEffect, useState } from 'react';
import img2 from '../Images/img2.png';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CompanyDetail() {
    const {companyId} = useParams();
    const [menuOpen, setMenuOpen] = useState(false);
    const [companies, setCompanies] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Make a GET request to fetch company data
      axios.get(`http://localhost:4000/get-companies/${companyId}`)
        .then((response) => {
          setCompanies(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching company data:', error);
        });
    }, [companyId]);
  
    if(!companies) {
      return <div>No data Found</div>
    }

    // Delete function
    const deleteCompany = (companyId) => {
        axios.delete(`http://localhost:4000/delete-company/${companyId}`)

          .then((response) => {
            // Handle the response (success or error)
            console.log(response.data);
            // Update the state to remove the deleted job from the list
            if (response.data.message === 'Job deleted successfully') {
                // Update the state to remove the deleted company from the list
                setCompanies((prevCompanies) =>
                  prevCompanies.filter((company) => company._id !== companyId)
                );
        
                // Navigate back to the company info page (assuming '/company-info' is the correct route)
                navigate('/companyinfo');
              } else {
                console.error("Error deleting company:", response.data.message);
              }
          })
          .catch((error) => {
            console.error("Error deleting job:", error);
          });
      };

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
  
            <AdminMenu/>
          </div>
  

            {/* **************right side **************/}
            {/* Students Detail*/}
            <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 pt-20  ${menuOpen ? 'hidden' : 'block'}`}>
            
            <div className=' sm:w-[80%] w-[100%] ml-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mx-3'>
                <h1 className='text-cyan-950 sm:text-4xl text-2xl font-bold mb-10 text-center'>{companies.CompanyName}</h1>

                <div>
                  
                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 text-xl font-bold'>Login ID:</h2>
                            <p className='border-cyan-600 py-2 px-10 text-xl'>{companies.LoginID}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 text-xl font-bold'>Industry:</h2>
                          <p className='border-cyan-600 py-2 px-10 text-xl w-[60%]'>{companies.Industry}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 text-xl font-bold'>HR Name:</h2>
                          <p className='border-cyan-600 py-2 px-10 text-xl -ml-3 w-[60%]'>{companies.HRName}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 text-xl font-bold'>Email:</h2>
                          <p className='border-cyan-600 py-2 px-10 text-xl ml-6 w-[60%]'>{companies.CompanyEmail}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 text-xl font-bold'>Contact No:</h2>
                          <p className='border-cyan-600 py-2 px-10 text-xl -ml-7 w-[60%]'>{companies.ContactNo}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 text-xl font-bold'>Website Link:</h2>
                          <p className='border-cyan-600 py-2 px-10 text-xl -ml-10 w-[60%]'>{companies.WebsiteLink}</p>
                          
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 text-xl font-bold'>About:</h2>
                          <p className='border-cyan-600 py-2 px-10 text-xl ml-6 w-[60%]'>{companies.AboutCompany}</p>
                          </div>

                          <div className='m-10 '>
                            <button onClick={() => deleteCompany([companies._id])} className="2xl:w-[18%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-red-600 text-white hover:bg-black hover:text-white hover:animate-pulse">Delete</button>
                          </div>
                          
                </div>
               
            </div>
        
        
        
        </div>
      </div>
    </div>
  
  )
}