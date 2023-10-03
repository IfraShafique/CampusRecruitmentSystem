import {  AuthProvider, useAuth } from './AuthContext';
import Cookies from 'js-cookie';
import React, { useState } from "react";
import img2 from "./Images/img2.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setError, setInfo } from "../Redux/Reducer/RegistrationSlice";


export default function Login() {
  const dispatch = useDispatch();
  const [LoginID, setLoginID] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.studentRegistration.errorMessage);
  const infoMessage = useSelector((state) => state.studentRegistration.infoMessage);
  const {user, login} = useAuth();

  // const { login } = useAuth(); 

  const handleLoginChange = (e) => {
    setLoginID(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  
  axios.defaults.withCredentials = true;
  // Submit button functionality
  
  // Submit button functionality
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CONNECTION_URI}/login`,
        { LoginID, Password },
        
        {
          withCredentials: true, // Make sure to include this option
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      );
      // console.log('Server Response:', response.data);
  
      const token = response.data.token; // Assuming the token is returned in the response
      console.log('Token:', token);
  
      // Set the token as a cookie with an expiration date (adjust as needed)
      const expirationDate = new Date(Date.now() + 18000 * 1000); // Token expiration time (1 hour)
      
      const userData = response.data;
      console.log(userData);
      login(userData);
      if (userData && userData._id) {
        console.log('ID:', userData._id);
      }
      console.log('Role:', userData.Role);
      
      // Redirect the user to the appropriate panel based on the token's content
      if (userData.Role === 'admin') {
        localStorage.setItem('jwt', token);
        navigate('/admin-panel');
      } else if (userData.Role === 'student') {
        localStorage.setItem('jwt', token, );
        navigate(`/student-panel`);
      } else if (userData.Role === 'company') {
        localStorage.setItem('jwt', token, );
        navigate(`/company-panel/${userData.Id}`);
      }
      dispatch(setError(""));
      dispatch(setInfo("Login Succesfully"));
      dispatch(setInfo(""));
    } catch (error) {
      // Handle login errors
      console.error('Login Error:', error);
      // You can display an error message to the user if needed
      dispatch(setError('Invalid Credentials'));
    }
  };
  

  
//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:4000/login', {
//   LoginID,
//   Password
// }, {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then((result) => {
//   console.log('API Response:', result.data); // Add this line
//   const userData = result.data;
//   console.log('userData.Role:', userData.Role);
//   if(userData.Role === 'admin'){
//     navigate('/admin-panel')
//   }
//   else if(userData.Role === 'student'){
//     navigate('/student-panel');
//   }
//   else if(userData.Role === 'company'){
//     navigate('/company-panel')
//   }
// })
// .catch((error) => {
//   dispatch(setError("Invalid Credentials"));
//   console.error(error)
// });
      
//   };

  return (
    // Logo
    <div className="bg-cyan-950 text-white flex w-full h-screen">
      <div className="-ml-52 max-sm:hidden max-lg:w-[80%] max-lg:-ml-32 max-lg:my-auto">
        <img src={img2} alt="logo" className="opacity-90" />
      </div>

      {/* Login Account */}
      <div className="my-auto max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:w-[50%]">
        <div>
          <img src={img2} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
          <h1 className="lg:text-5xl sm:text-3xl text-xl sm:font-bold max-sm:text-center">Login Account</h1>
        </div>

        {/* Input Fields */}
        <form>
          <div className="flex flex-col sm:my-12 my-6 text-black max-sm:justify-center">
            {/* Email Input Field */}
            <div className="my-2">
              <span className="absolute sm:px-2 px-4 py-2 sm:py-3">
                <i className="fa-solid fa-envelope text-gray-500 sm:text-xl sm:mr-6 mr-2 "></i>
              </span>
              <input
                type="text"
                name="LoginID"
                placeholder="Enter Your Login ID"
                required
                autoComplete="username"
                className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2"
                onChange={handleLoginChange}
              />
            </div>

            {/* Password Input Field */}
            <div>
              <span className="absolute sm:px-2 px-4 py-2 sm:py-3">
                <i className="fa-solid fa-lock text-gray-500 sm:text-xl sm:mr-6 mr-2 "></i>
              </span>
              <input
                type="password"
                name="Password"
                placeholder="Enter Your Password"
                required
                autoComplete="current-password"
                className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 lg:px-9 px-8 rounded sm:rounded-[10px] max-sm:mx-2"
                onChange={handlePasswordChange}
              />
            </div>

            {/* Buttons */}
            <div className="my-3 text-white max-sm:mx-2">
              <button onClick={handleLogin} className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-black hover:bg-gray-900 hover:text-white hover:animate-pulse">Login</button>
          
              {/* Signup */}
              {/* <div className="mt-8 ml-1 max-sm:text-sm">
                <p>Don't have an account? <span className="cursor-pointer hover:text-gray-400"><Link to='/'>Sign Up</Link></span></p>
              </div> */}

              {/* Back button */}
              <div className="mt-3 ml-1 max-sm:text-sm">
                <button><i className="fa-solid fa-arrow-left text-white sm:text-sm text-xs sm:mr-1  "></i> <Link to='/'>Back to Home</Link></button>
                <p className="text-red-700 text-xl font-semibold">{errorMessage}</p>
                <p className="text-green-600 text-xl font-semibold">{infoMessage}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import img2 from "./Images/img2.png";
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     // Replace with your actual default admin email and password
//     const defaultAdminEmail = "admin";
//     const defaultAdminPassword = "admin";

//     // Check if the entered email and password match the default admin credentials
//     if (email === defaultAdminEmail && password === defaultAdminPassword) {
//       // Redirect to the admin dashboard
//       navigate('/admin-panel'); // Replace with the actual route to your admin dashboard
//     } else {
//       // Handle incorrect login here, show an error message or something
//       console.log("Incorrect email or password");
//     }
//   };


//   return (
//     // Logo
//     <div className="bg-cyan-950 text-white flex  w-[100%] h-[100vh] ">
//       <div className="-ml-52 max-sm:hidden max-lg:w-[80%] max-lg:-ml-32 max-lg:my-auto">
//         <img src={img2} alt="logo" className="opacity-90" />
//       </div>

//       {/* Login Account */}
//       <div div className="my-auto max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:w-[50%]">
//         <div>
//           <img src={img2} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
//           <h1 className="lg:text-5xl sm:text-3xl  text-xl sm:font-bold max-sm:text-center">Login Account</h1>
//         </div>

//         {/* Input Fields */}
//         <form>
//         <div className="flex flex-col sm:my-12 my-6 text-black max-sm:justify-center">
//           {/* Email Input FIeld */}
//           <div className="my-2">
//             <span className="absolute sm:px-2 px-4 py-2 sm:py-3">
//               <i className="fa-solid fa-envelope text-gray-500 sm:text-xl  sm:mr-6 mr-2 "></i>
//             </span>
//             <input
//               type="text"
//               name="loginId"
//               placeholder=" Enter Your Login ID"
//               required
//               autoComplete="username" // Add this line
//               className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2"
//               onChange={handleEmailChange}
//             />
//           </div>

//           {/* Password Input Field */}
//           <div>
//             <span className="absolute sm:px-2 px-4 py-2 sm:py-3">
//               <i className="fa-solid fa-lock text-gray-500 sm:text-xl  sm:mr-6 mr-2 "></i>
//             </span>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Your Password"
//               required
//               autoComplete="current-password" // Add this line
//               className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 lg:px-9 px-8 rounded sm:rounded-[10px] max-sm:mx-2"
//               onChange={handlePasswordChange}
// />

//           </div>
          

//           {/* Buttons */}
//           <div className="my-3 text-white max-sm:mx-2">
//             <button onClick={handleLogin} className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-black hover:bg-gray-900 hover:text-white hover:animate-pulse">Login</button>
          
//             {/* signup */}
//             <div className="mt-8 ml-1 max-sm:text-sm">
//               <p>Don't have an account? <span className="cursor-pointer hover:text-gray-400"><Link to='/'>Sign Up</Link></span></p>
//             </div>

//             {/* back button */}
//             <div className="mt-3 ml-1 max-sm:text-sm">
//               <button><i className="fa-solid fa-arrow-left text-white sm:text-sm text-xs  sm:mr-1  "></i> <Link to='/'>Back to Home</Link></button>
//             </div>
//           </div>


//         </div>
//         </form>
//       </div>
//     </div>
//   );
// }
