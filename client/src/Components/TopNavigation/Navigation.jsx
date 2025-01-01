import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [user, setUser] = useState(false);
    const [name, setName] = useState(null);
  
    useEffect(() => {
      const storedUser = localStorage.getItem("loggedIn");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      const name = localStorage.getItem("name");
      if (name) {
        setName(name);
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem("loggedIn");
      setUser(null);
    };

  // Handle scroll event to toggle background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return (
  <section
    className={`fixed top-0 left-0 h-20 w-full border-b border-gray-200 bg-white z-10 transition-all duration-300 ${
      isScrolled
        ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-lg"
        : "bg-transparent"
    } flex items-center justify-between p-5`}
  >
    {/* Wrapper for logo and search bar */}
    <div className="flex items-center space-x-4 w-full">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl mr-5 text-blue-900 font-semibold font-poppins">
          Ecommerce
        </h1>
      </Link>

      {/* Search Bar */}
      <SearchBar />

      {/* Slider Icon */}
      <div className="bg-gray-100 border-gray-400 py-3 px-4 rounded-full">
        <FontAwesomeIcon icon={faSliders} className="text-xl text-blue-900" />
      </div>

      {/* Cart Icon */}
      <Link to="/addtocart">
        <div className="bg-gray-100 border-gray-400 py-3 px-4 rounded-full">
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-xl text-blue-900"
          />
        </div>
      </Link>

      {/* User Icon */}
      <div className="bg-gray-100 border-gray-400 py-3 px-4 rounded-full">
        <FontAwesomeIcon icon={faUser} className="text-xl text-blue-900" />
      </div>

      {/* User Login/Logout Section */}
      <div className=" flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl text-blue-800 font-poppins">Hi, {name}</h3>

            <div onClick={handleLogout} className="bg-gray-100 border-gray-400 py-3 px-4 rounded-full">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-xl text-blue-900"
              />
            </div>
           
          </div>
        ) : (
          <div className="flex items-center  space-x-4">
            <Link to="/login">
              <button className="px-7 py-2 rounded-md border border-blue-900">
                Login
              </button>
            </Link>

            <Link to="/login">
              <button className="px-6 py-2 bg-blue-800 rounded-md text-white">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
);



};

export default Navigation;