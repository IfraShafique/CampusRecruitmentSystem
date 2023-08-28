import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import StudentSIgnup from './Components/Signup/StudentSIgnup';
import CompanySignup from './Components/Signup/CompanySignup';
import AdminSignup from './Components/Signup/AdminSignup';
import Dashboard from './Components/AdminPanel/Dashboard';

export default function App() {

 
  return (
    <BrowserRouter>
      <div className='ml-0'>
        
        <Routes>
          <Route path='/' element={<Home />} />    
        </Routes>     
      </div>

      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/student' element={<StudentSIgnup />} />
          <Route path='/company' element={<CompanySignup />} />
          <Route path='/admin' element={<AdminSignup />} />
          <Route path="/admin-panel" element={<Dashboard/>}/>
        </Routes>
      </div>
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




