import React, { useEffect } from "react";
import Swiper from "swiper/bundle"; // Import the bundle version
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import img6 from './Images/img6.webp';
import img4 from './Images/img4.webp';
import img3 from './Images/img3.jpg';
// import { Link as ScrollLink } from 'react-scroll';
import Navbar from './Navbar';
import Footer from './FooterSec';
import Contact from "./Contact";
import About from "./About";

export default function Home() {
  // Image slider function
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div>
      <Navbar/>
      {/* Images */}
      {/* <div className="sm:hidden">
        <img
          src="https://blog.sparksgroupinc.com/hubfs/Webp.net-resizeimage%20(49).jpg"
          alt="Recruiter Image"
          className="w-[100%] "
        />
      </div> */}

      <div className="w-[100%]  ">
        <div className=" swiper-container border rounded-md sm:shadow-md w-[100%] overflow-hidden">
          <div className="swiper-wrapper max-w-full ">
            <div className="swiper-slide max-w-full  ">
              <img
                className="w-[100%] sm:h-[80vh] max-w-full  max-md:object-cover"
                // src="https://hrshelf.com/wp-content/uploads/2022/02/Resume-screening.jpg "
                src={img6}
                alt="Slide 1"
              />
              <h1 className="sm:text-6xl text-white font-bold m-10 -mt-[10rem] max-md:hidden">
                Campus Reqruiting<p className="my-3 text-white text-2xl">Step into a world of endless opportunities</p>
              </h1>
            </div>
            <div className="swiper-slide max-w-full">
              <img
                className="w-[100%] sm:h-[80vh] max-w-full max-md:object-cover"
                src={img4}
                // src="https://blog.sparksgroupinc.com/hubfs/Webp.net-resizeimage%20(49).jpg"
                alt="Slide 2"
              />
              <h1 className="sm:text-6xl text-black font-bold m-10 -mt-[10rem] max-md:hidden">
              Campus Reqruiting<p className="my-3 text-black text-2xl">Get real world experience!!</p>
            </h1>
            </div>
            <div className="swiper-slide max-w-full">
              <img
                className="w-[100%] sm:h-[80vh] max-w-full max-md:object-cover"
                src={img3}
                // src="https://www.eklavvya.com/blog/wp-content/uploads/2018/05/Campus-Placement-Interviews.jpg"
                alt="Slide 3"
              />
              <div className="flex justify-end">
              <h1 className="sm:text-6xl text-gray-300   font-bold m-10 -mt-[10rem] max-md:hidden">
                Campus Reqruiting<p className="my-3 text-gray-300 text-2xl">Step towards the success!!</p>
              </h1>
              </div>
            </div>
          </div>
          <div className="sm:swiper-pagination "></div>
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
