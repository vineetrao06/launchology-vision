import React, { useState } from "react";
import { ColorSwatchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Login = () => {
  //we will put the erroMessage as <div className="flex items-center justify-center text-red-500">"The Erorr"</div>
  const [errorMessage, setErrorMessage] = useState("")

  return (
    <div className="h-screen bg-green-100">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-lg">
          <div>
            <ColorSwatchIcon className="mx-auto h-12 w-auto text-green-700" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {errorMessage}
            <div>
              <button className="transition group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 duration-300 ease-in-out"
                onClick={() => {

                  let email = document.getElementById("email-address").value
                  let password = document.getElementById("password").value

                  if(!email || !password){
                    setErrorMessage(<div className="flex items-center justify-center text-red-500">Fill all boxes</div>)
                    return
                  }

                  window.location.replace("/")
                }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
