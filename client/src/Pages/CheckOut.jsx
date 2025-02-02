import React, { useState } from "react";
import AddressCard from "../Components/AddressCard/AddressCard";
import Navigation from "../Components/TopNavigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faAdd,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import googlepay from "../assets/google-pay.png";
import { useLocation } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import PopupCard from "../Components/PopupCard/PopupCard";

const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { BookTitle, Author, Price, BookImage, Quantity } = location.state || {};


  const [address, setAddress] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSaveAddress = (addressData) => {
    setAddress(addressData); // Save the address data
  };

  const totalAmount =Quantity * Price + 20.44;

  const card = localStorage.getItem("cart");
  console.log(card);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const Amount = cart.reduce((total, product) => {
    return total + product.Price; // Sum of Quantity * Price for each product
  }, 0) + 20.44; // Add the delivery fee (₹20.44)
  console.log(Amount);

  const amt = localStorage.getItem("amt");


  return (
    <>
      <Navigation />
      <section className="main mt-20">
        <div
          className={`checkoutContainer rounded-md flex justify-center ₹{
            isPopupOpen ? "blur-sm" : ""
          }`}
        >
          <section className="checkoutAddressContainer">
            <h3 className="checkTitle">Checkout</h3>

            {address ? (
              <>
                <h2 style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>Address</h2>
                <AddressCard address={address} changeAddress={() => setIsPopupOpen(true)} />
                </>
            ) : (
              <div className="h-32 mt-6">
                <h1>Add Address</h1>
                <button
                  onClick={togglePopup}
                  className="m-5 flex flex-col justify-center items-center border border-gray-300 text-center h-20 w-[25vh] rounded-[5px]"
                >
                  <FontAwesomeIcon icon={faAdd} className="addIcon" />
                  <p>Click To Add</p>
                </button>
              </div>
            )}

            <h3 className="paymentTitle" style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>Payment Method</h3>

            <div className="paymentContainer">
      {/* Card Payment */}
      <div
        className={`paymentCard ₹{selectedMethod === "card" ? "selected" : ""}`}
        onClick={() => handleSelect("card")}
      >
        <FontAwesomeIcon icon={faCreditCard} className="paymentIcon" />
        <h4 className="iconInfo">Card</h4>
      </div>

      {/* Google Pay */}
      <div
        className={`paymentCard ₹{selectedMethod === "googlepay" ? "selected" : ""}`}
        onClick={() => handleSelect("googlepay")}
      >
        <img src={googlepay} alt="Google Pay" className="gpayIcon" />
        <h4 className="gpayInfo">Google Pay</h4>
      </div>

      {/* Bank Payment */}
      <div
        className={`paymentCard ₹{selectedMethod === "bank" ? "selected" : ""}`}
        onClick={() => handleSelect("bank")}
      >
        <FontAwesomeIcon icon={faBuildingColumns} className="paymentIcon" />
        <h4 className="iconInfo">Bank</h4>
      </div>
    </div>
          </section>

          <div className="orderSummary" style={{height:"350px"}}>
            <h3 className="orderTitle">Order Summary</h3>
            <div className="priceContainer">
              <div className="part">
                <h3 className="price">SubTotal</h3>
                <h3 className="price">Quantity</h3>
                <h3 className="price">Discount</h3>
                <h3 className="price">Delivery</h3>
                <h3 className="price" style={{ color: "black" }}>
                  Total
                </h3>
              </div>
              <div className="part">
                <h3 className="price">₹{amt}</h3>
                <h3 className="price">₹{Quantity || 0}</h3>
                <h3 className="price">₹0</h3>
                <h3 className="price">₹20.44</h3>
                <h3 className="price" style={{ color: "black" }}>
  ₹{amt}
</h3>

              </div>

            </div>
              <button className="makePayment" style={{marginTop:"60px"}}
               onClick={() =>
                navigate("/pay", {
                  state: { BookTitle, Author, totalAmount, BookImage,address,Quantity },
                })
              }
              >Make Payment</button>
          </div>
        </div>

        {isPopupOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-backdrop-filter bg-opacity-30 backdrop-blur-sm z-10"
              onClick={togglePopup}
            ></div>

            <div className="fixed top-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-[60vh] z-20">
              <PopupCard cancel={togglePopup} onSave={handleSaveAddress} />
            </div>
          </>
        )}
      </section>
    </>
  );
};



export default CheckOut;
