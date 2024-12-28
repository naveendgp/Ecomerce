import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import moon from '../../assets/moon.png';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';
import './nav.css';

const Topnav = () => {

  const [user, setUser] = useState(false);
  const [name, setName] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedIn');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
    const name = localStorage.getItem('name');
    if (name) {
      setName(name); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setUser(null); 
  };

  return (
    <section className="Topnav-Container">
      <div className="Logo">
        <Link to='/' className='link'>
          <h3>Logo</h3>
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
          <img src={user} className="iconMoon" />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
        {user ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "20px" }}>
            <h3 style={{ fontSize: "20px", color: "#333", fontWeight: "bold" }}>{name}</h3>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px"
              }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "10px"
              }}
            >
              Login
            </button>
          </Link>
        )}

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px"
          }}
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Topnav;
