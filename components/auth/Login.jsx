import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from 'js-cookie';
import { API_URL } from '../../urlconfig'

export default function Login() {
  
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData)
      await toast.promise(
        async () => {
          const response = await axios.post(
            `${API_URL}/api/v1/user/login`,
            formData,
            { withCredentials: true } 
          );
          console.log(response.data.data.accessToken)
          const { accessToken, refreshToken } = response.data.data;
      
          return response.data; // Return data from the Axios response
        },
        {
          pending: "Logging in...",
          success: "Login successful! 👌",
          error: "Login failed. Please check your credentials. 🤯",
        }
      );
      navigate('/dashboard')
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error);
      toast.error("Login Failed! Please check your credentials.");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  type={visible ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                {visible ? (
                <FaEyeSlash
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  onClick={toggleVisibility}
                />
              ) : (
                <FaEye
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  onClick={toggleVisibility}
                />
              )}
                 
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

         
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
