import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import moon from '../../assets/moon.png'
import cart from '../../assets/cart.png'
import user from '../../assets/user.png'
import './nav.css'

const Topnav = () => {
  return (
    <section className="Topnav-Container">
      <div className="Logo">
        <h3>Logo</h3>
      </div>

      <div className="SearchBar">
        <SearchBar />
      </div>

      <div className="Menu">
        <div className="iconBackground" style={{ background: "white" }}>
          <img src={moon} className='iconMoon'/>
        </div>
        <div className="iconBackground" style={{ background: "white" }}>
          <img src={cart} className='iconMoon'/>
        </div>
        <div className="iconBackground" style={{background:"white"}}>
          <img src={user} className='iconMoon'/>
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