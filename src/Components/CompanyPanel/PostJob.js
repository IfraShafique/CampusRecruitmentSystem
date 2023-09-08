import React, { useState } from 'react';
import Title from './CompanyTitle';
import Menu from './CompanyMenu';
import img3 from '../Images/logoBlack.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PostJob(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
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
  };

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
      setErrorMessage('No field should be empty');
      return;
    }

    setErrorMessage('');
    setInfoMessage('');

    axios
      .post(process.env.REACT_APP_POSTJOB_URI, formData)
      .then((result) => {
        console.log('Job Posted Successfully', result.data);
        setInfoMessage('Successfully Registered');
        // Optionally, reset the form fields
        setFormData({
          JobTitle: '',
          CompanyName: '',
          JobType: '',
          Location: '',
          Salary: '',
          SkillsRequirement: '',
          JobResponsibilities: '',
          JobDescription: '',
        });
      })
      .catch((err) => {
        console.error('Error in posting a job', err);
        setErrorMessage('Registration Failed');
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




// import React, { useState } from 'react';
// import Title from "./CompanyTitle";
// import Menu from "./CompanyMenu";
// import img3 from "../Images/logoBlack.png";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function PostJob(props) {
//   const [menuOpen, setMenuOpen] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [infoMessage, setInfoMessage] = useState("");
//     const [JobResponsiblities, setJobResponsiblities] = useState()
//     const [JobDescription, setJobDescription] = useState()
  

//     const toggleMenu = () => {
//       setMenuOpen(!menuOpen);
//     };

//     // initial form state
//     const initialFormState = {
//       JobTitle: '',
//       CompanyName: '',
//       JobType: '',
//       Location: '',
//       Salary: '',
//       SkillsRequirement: '',
//       // JobResponsiblities: '', // Initialize with an empty string
//       // JobDescription: '',     // Initialize with an empty string
//     };
    
    
//     const [formData, setFormData] = useState(initialFormState);
    
    
//     const handleFieldChange = (fieldName, value) => {
//       // Update the form data with the new value
//       setFormData({ ...formData, [fieldName]: value });
//     };
    
    
//     const handleSubmit = (event) => {
//       event.preventDefault();
//     // Process the form data here

//     const requiredFields = [
//       "JobTitle",
//       "CompanyName",
//       "JobType",
//       "Location",
//       "Salary",
//       "SkillsRequirement",
      
//     ]

//     // Check if any field is empty
//     const isAnyFieldEmpty = requiredFields.some(
//       (fieldName) => !formData[fieldName]
//     );
    
//     if (isAnyFieldEmpty) {
//       setErrorMessage("No field should be empty");
//       return; // Prevent form submission if any field is empty
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("JobResponsiblities", JobResponsiblities);
//     formDataToSend.append("JobDescription", JobDescription);

//     for (const key in formData){
//       if (formData.hasOwnProperty(key)){
//         formDataToSend.append(key, formData[key])
//       }
//     } 

//     setErrorMessage("");
//     setInfoMessage("");
    
//     axios.post("http://localhost:4000/post-job", 
//     formDataToSend, {
//       headers : {"Content-Type" : "multipart/form-data"}
//     })
//     .then((result) => {
//       console.log("MyCompanyRegistration", result.data);
//       setInfoMessage("Successfully Registered"); // You can show a success message
//       // Reset form fields to their initial empty state
//         setFormData(initialFormState);
//       })
//     .catch((err) => {
//       console.log(err);
//         setErrorMessage("Registration Failed"); 
//       })
 
//     };
    
    
//     const initialFields = [
//       { name: 'JobTitle',type:"text", },
//       { name: 'CompanyName',type:"text" },
//       { name: 'JobType',type:"text" },
//       { name: 'Location',type:"text" },
//       { name: 'Salary',type:"text" },
//       { name: 'SkillsRequirement',type:"text" },
      
//     ];

//     return (
      
//       <div className=''>
         
//           {/* Hamburger Button */}
//         <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
//           <button onClick={toggleMenu} className="text-xl">
//             <i className="fa-solid fa-bars"></i>
//           </button>
//         </div>
//         {/* title */}
//         <Title/>
        
//         {/* Content */}
//         <div className='flex '>
//             {/* left side */}

//           {/* menu */}
//           <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
//           <div className='text-center pt-8 pb-5'>
//             <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
//           </div>
  
//           <Menu/>
//           </div>
  

//             {/* **************right side **************/}
//             {/* password change */}
//             <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
  
      
//   <div div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col justify-center items-center sm:w-[50%]">
//     <div>
//       <img src={img3} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
//       <h1 className="lg:text-5xl sm:text-3xl  text-2xl font-bold  max-sm:text-center mb-10">Post a Job</h1>
    
//     </div>
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//         {initialFields.map((field, index) => (
//             <div key={index}>
//                 {/* <label htmlFor={field.name} className='mr-5'>{field.name} </label> */}
//             <input
//                 type={field.type}
//                 value={formData[field.name]}
//                 placeholder={field.name}
//                 className="2xl:w-[60%] xl:w-[55%] lg:w-[80%]  py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-3 my-1 text-black"
//                 onChange={(e) => handleFieldChange(field.name, e.target.value)}
//             />

//             </div>
//         ))}

//         <div>
//             <textarea type="textarea" name= "JobResponsiblities" placeholder='JobResponsiblities'onChange={(e) => setJobResponsiblities(e.target.value)}  className="2xl:w-[60%] xl:w-[55%] h-[15Vh] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black" required/>  
//             <textarea type="textarea" name= "JobDescription" placeholder='JobDescription' onChange={(e) => setJobDescription(e.target.value)} className="2xl:w-[60%] xl:w-[55%]  h-[15Vh] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black" required/>  
//         </div>



//         <div className="my-3 text-white max-sm:mx-2">
//             <button className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">Post</button>
            
//             {/* Show Alert */}
//             <h1 className="text-red-700 font-semibold mt-2">{errorMessage}</h1>
//             <h1 className="text-green-600 font-semibold mt-2">{infoMessage}</h1>
//         </div>
//     </form>

// {/* Buttons */}
// <div className="my-3 text-white max-sm:mx-2">
   
//         {/* back button */}
//         <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
//           <button><i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i> <Link to='/company-panel' className="font-semibold">Back to Dashboard</Link></button>
//         </div>
//       </div>
// </div>
    
   
//     </div>
//   </div>
//   </div>
// );
// }
