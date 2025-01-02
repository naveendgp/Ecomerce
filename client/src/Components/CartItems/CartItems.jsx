import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './cart.css';

const CartItems = ({ BookImage, BookTitle, Author, Price, onQuantityChange, initialCount }) => {
  const [count, setCount] = useState(initialCount || 1);

  const handleCountChange = (newCount) => {
    setCount(newCount);
    // Pass the updated count and updated price (Price * count) to the parent component
    onQuantityChange(BookTitle, newCount, Price * newCount);
  };

    return (
      <>
        <div className="cartProdContainer bg-gray-100">
          <div className="cartImageContainer">
            <img src={BookImage} alt="" className="object-fit" />
          </div>

      <div className="cartProdName">
        <h3>{BookTitle}</h3>
        <p>{Author}</p>
      </div>

          <div className="cartQtyController">
            <button
              className="qtyMinusBtn"
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <h3>{count}</h3>
            
            <button className="qtyBtn" onClick={() => setCount(count + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="cartProdPrice">
            <h3>$84.55</h3>
          </div>
        </div>
      </>
    );
}

export default CartItems;
