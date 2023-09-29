import React, { useEffect, useState } from "react";
import img2 from "../Images/img2.png";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import axios from "axios";

export default function StudentInfo(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [posts, setPosts] = useState([]); // Corrected variable names
  const [editMode, setEditMode] = useState(null);
  // const [editedData, setEditedData] = useState({});

  const [editedData, setEditedData] = useState({
    JobTitle: '',
    CompanyName: '',
    JobType: '',
    Location: '',
    Salary: '',
    SkillsRequirement: '',
    JobResponsibilities: '',
    JobDescription: '',
  });

  const handleFieldChange = (fieldName, value) => {
    setEditedData({ ...editedData, [fieldName]: value });
    // dispatch(updateField({fieldName, value }));
  };
  useEffect(() => {
    axios
      .get("https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/get-Jobs")
      .then((response) => {
        setPosts(response.data.data); // Corrected variable name
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        }
      });
  }, []);

  const deleteJob = (jobId) => {
    axios
      .delete(`https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/delete-job/${jobId}`,
             {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }})
      .then((response) => {
        // Handle the response (success or error)
        console.log(response.data);
        // Update the state to remove the deleted job from the list
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== jobId)); // Corrected variable name
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
  };

  const toggleEditMode = (jobId) => {
    if (editMode === jobId) {
      setEditMode(null);
    } else {
      setEditMode(jobId);
      // Find the post that matches the jobId and set it as editedData
      const postToEdit = posts.find((post) => post._id === jobId);
      setEditedData(postToEdit || {});
    }
  };

  const handleEditChange = (key, value) => {
    // Update the editedData state when input fields change
    setEditedData((prevEditedData) => ({
      ...prevEditedData,
      [key]: value,
    }));
  };

  const editJob = (jobId) => {
    axios
      .put(`https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/edit-job/${jobId}`, editedData)
      .then((response) => {
        setEditMode(null);
        const updatedPosts = posts.map((post) =>
          post._id === jobId ? response.data : post
        ); // Corrected variable name
        setPosts(updatedPosts); // Corrected variable name
        console.log(updatedPosts)
      })
      .catch((error) => {
        console.error("Error editing job:", error);
      });
  };
  

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
      <div className="flex">
        {/* left side */}

        {/* menu */}
        <div
          className={`w-[100%] h-[100vh] ${
            menuOpen ? "block" : "hidden"
          } sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100%] bg-white sm:text-xl `}
        >
          <div className="text-center pt-8 pb-5">
            <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>

          <AdminMenu />
        </div>

        {/* **************right side **************/}
        {/* Vacancies*/}
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
                {posts.map((post) => (
                  <li
                    className="bg-cyan-800 rounded sm:px-5 px-3 py-5 cursor-pointer my-3"
                    key={post._id}
                  >
                    {editMode === post._id ? (
                      <div>
                        {Object.keys(editedData).map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name={field}
              value={editedData[field] || post[field]}
              placeholder={field}
              className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-3 my-1 text-black"
              onChange={(e) => handleFieldChange(field, e.target.value)}
              required
            />
          </div>
      
              ))}

                        {/* Add input fields for other job details */}
                        <button
                          onClick={() => editJob(post._id)}
                          className="2xl:w-[18%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-12 max-sm:pr-12 max-sm:text-center rounded-[10px] bg-cyan-600 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div>
                        <h1 className="sm:text-2xl text-xl font-bold">
                          {post.JobTitle}
                        </h1>
                        <p>{post.CompanyName}</p>
                        <p>
                          <i class="fa-solid fa-briefcase text-white mr-4"></i>
                          {post.JobType}
                        </p>
                        <p>
                          <i class="fa-solid fa-location-dot text-white mr-5"></i>
                          {post.Location}{" "}
                          <span className="ml-[5%] font-semibold sm:text-[1.1rem]">
                            Salary {post.Salary}
                          </span>
                        </p>

                        <div className="my-2">
                          <p>Skills Requirement</p>
                          <p>{post.SkillsRequirement}</p>
                        </div>
                        <button
                          onClick={() => deleteJob(post._id)} // Corrected argument
                          className="2xl:w-[18%] xl:w-[55%] max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-8 
                          max-sm:pr-8 max-sm:text-center rounded-[10px] bg-cyan-600 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => toggleEditMode(post._id)}
                          className="2xl:w-[18%] xl:w-[55%] xl:ml-2 max-sm:w-[100%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:pl-8
                           max-sm:pr-8 max-sm:text-center rounded-[10px] bg-cyan-600 text-white hover:bg-gray-900 hover:text-white hover:animate-pulse"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
