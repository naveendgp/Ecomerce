import React, { useState } from "react";
import AddressCard from "../Components/AddressCard/AddressCard";
import Topnav from "../Components/TopNavigation/Topnav";
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
  const { BookTitle, Author, Price, BookImage } = location.state || {};

  const [address, setAddress] = useState(null); // Store the address data
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSaveAddress = (addressData) => {
    setAddress(addressData); // Save the address data
  };

  return (
    <>
      <Topnav />
      <section className="main">
        <div
          className={`checkoutContainer rounded-md flex justify-center ${
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
              <div className="h-32">
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
              <div className="paymentCard">
                <FontAwesomeIcon icon={faCreditCard} className="paymentIcon" />
                <h4 className="iconInfo">Card</h4>
              </div>
              <div className="paymentCard">
                <img src={googlepay} alt="Google Pay" className="gpayIcon" />
                <h4 className="gpayInfo">Google Pay</h4>
              </div>
              <div className="paymentCard">
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className="paymentIcon"
                />
                <h4 className="iconInfo">Bank</h4>
              </div>
            </div>
          </section>

          <div className="orderSummary">
            <h3 className="orderTitle">Order Summary</h3>
            <div className="priceContainer">
              <div className="part">
                <h3 className="price">SubTotal</h3>
                <h3 className="price">Discount</h3>
                <h3 className="price">Delivery</h3>
                <h3 className="price" style={{ color: "black" }}>
                  Total
                </h3>
              </div>
              <div className="part">
                <h3 className="price">${Price}</h3>
                <h3 className="price">$0</h3>
                <h3 className="price">$20.44</h3>
                <h3 className="price" style={{ color: "black" }}>
                  ${Price + 20.44}
                </h3>
              </div>
            </div>
              <button className="makePayment"
               onClick={() =>
                navigate("/pay", {
                  state: { BookTitle, Author, Price, BookImage,address },
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
