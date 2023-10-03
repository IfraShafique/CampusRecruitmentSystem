import React, { useState } from 'react';
import Title from './CompanyTitle';
import Menu from './CompanyMenu';
import img3 from '../Images/logoBlack.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setError, setInfo } from "../../Redux/Reducer/RegistrationSlice";
import { submitForm, resetForm, updateField } from "../../Redux/Reducer/postJobSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PostJob(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const errorMessage = useSelector((state) => state.studentProfile.errorMessage);
  const infoMessage = useSelector((state) => state.studentProfile.infoMessage);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    JobTitle: '',
    CompanyName: '',
    JobType: '',
    Location: '',
    Salary: '',
    SkillsRequirement: '',
    JobResponsibilities: '',
    JobDescription: '',
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    // dispatch(updateField({fieldName, value }));
  };

  // const handleFieldChange = (fieldName, value) => {
  //   console.log('Received updateField action with fieldName:', fieldName, 'and value:', value);
  //   dispatch(updateField({ fieldName, value }));
  //   console.log(' updateField action with fieldName:', fieldName, 'and value:', value);
  // };

  
  const requiredFields = [
    'JobTitle',
    'CompanyName',
    'JobType',
    'Location',
    'Salary',
    'SkillsRequirement',
    
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    

    // Check if any required field is empty
    const isAnyFieldEmpty = requiredFields.some((fieldName) => !formData[fieldName]);

    if (isAnyFieldEmpty) {
      dispatch(setError('No field should be empty'));
      return;
    }
    dispatch(setError(""));
    dispatch(setInfo(""));
    

    axios
      .post("https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/post-job", formData)
      .then((result) => {
        console.log('Job Posted Successfully', result.data);
        dispatch(resetForm());
        setFormData({
          JobTitle: '',
          CompanyName: '',
          JobType: '',
          Location: '',
          Salary: '',
          SkillsRequirement: '',
        });
        dispatch(setInfo('Successfully Registered'));
      })
      .catch((err) => {
        console.error('Error in posting a job', err);
        dispatch(setError('Registration Failed'));
      });
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
      <Title />

      {/* Content */}
      <div className="flex">
        {/* left side */}
        {/* menu */}
        <div
          className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}
        >
          <div className="text-center pt-8 pb-5">
            <i className="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>

          <Menu />
        </div>

        {/* right side */}
        <div
          className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 ${
            menuOpen ? 'hidden' : 'block'
          }`}
        >
          <div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col justify-center items-center sm:w-[50%]">
            <div>
              <img src={img3} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
              <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold max-sm:text-center mb-10">Post a Job</h1>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {requiredFields.map((field, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    placeholder={field}
                    className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-3 my-1 text-black"
                    onChange={(e) => handleFieldChange(field, e.target.value)}
                    required
                  />
                </div>
              ))}

              <div>
                <textarea
                  type="textarea"
                  name="JobResponsibilities"
                  placeholder="JobResponsibilities"
                  onChange={(e) => handleFieldChange('JobResponsibilities', e.target.value)}
                  className="2xl:w-[60%] xl:w-[55%] h-[15Vh] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black"
                  required
                />
                <textarea
                  type="textarea"
                  name="JobDescription"
                  placeholder="JobDescription"
                  onChange={(e) => handleFieldChange('JobDescription', e.target.value)}
                  className="2xl:w-[60%] xl:w-[55%] h-[15Vh] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black"
                  required
                />
              </div>

              <div className="my-3 text-white max-sm:mx-2">
                <button className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">
                  Post
                </button>

                {/* Show Alert */}
                <h1 className="text-red-700 font-semibold mt-2">{errorMessage}</h1>
                <h1 className="text-green-600 font-semibold mt-2">{infoMessage}</h1>
              </div>
            </form>

            {/* Buttons */}
            <div className="my-3 text-white max-sm:mx-2">
              {/* back button */}
              <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
                <button>
                  <i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i>{' '}
                  <Link to="/company-panel" className="font-semibold">
                    Back to Dashboard
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
