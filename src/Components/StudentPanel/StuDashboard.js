import React, { useState, useEffect } from "react";
import img2 from "../Images/img2.png";
import { Link, Route, Routes } from "react-router-dom";
import Title from "./Title";
import Menu from "./Menu";
import axios from "axios";
import { fetchUserRegistrationData } from "../../Redux/Reducer/UserDataReducer";
import { useDispatch, useSelector } from "react-redux";

export default function StuDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [posts, setPost] = useState([]);
  const userData = useSelector(state => state.userData);
  const dispatch = useDispatch();
  

  // Apply handle
  const handleApplyNow = async (postId) => {
    try {
      if (userData.data) {
        const studentProfileId = userData.data.studentProfile[0]; // Get the student profile ID
        console.log("Student Profile ID:", studentProfileId);
        
        // Send a POST request to apply for the job with studentProfileId
        const response = await axios.post('http://localhost:4000/student-panel', {
          studentProfileId,
          postId, // Pass postId
        });
  
        // Handle the response (e.g., show a success message)
        console.log('Application submitted successfully:', response.data);
      } else {
        console.log("User data not available yet.");
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error submitting application:', error);
    }
  };
  
 
  
  

  // *******Get job vacancies data
  useEffect(()=> {
    axios.get('http://localhost:4000/get-Jobs')
  .then((response) => {
    setPost(response.data.data);
    console.log(response.data.data);
  })
  .catch((error) => {
    console.error('Error fetching post data:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  });
  },[])


  // ************Fetch user data**********
  useEffect(() =>{
    dispatch(fetchUserRegistrationData())
  }, [dispatch]);

  // *******Toggle menu************
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="">
      {/* Hamburger Button */}
      <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 z-20">
        <button onClick={toggleMenu} className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <Title />
      {/* Content */}
      <div className="flex ">
        {/* menu */}
        <div
          className={`w-[60%] h-[100vh] ${
            menuOpen ? "block" : "hidden"
          } sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}
        >
          <div className="text-center pt-8 pb-5">
            <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>

          <div className='text-xl md:text-2xl text-center my-2 font-bold text-cyan-950'>
          {userData && userData.data && userData.data.Name ? userData.data.Name : 'Loading...'}

          </div>

          <Menu />
        </div>

        {/* Details */}
        <div
          className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 pt-20  ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          <div className=" sm:w-[80%] w-[100%] sm:ml-5 max-sm:flex max-sm:flex-col max-sm:items-center ">
            <h1 className="text-cyan-950 sm:text-4xl text-2xl font-bold mb-10 text-center">
              Job Vacancies
            </h1>

            <div>
            <ul className="sm:w-[98%] w-[100%] sm:ml-5 mx-auto text-white ">
                 {posts.map((post) => (

                <li className="bg-cyan-800 rounded sm:px-5 px-3 py-5 cursor-pointer my-3"  key={post._id}>
                  <h1 className="sm:text-2xl text-xl font-bold">{post.JobTitle}</h1>
                  <p>{post.CompanyName}</p>
                  <p><i class="fa-solid fa-briefcase text-white mr-4"></i>{post.JobType} </p>
                  <p>
                    <i class="fa-solid fa-location-dot text-white mr-5"></i>
                    {post.Location} <span className="ml-[5%] font-semibold sm:text-[1.1rem]">Salary {post.Salary}</span>
                  </p>
                  <p className="my-2">
                    {post.SkillsRequirement}
                  </p>
                  
                  <button onClick={() => handleApplyNow(post._id)}className="2xl:w-[18%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-cyan-600 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse">Apply Now</button>
                
                </li>
                  ))}


              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
