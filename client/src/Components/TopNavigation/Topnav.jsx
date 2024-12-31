import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import moon from "../../assets/moon.png";
import cart from "../../assets/cart.png";
import userImg from "../../assets/user.png";
import "./nav.css";

const Topnav = () => {
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

  return (
    <section className="Topnav-Container">
      <div className="Logo">
        <Link to="/" className="link">
          <h3 className="font-semibold font-sans">Logo</h3>
        </Link>
      </div>

      <div className="SearchBar">
        <SearchBar />
      </div>

      <div className="Menu">
        <div className="iconBackground" style={{ background: "white" }}>
          <img src={moon} className="iconMoon" />
        </div>
        <div className="iconBackground" style={{ background: "white" }}>
          <Link to="/addtocart">
            <img src={cart} className="iconMoon" />
          </Link>
        </div>
        <div className="iconBackground" style={{ background: "white" }}>
          <img src={userImg} className="iconMoon" />
        </div>
      </div>

      <div className="w-full flex">
        {user ? (
          <div className="flex w-full justify-center">
            <h3 className="text-2xl ">Hi, {name}</h3>
            <button onClick={handleLogout} className="ml-10">
              Log Out
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <Link to="/login">
              <button className="px-7 py-2 rounded-md border border-blue-900 ">
                Login
              </button>
            </Link>

            <Link to="/login">
              <button className="px-6 py-2 bg-blue-800 ml-5 rounded-md text-white">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Topnav;
