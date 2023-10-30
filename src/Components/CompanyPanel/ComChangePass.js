import React, { useState } from 'react';
import Title from "./CompanyTitle";
import Menu from "./CompanyMenu";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import jwtDecode from 'jwt-decode';

export default function ComChangePass(props) {
  const { user } = useAuth();
  const {Id} = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleChangePassword = async () => {
    const token = localStorage.getItem('jwt');
    const decodedToken = jwtDecode(token);
    
    if (token) {
      const currentTime = Date.now() / 1000; // Convert to seconds
      if (decodedToken.exp < currentTime) {
        // Token has expired
        // Perform logout or redirect to login page
        localStorage.removeItem('jwt'); // Clear the expired token from local storage
      }
    }

    // Token exists, make authenticated request
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Authorization'] = token;

    axios.post(`${process.env.REACT_APP_CONNECTION_URI}/change-password`, { oldPassword, newPassword })
      .then((response) => {
        console.log("Response from server:", response.data);
  


        // Update the client-side state with the new password
        setOldPassword(''); // Set the old password to the new password
        setNewPassword(''); // Clear the new password field
        console.log(response.data)
        setMessage('Password updated successfully');
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage('Password change failed. Please check your input.');
      });
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
            <h1 className='text-cyan-950 sm:text-4xl text-2xl font-bold mb-10 '>Change Password</h1>
            <div>
              <label htmlFor="oldPass" className='sm:text-xl  font-semibold mr-2'>Enter Old Password </label>
              <input type="password" name='password' placeholder='' onChange={(e) => setOldPassword(e.target.value)} className='xl:w-[50%] sm:w-[99%] w-[90%]  lg:py-4  py-2 rounded border-2 mb-2 '/>
            </div>

            <div className=''>
              <label htmlFor="newPass" className='sm:text-xl  font-semibold'>Enter New Password </label>
              <input type="password" name='password' placeholder='' onChange={(e) => setNewPassword(e.target.value)} className='xl:w-[50%] sm:w-[99%] w-[90%]  lg:py-4 py-2   rounded border-2 mb-2'/>
            </div>

            <div className='flex  mt-10'>
              <button onClick={handleChangePassword} className="2xl:w-[25%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-cyan-950 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse">Submit</button>
              <h1 className="text-green-700 font-semibold mt-2">{message}</h1>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
