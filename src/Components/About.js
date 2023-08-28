import React from 'react'
import img7 from './Images/img7.png';

export default function About() {
  return (
    <div id='about'>
        <div className="sm:my-20 my-8 font-[Arial]">
        <h1 className="text-[0.9rem] md:text-5xl sm:text-4xl font-bold text-cyan-950 flex justify-center items-center ">
          Welcome To Campus Recruiter Hub
        </h1>
        <p className="text-[0.65rem] mt-3 md:text-3xl sm:text-2xl text-center max-sm:font-semibold sm:mt-10">
          Unleash Your Potential Where Futures Begin!
        </p>
      </div>
      {/* About page */}
      <div className=" sm:w-[50%] w-[80%] font-[arial] mx-auto -mt-6 sm:text-base text-[0.6rem] ">
      <p>
        Welcome to Campus Recruiter Hub, your gateway to a world of career
        opportunities and connections. Our platform bridges the gap between
        talented students and forward-thinking companies, fostering a dynamic
        environment where potential meets possibility. With a passion for
        nurturing talent and a commitment to excellence, we empower students to
        embark on their professional journeys with confidence.
        <br /><br />
      </p>
        <div className="mt-5">
        At Campus Recruiter Hub, we believe in the transformative power of
        networking and collaboration. Experience the synergy of ambition and innovation. With a click, you can unlock doors to internships, co-op programs, full-time roles, and more. The connections you make here are more than digital; they're the foundation of your future achievements.
        </div>

      {/* Mission */}
      <h1 className="max-sm:text-[0.7rem] sm:text-5xl sm:font-bold  text-center max-sm:font-semibold sm:mt-10">Mission</h1>
      <p className="mt-5">
        Our mission is to facilitate meaningful connections, drive innovation,
        and create a brighter future for both aspiring students and visionary
        companies. Join us on this exciting journey as we pave the way for
        success in the world of recruitment and beyond.
      </p>
      </div>

      <div className='sm:flex sm:justify-center my-10 mx-2'>

        <img src={img7} alt="" className='rounded'/>
      </div>
    
      {/* Vision */}
      {/* Mission */}
      <div className='sm:w-[50%] w-[80%] font-[arial] mx-auto -mt-6 sm:text-base text-[0.6rem]'>
      <h1 className="max-sm:text-[0.7rem] sm:text-5xl sm:font-bold  text-center max-sm:font-semibold sm:mt-20">Vision</h1>
      <p className="mt-5">
        Our vision is to be the compass that guides students toward their dreams and enables companies to shape their futures. We see a world where every connection made on our platform sparks innovation, drives progress, and contributes to the collective success of individuals and organizations.
      </p>
        <p className="max-sm:text-[0.7rem] sm:text-xl sm:font-bold  text-center max-sm:font-semibold sm:mt-10">Embark on this exhilarating journey with us, and let's paint the future with endless possibilities.</p>
      </div>
    
    </div>
  )
}
