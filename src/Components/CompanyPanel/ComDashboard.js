import React, { useState, useEffect } from "react";
import img2 from "../Images/img2.png";
import { Link, Route, Routes } from "react-router-dom";
import Title from "./CompanyTitle";
import Menu from "./CompanyMenu";
import { useParams } from "react-router-dom";
import { fetchUserRegistrationData } from "../../Redux/Reducer/UserDataReducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function ComDashboard() {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalJobPosts, setTotalJobPosts] = useState(0);
  const [totalJobApplicants, setTotalJobApplicants] = useState(0);
  const userData = useSelector(state=> state.userData);

  const id = useParams();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // *******Fetching User Data***********
  
  useEffect(() => {
    dispatch(fetchUserRegistrationData())
      .then(() => {
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setIsLoading(false); // Handle error and set loading to false
        console.error('Error fetching user data:', error);
      });

      axios
      .get("http://localhost:4000/totalPosts")
      .then((response) => {
        const { user } = response.data;
        setTotalJobPosts(user); // Set the state with the total job posts
        console.log(user)
      })
      .catch((error) => {
        console.log("Error fetching total job posts:", error);
      });

      // Total number of applicant
      axios
      .get("http://localhost:4000/totalApplicant")
      .then((response) => {
        const { user } = response.data;
        setTotalJobApplicants(user); // Set the state with the total job posts
        console.log(user)
      })
      .catch((error) => {
        console.log("Error fetching total job posts:", error);
      });
  }, [dispatch]);



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
          className={`w-[60%] h-[100%] ${
            menuOpen ? "block" : "hidden"
          } sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100%] bg-white sm:text-xl`}
        >
          <div className="text-center pt-8 pb-5">
            <i className="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>
            
        <div className='text-xl md:text-2xl text-center my-2 font-bold text-cyan-950'>
          {isLoading ? 'Loading...' : (userData && userData.data && userData.data.Name) || 'No Name'}
        </div>
          <Menu />
        </div>

        {/* Details */}
        <div
          className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 pt-20  ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          <div className=" sm:w-[80%] max-lg:w-[100%]  w-[100%] h-[100vh] bg-gray-100 text-white sm:text-2xl max-sm:font-semibold text-center ">
       

            
          <div className='mt-20 sm:ml-20 ml-2 max-sm:pl-5'>
            <ul className='flex flex-wrap max-md:flex-col'>
              <li className='lg:w-[50%] xl:w-[50%] w-[90%] h-[25vh] xl:h-[20vh] bg-cyan-800 pt-8'>Total Posts
              <p className='sm:pt-3 text-3xl'>{totalJobPosts}</p>

              </li>
              <li className='lg:w-[50%] xl:w-[50%] w-[90%] h-[25vh] xl:h-[20vh] bg-white pt-8 text-black'>Total Applicants
                <p  className='sm:pt-3 text-3xl'>{totalJobApplicants}</p>
              </li>
             
            </ul>
          </div>
        </div>
    </div>
          </div>
        </div>


  );
}
