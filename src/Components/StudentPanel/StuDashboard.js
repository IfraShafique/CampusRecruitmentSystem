import React, { useState } from "react";
import img2 from "../Images/img2.png";
import { Link, Route, Routes } from "react-router-dom";
import Title from "./Title";
import Menu from "./Menu";

export default function StuDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

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

                <li className="bg-cyan-800 rounded sm:px-5 px-3 py-5 cursor-pointer my-3">
                  <h1 className="sm:text-2xl text-xl font-bold">Frondend Developer</h1>
                  <p>BrandSoft Solution</p>
                  <p><i class="fa-solid fa-briefcase text-white mr-4"></i>Full Time </p>
                  <p>
                    <i class="fa-solid fa-location-dot text-white mr-5"></i>
                    Karachi <span className="ml-[5%] font-semibold sm:text-[1.1rem]">Salary 50,000 to 70,000</span>
                  </p>
                  <p className="my-2">
                    Fresh Graduate (Bachelor/Master in Computer Science or
                    related technical field) for job training and assisting in
                    Frontend Development and implementation. Candidates should
                    have a deep understanding of the fundamentals of JavaScript
                    concepts.
                  </p>
                  <button className="2xl:w-[18%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-cyan-600 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse">Apply Now</button>
                </li>

                <li className="bg-cyan-800 rounded px-5 py-5 cursor-pointer my-3">
                  <h1 className="sm:text-2xl text-xl font-bold">Trainee Python Developer</h1>
                  <p>Squarera</p>
                  <p><i class="fa-solid fa-briefcase text-white mr-4"></i>Remote </p>
                  <p>
                    <i class="fa-solid fa-location-dot text-white mr-5"></i>
                    Karachi <span className="ml-[5%] font-semibold sm:text-[1.1rem]">Salary 20,000 to 30,000</span>
                  </p>
                  <p className="my-2">
                  As a Junior Python Developer trainee, you will have the opportunity 
                  to dive into the world of scripting and application development. You'll 
                  work closely with our engineering team to build end-to-end applications 
                  using Python and Django. We encourage a hands-on approach, enabling you 
                  to learn by doing.
                  </p>
                  <button className="2xl:w-[18%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-cyan-600 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse">Apply Now</button>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
