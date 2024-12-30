import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QrReader } from 'react-qr-reader';
import './PaymentPage.css';
import Topnav from '../Components/TopNavigation/Topnav';

const QRCodeDisplay = ({ productName, price }) => {
    const qrData = JSON.stringify({ productName, price });
  
    const handlePay = () => {
      alert(`Proceeding to pay for ${productName} with price ₹${price}`);
    };
  
    return (
        <>
           <Topnav/>
      <div className="qr-code-container">
     
        <h1>QR Code for Payment</h1>
        <div className="qr-code-section">
          <QRCodeCanvas value={qrData} className="qr-code" />
          <p>Scan the QR Code to pay for the Book</p>
        </div>
        <button onClick={handlePay} className="pay-button">
          Pay
        </button>
      </div>
      </>);
  };
  
  export default QRCodeDisplay;