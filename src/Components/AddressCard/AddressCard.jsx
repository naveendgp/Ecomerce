import React from "react";
import './address.css'


const AddressCard = ({changeAddress}) =>{

    return (
      <>
        <div className="addressContainer">
          <h3 className="addressTitle">Address </h3>
          <h4 className="addressName">Naveen Sakthi S</h4>
          <h4 className="addressDesc">
            Mr John Smith: 132, My Street, Kingston, New York 12401
          </h4>

          <button className="changeBtn" onClick={changeAddress}>Change</button>
        </div>
      </>
    );
}

export default AddressCard;