import React, { useState } from "react";
import img2 from "../Images/img2.png";
import img3 from "../Images/logoBlack.png";
import { Link } from "react-router-dom";
import AdminMenu from "../AdminPanel/AdminMenu";
import axios from "axios";

export default function CompanySignup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  // Define the initial state for your form fields
  const initialFormState = {
    LoginID: "",
    CompanyName: "",
    Industry: "",
    HRName: "",
    CompanyEmail: "",
    ContactNo: "",
    WebsiteLink: "",
    AboutCompany: "",
    Password: "",
    ConfirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any of the required fields are empty
  const requiredFields = [
    "LoginID",
    "CompanyName",
    "Industry",
    "HRName",
    "CompanyEmail",
    "ContactNo",
    "WebsiteLink",
    "AboutCompany",
    "Password",
    "ConfirmPassword",
  ];

    const isAnyFieldEmpty = requiredFields.some(
      (fieldName) => !formData[fieldName]
    );
  
    if (isAnyFieldEmpty) {
      setErrorMessage("No field should be empty");
      return; // Prevent form submission if any field is empty
    }

    else if (!/^\d{11}$/.test(formData.ContactNo)){
      setErrorMessage("Contact no should have exactly 11 digits");
      setInfoMessage("");
      return;
    }

    else if(!/^www\..+\.com$/.test(formData.WebsiteLink)){
      setErrorMessage("e.g www.example.com");
      setInfoMessage("");
      return;
    }
        else if (formData.Password.length < 6) {
          setErrorMessage("Password should be at least 6 characters long");
          setInfoMessage(""); // Clear the success message
          return; // Prevent form submission if the password is too short
        }
    
        else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&!?])[A-Za-z\d@#$%&!?]+$/.test(formData.Password)){
          setErrorMessage("Password should contain at least one letter, one number, and one special character");
          setInfoMessage("");
          return;
        }

      else if (formData.Password !== formData.ConfirmPassword) {
        setErrorMessage("Password and Confirm Password do not match");
        return; // Prevent form submission if they don't match
      }


    setErrorMessage("");
    setInfoMessage("");
    
    console.log("Form Data:", formData);
    
    // Use formData directly for the axios post request
    axios
    .post(process.env.REACT_APP_COMPANYREGISTRATION_URI, formData)
    .then((result) => {
      console.log("MyCompanyRegistration", result.data);
      setInfoMessage("Successfully Registered"); // You can show a success message
      // Reset form fields to their initial empty state
        setFormData(initialFormState);
        
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Registration Failed"); // You can show an error message
      });
  };
  

  const handleFieldChange = (fieldName, value) => {
    // Update the form data with the new value
    setFormData({ ...formData, [fieldName]: value });
  };

  const initialFields = [
    { name: "LoginID", type: "text" },
    { name: "CompanyName", type: "text" },
    { name: "Industry", type: "text" },
    { name: "HRName", type: "text" },
    { name: "CompanyEmail", type: "email" },
    { name: "ContactNo", type: "text" },
    { name: "WebsiteLink", type: "text" },
    { name: "AboutCompany", type: "text" },
    { name: "Password", type: "password" },
    { name: "ConfirmPassword", type: "password" },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <div className="sm:hidden bg-cyan-950 text-white py-3 px-4">
        <button onClick={toggleMenu} className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {/* title */}
      <div className="text-center">
        <h1 className="flex items-center justify-center bg-cyan-950 text-white sm:text-4xl text-center text-xl font-semibold py-3">
          <span className="">
            <img src={img2} alt="logo" className="w-[8rem]" />
          </span>
          Admin Dashboard
        </h1>
      </div>

      {/* Content */}
      <div className="flex">
        {/* menu */}
        <div
          className={`w-[60%] h-[100vh] ${menuOpen ? "block" : "hidden"} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}
        >
          <div className="text-center pt-8 pb-5">
            <i className="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
          </div>

          <AdminMenu />
        </div>

        {/* Details */}
        <div
          className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          {/* Signup */}
          <div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:w-[50%]">
            <div>
              <img
                src={img3}
                alt="logo"
                className="opacity-90 w-[60%] mx-auto sm:hidden"
              />
              <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold max-sm:text-center mb-10">
                Company Registration
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              {initialFields.map((field, index) => (
                <div key={index}>
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    placeholder={field.name}
                    className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black"
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  />
                </div>
              ))}
              <div className="my-3 text-white max-sm:mx-2">
                <button
                  type="submit"
                  className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse"
                >
                  Register
                </button>
                <h1 className="text-red-700 font-semibold mt-2">{errorMessage}</h1>
                <h1 className="text-green-600 font-semibold mt-2">{infoMessage}</h1>
              </div>
            </form>

            {/* Buttons */}
            <div className="my-3 text-white max-sm:mx-2">
              {/* back button */}
              <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
                <button>
                  <i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1"></i>{" "}
                  <Link to="/admin-panel" className="font-semibold">
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






// import React, { useState } from "react";
// import img2 from "../Images/img2.png";
// import img3 from "../Images/logoBlack.png";
// import { Link } from 'react-router-dom';
// import AdminMenu from '../AdminPanel/AdminMenu';
// import axios from 'axios';

// export default function CompanySignup() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [name, setName] = useState()
//   const [industry, setIndustry] = useState()
//   const [hrName, sethrName] = useState()
//   const [email, setEmail] = useState()
//   const [contactNo, setContactNo] = useState()
//   const [webLink, setWebLink] = useState()
//   const [aboutCom, setAboutCom] = useState()
//   const [password, setPassword] = useState()
//   const [confPassword, setConfPassword] = useState()

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
  
//   const initialFields = [
//     { name: 'CompanyName:',type:"text",  value: '' },
//     { name: 'Industry:',type:"text", value: '' },
//     { name: 'HRName:',type:"text", value: '' },
//     { name: 'CompanyEmail:',type:"email", value: '' },
//     { name: 'ContactNo:',type:"text", value: '' },
//     { name: 'WebsiteLink:',type:"text", value: '' },
//     { name: 'AboutCompany:',type:"text", value: '' },
//     { name: 'Password:',type:"password", value: '' },
//     { name: 'ConfirmPassword:',type:"password", value: '' },
    
//     // Add more fields as needed
//   ];

//   const [fields, setFields] = useState(initialFields);

//   // const handleFieldChange = (index, value) => {
//   //   const updatedFields = [...fields];
//   //   updatedFields[index].value = value;
//   //   setFields(updatedFields);
//   // };

//   const handleFieldChange = (index, value) => {
//     const updatedFields = [...fields];
//     updatedFields[index].value = value;
//     setFields(updatedFields);
//   };
  

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     await axios.post('http://localhost:4000/company', fields);
//   //     alert('Registration successful');
//   //   } catch (error) {
//   //     console.error(error);
//   //     alert('Registration failed');
//   //   }
//   // };
  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Data:', {
//       CompanyName: name,
//       Industry: industry,
//       HRName: hrName,
//       CompanyEmail: email,
//       ContactNo: contactNo,
//       WebsiteLink: webLink,
//       AboutCompany: aboutCom,
//       Password: password,
//       ConfirmPassword: confPassword,
//     });
    
//     const formData = {
//       CompanyName: name,
//       Industry: industry,
//       HRName: hrName,
//       CompanyEmail: email,
//       ContactNo: contactNo,
//       WebsiteLink: webLink,
//       AboutCompany: aboutCom,
//       Password: password,
//       ConfirmPassword: confPassword,
//     };
//     axios
//       .post('http://localhost:4000/company', formData)
//       .then((result) => console.log(result.data))
//       .catch((err) => console.log(err));
//     console.log(fields);
//   };

//   return (
//     // <div className="bg-cyan-950 text-white flex  w-[100%] h-[100%] ">
// <div>
//         {/* Hamburger Button */}
//         <div className="sm:hidden bg-cyan-950 text-white py-3 px-4 ">
//         <button onClick={toggleMenu} className="text-xl">
//           <i className="fa-solid fa-bars"></i>
//         </button>
//       </div>
//       {/* title */}
//       <div className=' text-center'>
//       <h1 className='flex items-center justify-center bg-cyan-950 text-white sm:text-4xl  text-center text-xl font-semibold py-3'><span className=''><img src={img2} alt="logo" className='w-[8rem]' /></span>Admin Dashboard</h1>
//       </div>
      
//       {/* Content */}
//       <div className='flex '>

//         {/* menu */}
//         <div className={`w-[60%] h-[100vh] ${menuOpen ? 'block' : 'hidden'} sm:block xl:w-[20%] lg:w-[30%] md:w-[35%] w-[100%] h-[100vh] bg-white sm:text-xl`}>
//         <div className='text-center pt-8 pb-5'>
//           <i class="fa-solid fa-user text-cyan-950 md:text-8xl text-4xl"></i>
//         </div>

//       <AdminMenu/>
        
//         </div>

 
//         {/* Details */}
//         <div className={`xl:w-[80%] lg:w-[70%] md:w-[65%] w-[100%] h-[100%] bg-gray-100 ${menuOpen ? 'hidden' : 'block'}`}>
        
        
//          {/* Signup */}
      
//       <div div className="sm:mt-10 mx-auto my-auto max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:w-[50%]">
//         <div>
//           <img src={img3} alt="logo" className="opacity-90 w-[60%] mx-auto sm:hidden" />
//           <h1 className="lg:text-5xl sm:text-3xl  text-2xl font-bold  max-sm:text-center mb-10">Company Registration</h1>
//         </div>
//     <form onSubmit={handleSubmit}>
//       {fields.map((field, index) => (
//         <div key={index}>
          
//           <input
//             type={field.type}
//             value={field.value}
//             placeholder={field.name}
//             className="2xl:w-[60%] xl:w-[55%] lg:w-[80%] py-2 sm:py-3 px-8 rounded sm:rounded-[10px] max-sm:mx-2 my-1 text-black"
//             onChange={(e) => handleFieldChange(index, e.target.value)}
//           />
//         </div>
//       ))}
//       <div className="my-3 text-white max-sm:mx-2">
//         <button type="submit" className="2xl:w-[50%] xl:w-[55%] lg:w-[80%] max-lg:w-[50%] py-2 sm:py-2 sm:semi-bold lg:text-xl sm:px-8 max-sm:w-[100%] rounded-[10px] bg-cyan-950 hover:bg-gray-900 hover:text-white hover:animate-pulse">Register</button>
//       </div>
//     </form>

//     {/* Buttons */}
//     <div className="my-3 text-white max-sm:mx-2">
          

//             {/* back button */}
//             <div className="mt-3 ml-1 max-sm:text-sm text-black text-semibold">
//               <button><i className="fa-solid fa-arrow-left text-black sm:text-sm text-xs fon-semibold sm:mr-1  "></i> <Link to='/admin-panel' className="font-semibold">Back to Dashboard</Link></button>
//             </div>
//           </div>
//     </div>
        
       
//         </div>
//       </div>
   
//     </div>
//   );
// }
