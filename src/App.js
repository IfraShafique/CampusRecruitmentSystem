import React from 'react';
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
import StudentReg from './Components/AdminPanel/StudentReg';
import StuDashboard from './Components/StudentPanel/StuDashboard';
import StudentProfile from './Components/StudentPanel/StudentProfile';
import StuChangePass from './Components/StudentPanel/StuChangePass';
import ComDashboard from './Components/CompanyPanel/ComDashboard';
import PostJob from './Components/CompanyPanel/PostJob';
import StudentList from './Components/CompanyPanel/StudentList';
import ComChangePass from './Components/CompanyPanel/ComChangePass';
import CompanyDetail from './Components/AdminPanel/CompanyDetail';



export default function App() {
  return (
    <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentSignup />} />
          <Route path="/company" element={<CompanySignup />} />

          {/* Admin Panel */}
          <Route path="/admin" element={<AdminSignup />} />
          <Route path="/admin-panel" element={<Dashboard />} />
          <Route path="/allinfo" element={<AllInfo />} />
          <Route path='/changepass' element = {<ChangePassword/>}/>
          <Route path='/companyinfo' element = {<Company/>}/>
          <Route path='/get-companies/:companyId' element = {<CompanyDetail/>}/>
          <Route path='/studentinfo' element = {<StudentInfo/>}/>
          <Route path='/vacancy' element = {<Vacancies/>}/>
          <Route path='/studentreg' element = {<StudentReg/>}/>

          {/* Student Panel */}
          <Route path='/student-panel' element = {<StuDashboard/>}/>
          <Route path='/stuprofile' element = {<StudentProfile/>}/>
          <Route path='/stuchangepass' element = {<StuChangePass/>}/>

          {/* Company Panel */}
          <Route path='/company-panel' element = {<ComDashboard/>}/>
          <Route path='/post-job' element = {<PostJob/>}/>
          <Route path='/student-list' element = {<StudentList/>}/>
          <Route path='/comchangePass' element = {<ComChangePass/>}/>

          
         
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




