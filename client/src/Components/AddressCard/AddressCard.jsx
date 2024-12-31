import React from "react";
import './address.css'


const AddressCard = ({ address, changeAddress }) => {
  return (
    <div className="addressContainer">
      <h3 className="addressTitle">{`${address.firstName} ${address.lastName}`}</h3>
      <p className="addressName">{address.streetAddress}</p>
      <p className="addressDesc">{`${address.landmark}, ${address.pincode}`}</p>
      <button className="changeBtn" onClick={changeAddress}>Change</button>
    </div>
  );
};

export default AddressCard;
