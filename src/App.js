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

export default function App() {
  return (
    <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentSignup />} />
          <Route path="/company" element={<CompanySignup />} />
          <Route path="/admin" element={<AdminSignup />} />
          <Route path="/admin-panel" element={<Dashboard />} />
          <Route path="/allinfo" element={<AllInfo />} />
          <Route path='/changepass' element = {<ChangePassword/>}/>
          <Route path='/companyinfo' element = {<Company/>}/>
          <Route path='/studentinfo' element = {<StudentInfo/>}/>
          
          {/* <Route path="/admin-panel" element={<PrivateRoute element={<Dashboard />} />} /> */}
        </Routes>
{/* 
        <Routes>
          
        </Routes> */}

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




