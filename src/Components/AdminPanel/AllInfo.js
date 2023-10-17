import React from 'react';

export default function AllInfo(props) {
  console.log(props.totalCompanies);
  return (
    <div>
     
      <div className={` bg-gray-100 text-white md:text-2xl  max-md:font-semibold text-center ${props.menuOpen ? 'hidden' : 'block'}`}>
        <div className='sm:w-[80%]  w-[100%] h-[100vh] bg-gray-100 text-white sm:text-2xl max-sm:font-semibold text-center  '>
          <div className='mt-20 sm:mx-20 ml-2 max-sm:pl-5'>
            <ul className='flex flex-wrap max-md:flex-col'>
              <li className='lg:w-[30%] xl:w-[35%] w-[90%] h-[25vh] xl:h-[20vh] bg-cyan-800 pt-8'>Total Company Registered
                <p className='sm:pt-3 text-3xl'>{props.totalCompanies}</p>
              </li>
              <li className='lg:w-[30%] xl:w-[35%] w-[90%] h-[25vh] xl:h-[20vh] bg-white pt-8 text-black'>Total Students Registered
                <p  className='sm:pt-3 text-3xl'>{props.totalStudents}</p>
              </li>
              <li className='lg:w-[30%] xl:w-[30%] w-[90%] h-[25vh] xl:h-[20vh] bg-cyan-700 pt-8'>Total Vacancy
                <p  className='sm:pt-3 text-3xl'>{props.totalJobs}</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  )
}
