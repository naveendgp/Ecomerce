import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentPage.css";
import Navigation from "../Components/TopNavigation/Navigation";

const QRCodeDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure data passed via location.state
  const { BookTitle, Author, Price, BookImage, address } = location.state || {};

  const qrData = JSON.stringify({ BookTitle, Price });
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePay = async () => {
    try {
      alert(`Proceeding to pay for ${BookTitle} with price ₹${Price}`);

      // Prepare the payload for the API call
      const paymentData = {
        BookTitle,
        Author,
        Price,
        BookImage,
        paymentStatus: "Success",
        timestamp: new Date().toISOString(),
        address, // Include the address
      };

      // Make the POST API call
      const response = await fetch("http://localhost:5000/api/orders/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      // Check the response status
      if (response.ok) {
        const result = await response.json();
        console.log("Payment saved to database:", result);
        setIsPaymentComplete(true); // Set payment status to complete
      } else {
        console.error("Failed to save payment:", response.status);
        alert("Payment processing failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navigation />
      <div className="mt-20 flex flex-col items-center p-10 rounded-md">
        {!isPaymentComplete ? (
          <section className="flex flex-col items-center border border-gray-300 p-10 rounded-md">
            <h1 className="text-black text-3xl font-poppins">
              QR Code for Payment
            </h1>
            <div className="qr-code-section mt-10">
              <QRCodeCanvas value={qrData} className="qr-code" />
              <p>Scan the QR Code to pay for the Book</p>
            </div>
            <div className="address-display w-full">
              <h3>Delivery Address</h3>
              <p>{`${address.firstName} ${address.lastName}`}</p>
              <p>{address.streetAddress}</p>
              <p>{`${address.landmark}, ${address.pincode}`}</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handlePay}
                className="bg-blue-900 text-white text-xl font-semibold px-6 py-3 rounded-md mt-5"
              >
                Pay Now
              </button>
            </div>
          </section>
        ) : (
          <div className="flex flex-col items-center p-10 bg-green-100 rounded-md shadow-md">
            <h1 className="text-green-600 text-4xl font-bold">
              🎉 Payment Successful 🎉
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Thank you for your payment!
            </p>
            <p className="text-lg text-gray-700">
              Your order for <strong>{BookTitle}</strong> has been successfully
              processed.
            </p>
            <button
              onClick={handleGoToHome}
              className="bg-blue-900 text-white text-xl font-semibold px-6 py-3 rounded-md mt-6"
            >
              Go to Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QRCodeDisplay;
