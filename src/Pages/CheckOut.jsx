import React from "react";
import AddressCard from "../Components/AddressCard/AddressCard";
import Topnav from "../Components/TopNavigation/Topnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import googlepay from '../assets/google-pay.png'
import { useLocation} from "react-router-dom";


const CheckOut = () => {
  const location = useLocation();
    const { title, author, price, book, coverImage } = location.state || {};

  return (
    <>
      <Topnav />
      <section className="main">
        <div className="checkoutContainer">
          <section className="checkoutAddressContainer">
            <h3 className="checkTitle">Checkout</h3>

            <AddressCard />

            <h3 className="paymentTitle">Payment Method</h3>

            <div className="paymentContainer">
              <div className="paymentCard">
                <FontAwesomeIcon icon={faCreditCard} className="paymentIcon" />
                <h4 className="iconInfo">Card</h4>
              </div>
              <div className="paymentCard">
                <img src={googlepay} alt="" className="gpayIcon" />
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
                <h3 className="price">${price}</h3>
                <h3 className="price">$0</h3>
                <h3 className="price">$20.44</h3>
                <h3 className="price" style={{ color: "black" }}>
                  ${price + 20.44}
                </h3>
              </div>
            </div>
            <button
              className="makePayment">
              Make Payment
            </button>

          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut