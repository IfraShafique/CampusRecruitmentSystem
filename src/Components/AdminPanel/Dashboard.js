import React, { useState, useEffect } from 'react';
import img2 from '../Images/img2.png';
import { useNavigate } from 'react-router-dom';
import AllInfo from './AllInfo';
import AdminMenu from './AdminMenu';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const decodedToken = jwtDecode(token);

        if (token) {
          const currentTime = Date.now() / 1000;
          if (decodedToken.exp < currentTime) {
            localStorage.removeItem('jwt');
            // Redirect to login page if token has expired
            navigate('/login');
            return;
          }
        }

        axios.defaults.withCredentials = true;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Fetch user data
        const userDataResponse = await axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/userData');
        setUserData(userDataResponse.data);

        // Fetch other data
        const [companiesResponse, studentsResponse, jobsResponse] = await Promise.all([
          axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-companies'),
          axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-students'),
          axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-jobs')
        ]);

        const { data: companiesData, companies } = companiesResponse.data;
        const { data: studentsData, students } = studentsResponse.data;
        const { data: jobsData, posts } = jobsResponse.data;

        setTotalCompanies(companies);
        setTotalStudents(students);
        setTotalJobs(posts);

        setIsLoading(false);
        console.log('User Data:', userData);
        console.log('Companies:', companiesData);
        console.log('Students:', studentsData);
        console.log('Jobs:', jobsData);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=''>
      <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
        <button onClick={toggleMenu} className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className='text-center'>
        <h1 className='flex items-center justify-center bg-cyan-950 text-white sm:text-4xl text-2xl text-center font-semibold py-3'>
          <span className=''><img src={img2} alt="logo" className='w-[8rem]' /></span>Admin Dashboard
        </h1>
      </div>
      <div className='flex '>
        <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
          <div className='text-center pt-8 pb-5'>
            <i className="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>
          <div className='text-xl md:text-2xl text-center my-2 font-bold text-cyan-950'>
            {isLoading ? 'Loading...' : (userData && userData.data && userData.data.Name) || 'No Name'}
          </div>
          <AdminMenu />
        </div>
        <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
          <AllInfo totalCompanies={totalCompanies} totalStudents={totalStudents} totalJobs={totalJobs}/>
        </div>
      </div>
    </div>
  );
}




// import React, { useState, useEffect } from 'react';
// import img2 from '../Images/img2.png';
// import { Link, useNavigate, Location, useLocation } from 'react-router-dom';
// import AllInfo from './AllInfo';
// import AdminMenu from './AdminMenu';
// import axios from 'axios';
// import jwtDecode from 'jwt-decode';
// import { fetchUserRegistrationData } from '../../Redux/Reducer/UserDataReducer';
// import { useDispatch, useSelector } from 'react-redux';

// export default function Dashboard() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [userData, setUserData] = useState(null)
//   const location = useLocation();
//   const dispatch  = useDispatch();
//   // const userData = useSelector((state) => state.userData);
//   const [isLoading, setIsLoading] = useState(true);
//   const [totalCompanies, setTotalCompanies] = useState(0);
//   const [totalStudents, setTotalStudents] = useState(0);
//   const [totalJobs, setTotalJobs] = useState(0);


//     useEffect(() => {
//       try {
//             const token = localStorage.getItem('jwt');

//             const decodedToken = jwtDecode(token);
            
//             if (token) {
//               const currentTime = Date.now() / 1000; // Convert to seconds
//               if (decodedToken.exp < currentTime) {
//                 // Token has expired
//                 // Perform logout or redirect to login page
//                 localStorage.removeItem('jwt'); // Clear the expired token from local storage
//               }}
        
//             console.log(decodedToken);
//             // Token exists, make authenticated request
//             axios.defaults.withCredentials = true;
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//             const response = await axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/userData');

//             console.log('Result:', response.data);
//             console.log("Token", token);
        
//             // Return the data fetched from the server
//             return response.data;
            
            
//         } catch (error) {
//             throw(error)
//         }

//         // Inside Dashboard component useEffect
//         axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-companies')
//         .then((response) => {
//           const { data, companies } = response.data;
//           setTotalCompanies(companies); // Set the totalCompanies state
//           console.log('Companies:', data);
//         })
//         .catch((error) => {
//           console.log("Error in getting company data ", error);
//         });

//         // Inside Dashboard component useEffect
//         axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-students')
//         .then((response) => {
//           const { data, students } = response.data;
//           setTotalStudents(students); // Set the totalCompanies state
//           console.log('Companies:', data);
//         })
//         .catch((error) => {
//           console.log("Error in getting company data ", error);
//         });

//         // Inside Dashboard component useEffect
//         axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-jobs')
//         .then((response) => {
//           const { data, posts } = response.data;
//           setTotalJobs(posts); // Set the totalCompanies state
//           console.log('Companies:', data);
//         })
//         .catch((error) => {
//           console.log("Error in getting company data ", error);
//         });

//     }, [dispatch]);
  

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     // <BrowserRouter>
//     <div className=''>
       
//         {/* Hamburger Button */}
//       <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
//         <button onClick={toggleMenu} className="text-xl">
//           <i className="fa-solid fa-bars"></i>
//         </button>
//       </div>
//       {/* title */}
//       <div className='text-center'>
//       <h1 className='flex items-center justify-center bg-cyan-950 text-white sm:text-4xl text-2xl text-center font-semibold py-3'><span className=''><img src={img2} alt="logo" className='w-[8rem]' /></span>Admin Dashboard</h1>
//       </div>
      
//       {/* Content */}
//       <div className='flex '>

//         {/* menu */}
//         <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
//         <div className='text-center pt-8 pb-5'>
//           <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
//         </div>
        
//         <div className='text-xl md:text-2xl text-center my-2 font-bold text-cyan-950'>
//           {isLoading ? 'Loading...' : (userData && userData.data && userData.data.Name) || 'No Name'}
//         </div>

//         <AdminMenu />
//         </div>

 
//         {/* Details */}
//         <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
//           <AllInfo totalCompanies={totalCompanies} totalStudents={totalStudents} totalJobs={totalJobs}/>
        
        
       
//         </div>
//       </div>
//     </div>

//   )
// }



