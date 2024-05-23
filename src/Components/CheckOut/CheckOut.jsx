import React, { useState } from 'react';
import './CheckOut.css';
import Topnav from '../TopNavigation/Topnav';

const CheckoutForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    city: '',
    postalCode: '',
    country: 'India',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <>
    <Topnav/>
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h1>Checkout</h1>
      <div className="step">1 Shipping address</div>
      <div className="form-group">
        <label>First name *</label>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Last name *</label>
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Address line 1 *</label>
        <input type="text" name="address" value={form.address} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email *</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>City *</label>
        <input type="text" name="city" value={form.city} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Zip / Postal code *</label>
        <input type="text" name="postalCode" value={form.postalCode} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Shipping Country</label>
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="India">India</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="button" onClick={() => console.log('Back to cart')}>
          BACK TO CART
        </button>
        <button type="submit">NEXT</button>
      </div>
    </form>
    </>
  );
};

export default CheckoutForm;
