import { ColorSwatchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="bg-green-100 h-screen">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white rounded-lg p-3">
          <div>
            <ColorSwatchIcon className="mx-auto h-12 w-auto text-green-900" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="fullname" className="sr-only">
                  Full name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="email"
                  autoComplete="fullname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="rpassword" className="sr-only">
                  Password
                </label>
                <input
                  id="rpassword"
                  name="rpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Repeat Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="underline text-green-600 hover:">
                  Login
                </Link>
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="transition group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 duration-300 ease-in-out"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
