import React from 'react'


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
        <div className="max-sm:hidden">
        At Campus Recruiter Hub, we believe in the transformative power of
        networking and collaboration.
        </div>

      {/* Mission */}
      <h1 className="max-sm:text-[0.7rem] sm:text-5xl sm:bold  text-center max-sm:font-semibold sm:mt-10">Mission</h1>
      <p className="mt-5">
        Our mission is to facilitate meaningful connections, drive innovation,
        and create a brighter future for both aspiring students and visionary
        companies. Join us on this exciting journey as we pave the way for
        success in the world of recruitment and beyond.
      </p>
      </div>
    </div>
  )
}
