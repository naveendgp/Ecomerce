import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import moon from '../../assets/moon.png'
import cart from '../../assets/cart.png'
import user from '../../assets/user.png'
import './nav.css'

const Topnav = () => {
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

      <div className="Login-container">
        <button className="Login">Login</button>

        <button className="Signup">Sign Up</button>
      </div>
    </section>
  );
}

export default Topnav