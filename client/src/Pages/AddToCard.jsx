import React from "react";
import Navigation from "../Components/TopNavigation/Navigation";
import { Navigate, useNavigate } from "react-router-dom";
import CartItems from "../Components/CartItems/CartItems";

const Cart = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <section className="main mt-20">
        <div className="cartContainer">
          <div className="cartProducts">
            <h3 className="cartTitle">Cart Items</h3>
            <div style={{ marginBottom: "5vh" }}>
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
            </div>
          </div>

          <div className="cartTotal">
            <h4 className="promoTitle">Promo Code</h4>
            <div className="searchContainer p-5 flex items-center">
              <input placeholder="Type here..."  />
              <button className="apply mb-1 border border-black" >Apply</button>
            </div>
            <div className="priceContainer">
              <div className="part">
                <h3 className="price">SubTotal</h3>
                <h3 className="price">Discount</h3>
                <h3 className="price">Delivery</h3>
                <h3 className="price" style={{color:"black"}}>Total</h3>
              </div>
              <div className="part">
                <h3 className="price">$84.44</h3>
                <h3 className="price">$84.44</h3>
                <h3 className="price">$4.44</h3>
                <h3 className="price" style={{color:'black'}}>$84.44</h3>
              </div>
            </div>
            <button onClick={() => navigate('/checkout')} className="apply checkoutBtn">Checkout</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;