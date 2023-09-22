import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import StudentSignup from './Components/Signup/StudentSIgnup';
import CompanySignup from './Components/Signup/CompanySignup';
import AdminSignup from './Components/Signup/AdminSignup';
import Dashboard from './Components/AdminPanel/Dashboard';
import ChangePassword from './Components/AdminPanel/ChangePassword';
import AllInfo from './Components/AdminPanel/AllInfo';
import Company from './Components/AdminPanel/Company';
import StudentInfo from './Components/AdminPanel/StudentInfo';
import Vacancies from './Components/AdminPanel/Vacancies';
import Registration from './Components/AdminPanel/Registration';
import StuDashboard from './Components/StudentPanel/StuDashboard';
import StudentProfile from './Components/StudentPanel/StudentProfile';
import StuChangePass from './Components/StudentPanel/StuChangePass';
import ComDashboard from './Components/CompanyPanel/ComDashboard';
import PostJob from './Components/CompanyPanel/PostJob';
import StudentList from './Components/CompanyPanel/StudentList';
import ComChangePass from './Components/CompanyPanel/ComChangePass';
import CompanyDetail from './Components/AdminPanel/CompanyDetail';
import StudentDetail from './Components/AdminPanel/StudentDetail';
import Logout from './Components/Logout';
import ProtectedRoute from './ProtectedRoutes';
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from './Components/useAuth';


export default function App() {
  
  const auth = useAuth();
  
  // const isLoggedIn = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:4000/auth', {
  //       withCredentials: true, // Include credentials
  //     });
  
  //     if (res.status === 200) {
  //       setAuth(true);
  //     } else if (res.status === 401) {
  //       setAuth(false);
  //     }
  //   } catch (error) {
  //     // Handle the error and provide user feedback
  //     console.error(error);
  //     setAuth(false);
  //   }
  // };
  

  // useEffect(()=> {
  //   isLoggedIn()
  // },[])

  // useEffect(() => {
  //   // You should implement a real authentication check here
  //   // For demonstration purposes, we'll use a simple flag
  //   const isAuthenticated = true; // Set to true if the user is authenticated
  //   setAuth(isAuthenticated);
  // }, []);

  return (
    <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/student" element={<StudentSignup />} /> */}
          {/* <Route path="/company" element={<CompanySignup />} /> */}

          {/* Admin Panel */}
          <Route path="/admin" element={<AdminSignup />} />
          
          <Route
            path="/admin-panel"
            element={
              <ProtectedRoute expectedRole="admin">
                <Dashboard />
            </ProtectedRoute>
              }
            />
            {/* <Route path="/admin-panel" element= {<Dashboard/>} /> */}

  {/* <ProtectedRoute expectedRole="admin"></ProtectedRoute> */}

          <Route path="/allinfo" element={<ProtectedRoute expectedRole="admin"><AllInfo /></ProtectedRoute>} />
          <Route path='/changepass' element = {<ProtectedRoute expectedRole="admin"><ChangePassword/></ProtectedRoute>}/>
          <Route path='/companyinfo' element = {<ProtectedRoute expectedRole="admin"><Company/></ProtectedRoute>}/>
          <Route path='/get-companies/:companyId' element = {<ProtectedRoute expectedRole="admin"><CompanyDetail/></ProtectedRoute>}/>
          <Route path='/studentinfo' element = {<ProtectedRoute expectedRole="admin"><StudentInfo/></ProtectedRoute>}/>
          <Route path='/get-students/:studentId' element = {<ProtectedRoute expectedRole="admin"><StudentDetail/></ProtectedRoute>}/>
          <Route path='/vacancy' element = {<ProtectedRoute expectedRole="admin"><Vacancies/></ProtectedRoute>}/>
          <Route path='/registration' element = {<ProtectedRoute expectedRole="admin"><Registration/></ProtectedRoute>}/>

          {/* Student Panel */}
          <Route path='/student-panel' element = {<ProtectedRoute expectedRole="student"><StuDashboard/></ProtectedRoute>}/>
          <Route path='/stuprofile' element = {<ProtectedRoute expectedRole="student"><StudentProfile/></ProtectedRoute>}/>
          <Route path='/stuchangepass' element = {<ProtectedRoute expectedRole="student"><StuChangePass/></ProtectedRoute>}/>

          {/* Company Panel */}
          <Route path='/company-panel/:id' element = {<ProtectedRoute expectedRole="company"><ComDashboard/></ProtectedRoute>}/>
          <Route path='/post-job' element = {<ProtectedRoute expectedRole="company"><PostJob/></ProtectedRoute>}/>
          <Route path='/student-list' element = {<ProtectedRoute expectedRole="company"><StudentList/></ProtectedRoute>}/>
          <Route path="/change-password" element={<ProtectedRoute expectedRole="company"><ComChangePass /></ProtectedRoute>} />

          <Route path='*' element = {<div>Page cannot found</div>}/>

          
         
        </Routes>


    </BrowserRouter>
  );
}




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import About from './Components/About';
// import Footer from './Components/FooterSec';
// import Contact from './Components/Contact';
// import Login from './Components/Login';

// export default function App() {
//   return (
//     <Router>
//       <div className='ml-0'>
//         <Navbar />
//         <Home />
//         <About/>
//         <Routes>
//           {/* <Route path='/' element={<Home />} /> */}
//           <Route path='/about' element={<About />} />
//           <Route path='/login' element={<Login />} />
//         </Routes>
//         <Contact />
//         <Footer />
//       </div>
//     </Router>
//   );
// }




