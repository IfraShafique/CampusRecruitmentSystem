import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function CompanyMenu() {
  return (
    <div>
      <ul className="max-md:text-sm">
        <li className="md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer">
          <i className="fa-solid fa-gauge text-cyan-950 mr-5"></i>
          <Link to="/company-panel">Dashboard</Link>
        </li>
        <li className="md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer">
          <i className="fa-regular fa-id-badge text-cyan-950 mr-5"></i>
          <Link to="/post-job">Post a Job</Link>
        </li>
        <li className="md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer">
          <i className="fa-solid fa-handshake text-cyan-950 mr-5"></i>
          <Link to="/student-list">List of Students</Link>
        </li>
        <li className="md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer">
          <i className="fa-solid fa-lock text-cyan-950 mr-5"></i>
          <Link to="/comchangePass">Change Password</Link>
        </li>
        <li className="md:py-4 py-2 hover:bg-gray-200 sm:pl-10 pl-5 cursor-pointer">
          <i className="fa-solid fa-right-to-bracket text-cyan-950 mr-5"></i>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
