import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';
import Topnav from '../Components/TopNavigation/Topnav';

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
        paymentStatus: 'Success',
        timestamp: new Date().toISOString(),
        address, // Include the address
      };

      // Make the POST API call
      const response = await fetch('http://localhost:5000/api/orders/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      // Check the response status
      if (response.ok) {
        const result = await response.json();
        console.log('Payment saved to database:', result);
        setIsPaymentComplete(true); // Set payment status to complete
      } else {
        console.error('Failed to save payment:', response.status);
        alert('Payment processing failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during payment processing:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <>
      <Topnav />
      <div className="qr-code-container">
        {!isPaymentComplete ? (
          <>
            <h1>QR Code for Payment</h1>
            <div className="qr-code-section">
              <QRCodeCanvas value={qrData} className="qr-code" />
              <p>Scan the QR Code to pay for the Book</p>
            </div>
            <div className="address-display">
              <h3>Delivery Address</h3>
              <p>{`${address.firstName} ${address.lastName}`}</p>
              <p>{address.streetAddress}</p>
              <p>{`${address.landmark}, ${address.pincode}`}</p>
            </div>
            <button onClick={handlePay} className="pay-button">
              Pay
            </button>
          </>
        ) : (
          <div className="payment-success">
            <h1>🎉 Payment Successful 🎉</h1>
            <p>Thank you for your payment!</p>
            <button onClick={handleGoToHome} className="go-home-button">
              Go to Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QRCodeDisplay;
