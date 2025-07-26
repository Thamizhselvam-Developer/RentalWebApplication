import React, { useState } from "react";
import loginImage from "../assets/Forgot/forgot.png";
import { Link,useNavigate  } from "react-router-dom";
import UserNavbar from "../User admin/components/UserNavbar";
import axios from "axios";
import { useEffect } from "react";
// import {ProtectedRoutes} from "../../routes/ProtectedRoutes"
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;
function Frogot() {

  const app = import.meta.env.VITE_API_REACT_APP_BackendApi
 axios.defaults.withCredentials = true;

  const navigate = useNavigate();                   

  // const[Auth,setAuth] =useState(ProtectedRoutes);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    whois:"User"
  });
  

  const[backendErrors,setbackendErrors]=useState({})
  
  const [errors, setErrors] = useState({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
Cookies.set("email", formData.email);
Cookies.set("password", formData.password);
Cookies.set("whois", formData.whois);

  try {
    const response = await axios({
      method: "POST",
      url: `${app}login`,
       headers: {
    "Content-Type": "application/json",
  },
    //  Credentials:"include",
       WithCredentials:true,


    });

 console.log(response.data.message,"vvvv")

    let err = {};
  
  if(response.data.message == "LoginSuccess" ){
      
      Cookies.remove("email")
      Cookies.remove("password")
     Cookies.remove("whois")

      navigate("/"); 

    
    
 
  }
  else if(response.data.message=="Password Does Not Match"){
    console.log ("Password Does Not Match")
  err =({ password:"Password Does Not Match"})

    
  }
  else if(response.data.message=="User Not Found"){
    console.log("User Not Found")
  err =({ email:"User Not Found"})


  } 
  setTimeout(() => {
    setIsSubmitting(false);

  }, 200);
  return  setbackendErrors(err)

  
}
  catch (error) {
    console.log(error);
  }

  
      
    }
  };

console.log(backendErrors)
  


  return (
    <>
      <div>
        <UserNavbar/>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="container max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[500px] p-6 md:p-10">
              <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Forgot Password
                </h1>
                <p className="text-gray-600 mb-8">
                  Do You have account enter an email to reset your password
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute mt-4 left-0 pl-3 flex items-center ">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`appearance-none block w-full pl-10 pr-3 py-3 border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                    )}
                    {backendErrors.email &&(
                      <p className="mt-2 text-sm text-red-600">{backendErrors.email}</p>
                    )}
                  </div>

                  <div className="mb-4">
                  
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                    )}
                    {
                      backendErrors.password &&(

                      <p className="mt-2 text-sm text-red-600">{backendErrors.password}</p>

                      )
                    }
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?
                  </p>
                  {/* <Link to="/Signup">
                    <p className="font-medium text-primary hover:text-black-400 ml-2 block">
                      {" "}
                      Create an account{" "}
                    </p>
                  </Link> */}
                  <button className="border-r  text-primary mr-2 px-2">Login</button>
                  <button className="text-primary ">Signup</button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 ml-6 ">
              <div className="h-full flex items-center justify-center p-6">
                <img
                  src={loginImage}
                  alt="Rental property"
                  className="max-w-full h-auto object-cover rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frogot;