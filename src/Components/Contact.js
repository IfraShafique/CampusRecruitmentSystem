import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
      <div className="w-[100%] font-[arial] mx-auto sm:mt-6 sm:text-base text-[0.6rem] mt-10 bg-gray-600 text-white text-center">
        <h1 className="max-sm:text-[0.7rem] py-4 sm:text-5xl max-sm:text-2xl sm:bold  text-center max-sm:font-semibold sm:mt-10 sm:pt-20 sm:py-5">Contact Us</h1>
        <p className="sm:mb-7 mb-6">Get in touch with us for any inquiries or assistance</p>

        {/* Icons */}
          <div className="mb-10 flex flex-col text-left items-center">
          <span><i className="fa-solid fa-phone m:text-2xl text-white sm:mr-6 mr-2"></i><span className="sm:-ml-5 sm:mr-2">Phone no:</span> +92-335000000</span><br/>

            <span><i className="fa-solid fa-location-dot m:text-2xl text-white sm:mr-6 mr-2"></i><span className="sm:-ml-5 sm:mr-2">Location:</span>  Shahra-e-faisal Road, Karachi-74000, Pakistan.</span><br/>
            <span><i className="fa-solid fa-envelope m:text-2xl text-white sm:mr-6 mr-2"></i><span className="sm:-ml-5 sm:mr-2">Email Address:</span>  lorem123@gmail.com</span>
          </div>
        <div className="flex justify-center pb-10">
          <a href="https://www.facebook.com/" target="_blank"> <i className="fa-brands fa-facebook-f sm:text-2xl text-white sm:mr-6 mr-2 hover:text-cyan-950 hover:animate-bounce  "></i></a>
          <a href="https://www.linkedin.com/" target="_blank"> <i className="fa-brands fa-linkedin-in sm:text-2xl text-white sm:mr-6 mr-2 hover:text-cyan-950 hover:animate-bounce"></i></a>
          <a href="https://www.twitter.com/" target="_blank"> <i className="fa-brands fa-twitter sm:text-2xl text-white sm:mr-6 mr-2 hover:text-cyan-950 hover:animate-bounce"></i></a>
          <a href="https://www.youtube.com/" target="_blank"> <i className="fa-brands fa-youtube sm:text-2xl text-white sm:mr-6 mr-2 hover:text-cyan-950 hover:animate-bounce"></i></a>
       
        </div>
      </div>
    </div>
  )
}
