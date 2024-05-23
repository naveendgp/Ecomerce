import React, { useState } from 'react';
import headphone from "../../assets/headphone.png";
import Topnav from '../TopNavigation/Topnav';
import './AddToCard.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Headphone Redmi', color: 'White', price: 249.99, count: 1 },
    { id: 2, name: 'Headphone Realme', color: 'block', price: 549.99, count: 1 },
    { id: 3, name: 'Headphone Sony', color: 'block', price: 99.99, count: 1 },
  ]);

  const handleIncrement = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2);

  return (
    <>
    <Topnav/>
    <div className="cart-container" style={{marginTop:"200px"}}>
      <div className="cart">
        <h2>Cart ({cartItems.length} products)</h2>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="product-info">
              <img src={headphone} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.color}</p>
              </div>
            </div>
            <div className="quantity-control">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.count}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <div className="price">${item.price.toFixed(2)}</div>
            <button className="remove-item" onClick={() => handleRemove(item.id)}>x</button>
          </div>
        ))}
      </div>
      <div className="summary">
        <h3>Promo code</h3>
        <input type="text" placeholder="Type here..." />
        <button>Apply</button>
        <div className="totals">
          <p>Subtotal: ${subtotal}</p>
          <p>Discount: $0.00</p>
          <h3>Total: ${subtotal}</h3>
        </div>
        <button className="checkout">Continue to checkout</button>
      </div>
    </div>
    </>
  );
};

export default Cart;
