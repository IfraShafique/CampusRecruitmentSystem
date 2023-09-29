import React, { useEffect, useState } from "react";
import img2 from "../Images/img2.png";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import axios from 'axios';


export default function CompanyInfo(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch company data
    axios.get('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-companies',
  // Make sure to include this option
      {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }})
      .then((response) => {
        setCompanies(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching company data:', error);
      });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="">
      {/* Hamburger Button */}
      <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
        <button onClick={toggleMenu} className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {/* title */}
      <div className="text-center">
        <h1 className="flex items-center justify-center bg-cyan-950 text-white sm:text-4xl text-2xl text-center font-semibold py-3 max-sm:-ml-10">
          <span className="">
            <img src={img2} alt="logo" className="w-[8rem]" />
          </span>
          Admin Dashboard
        </h1>
      </div>

      {/* Content */}
      <div className="flex ">
        {/* left side */}

        {/* menu */}
        <div
          className={`w-[60%] h-[100vh] ${
            menuOpen ? "block" : "hidden"
          } sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}
        >
          <div className="text-center pt-8 pb-5">
            <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>

          <AdminMenu />
        </div>

        {/* **************right side **************/}
        {/* vacancies */}
        <div
          className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100vh] bg-gray-100 pt-20  ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          <div className=" sm:w-[80%] w-[100%] ml-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mx-3">
            <h1 className="text-cyan-950 sm:text-4xl text-2xl font-bold mb-10 text-center">
              Company Details
            </h1>

            <div>
              <table className="font-extralight w-[100%]">
                <thead className="lg:text-xl sm:text-sm text-[0.6rem] items-center">
                  <th className="border-b-[1px] border-r-[1px] border-cyan-600 w-[5%] pb-5">
                    ID
                  </th>
                  <th className="border-b-[1px] border-r-[1px] border-cyan-600 w-[25%] pb-5">
                    Company Name
                  </th>
                  <th className="border-b-[1px] border-r-[1px] border-cyan-600 w-[15%] pb-5">
                    Contact No
                  </th>
                  <th className="border-b-[1px] border-r-[1px] border-cyan-600 w-[15%] pb-5">
                    Email
                  </th>
                  <th className="border-b-[1px]  border-cyan-600 w-[8%] pb-5">
                    Action
                  </th>
                </thead>

                <tbody className="font-[arial] font-thin lg:text-xl sm:text-sm text-[0.6rem] ">
                  {companies.map((company) => (


                  <tr className="lg:text-base sm:text-sm text-xs " key={company._id}>
                    <th className="border-b-[1px] border-r-[1px] border-cyan-600 py-4 w-[5%]">
                      {company.LoginID}
                    </th>
                    <th className="border-b-[1px] border-r-[1px] border-cyan-600 py-4 w-[25%]">
                      {company.Name}
                    </th>
                    <th className="border-b-[1px] border-r-[1px] border-cyan-600 py-4 w-[15%]">
                      {company.ContactNo}
                    </th>
                    <th className="border-b-[1px] border-r-[1px] border-cyan-600 py-4 w-[15%]">
                      {company.Email}
                    </th>
                    <th className="border-b-[1px]  border-cyan-600 py-4 w-[8] text-cyan-500 hover:text-cyan-300">
                      <Link to={`/get-companies/${company._id}`}>Details</Link>
                    </th>
                  </tr>
                  ))
                  }

            
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
