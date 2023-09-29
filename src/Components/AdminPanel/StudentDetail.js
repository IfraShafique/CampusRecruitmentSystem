import React, { useEffect, useState } from 'react';
import img2 from '../Images/img2.png';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function StudentDetail() {
    const {studentId} = useParams();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const [students, setStudents] = useState([])

    useEffect(() => {
      if (!studentId) {
          return;
      }

      // Make a GET request to fetch the details of the selected student
      axios.get(`https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/student-profile/${studentId}`)
          .then((response) => {
              const data = response.data;

              if (data && data.length > 0) {
                  // Assuming the response is an array, you can take the first student
                  setStudents(data[0]);
              }
          })
          .catch((error) => {
              console.error('Error fetching student data:', error);
          });
  }, [studentId]);

    if (!studentId) {
        return <div>No data Found</div>;
    }
  
    if (students === null) {
      return <div>Loading...</div>;
    }

    // Delete function
    const deleteCompany = (studentId) => {
        axios.delete(`https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/delete-student/${studentId}`)

          .then((response) => {
            // Handle the response (success or error)
            console.log(response.data);
            // Update the state to remove the deleted job from the list
            if (response.data.message === 'Job deleted successfully') {
                // Update the state to remove the deleted company from the list
                setStudents((prevStudents) =>
                  prevStudents.filter((student) => student._id !== studentId)
                );
        
                // Navigate back to the company info page (assuming '/company-info' is the correct route)
                navigate('/studentinfo');
              } else {
                console.error("Error deleting student:", response.data.message);
              }
          })
          .catch((error) => {
            console.error("Error deleting:", error);
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
            <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] sm:h-[100vh] h-[100%] bg-gray-100 pt-20  ${menuOpen ? 'hidden' : 'block'}`}>
            
            <div className=' sm:w-[80%] w-[100%] ml-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mx-3'>
                <h1 className='text-cyan-950 sm:text-4xl text-2xl font-bold mb-10 text-center'>{students.Name}</h1>

                <div>
                  
                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 md:text-xl font-bold'>Contact No:</h2>
                            <p className='border-cyan-600 py-2 px-10 md:text-xl'>{students.ContactNo}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 md:text-xl font-bold'>Address:</h2>
                          <p className='border-cyan-600 py-2 px-10 ml-8 md:text-xl w-[60%]'>{students.Address}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 md:text-xl font-bold'>Department:</h2>
                          <p className='border-cyan-600 py-2 px-10 md:text-xl -ml-2 w-[60%]'>{students.Department}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 md:text-xl font-bold'>Current Semester:</h2>
                          <p className='border-cyan-600 py-2 px-10 md:text-xl md:-ml-14 sm:ml-10 w-[60%]'>{students.CurrentSemester}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 md:text-xl font-bold'>CGPA:</h2>
                          <p className='border-cyan-600 py-2 px-10 md:text-xl ml-14 w-[60%]'>{students.CGPA}</p>
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 md:text-xl font-bold'>Skills:</h2>
                          <p className='border-cyan-600 py-2 px-10 md:text-xl ml-14 w-[60%]'>{students.Skills}</p>
                          
                          </div>

                          <div className='flex'>
                            <h2 className='border-cyan-600 py-2 px-10 md:text-xl font-bold'>Resume:</h2>
                            <a href={students.resumePath} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf text-cyan-900 text-2xl ml-20"></i></a>
                          </div>

                          <div className='m-10 '>
                            <button onClick={() => deleteCompany(studentId)} className="2xl:w-[18%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-red-600 text-white hover:bg-black hover:text-white hover:animate-pulse">Delete</button>
                          </div>
                          
                </div>
               
            </div>
        
        
        
        </div>
      </div>
    </div>
  
  )
}
