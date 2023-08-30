import React from 'react'
import img2 from '../Images/img2.png';

export default function Title() {
  return (
    <div>
        {/* title */}
        <div className="text-center">
        <h1 className="flex items-center justify-center bg-cyan-950 text-white sm:text-4xl text-2xl text-center font-semibold py-3 max-sm:-ml-10">
          <span className="">
            <img src={img2} alt="logo" className="w-[8rem]" />
          </span>
          Student Dashboard
        </h1>
      </div>
    </div>
  )
}
