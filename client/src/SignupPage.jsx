import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const SignupPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     const response = await fetch("http://localhost:5000/api/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ email, password, confirmPassword }),
     });

     if (!response.ok) {
       const errorData = await response.json();
       alert(errorData.error || "An error occurred");
       return;
     }

     const data = await response.json();

     if (data.error) {
       alert(data.error);
     } else if (data.message) {
       alert(data.message);
     }
   } catch (error) {
     alert("Something went wrong, please try again later.");
     console.error("Error:", error);
   }
 };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={
                (e) => setEmail(e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-60 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className="flex mt-5 space-x-3">
            <h1>Already have an account</h1>
            <Link className="text-blue" to={"/Loginpage"}>
              <h1>Login</h1>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
