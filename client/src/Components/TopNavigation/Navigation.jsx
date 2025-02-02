import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faSliders,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";

const Navigation = ({OnSearch}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(false);
  const [name, setName] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedIn");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("uid");
    localStorage.removeItem("photoURL");
    setUser(null);
  };

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
  
  const ProfileImg = localStorage.getItem("photoURL");

  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Add logic to filter products or navigate to a search results page
  };

  return (
    <section
      className={`fixed top-0 left-0 h-20 w-full border-b border-gray-200 bg-white z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      } flex items-center justify-between p-5`}
    >
      <div className="flex items-center space-x-4 w-full">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl mr-5 text-blue-900 font-semibold font-poppins">
            Sri Pon Arachalaiamman
          </h1>
        </Link>

        {/* Search Bar */}
        <SearchBar onSearch={OnSearch} />

      {/* Slider Icon */}
      <div className="bg-gray-100 border-gray-400 py-3 ml-[200px] px-4 rounded-full" style={{marginLeft: "-50px"}}>
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
       

      {/* User Login/Logout Section */}
      <div className="w-[30vw] flex justify-end">
        <div className=" flex items-center space-x-4">
          {user ? (
            
            <div className="flex items-center space-x-4">
               <div className="bg-gray-100 border-gray-400  rounded-full">
                  {ProfileImg ? (
                    <img
                      src={ProfileImg}
                      alt="User Profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser} className="text-xl text-blue-900" />
                  )}
                </div>

              <h3 className="text-2xl text-blue-800 font-poppins">
                Hi, {name}
              </h3>

              <div
                onClick={handleLogout}
                className="bg-gray-100 border-gray-400 py-3 px-4 rounded-full"
              >
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
    </div>
  </section>
);



};

export default Navigation;
