import product from "../../assets/product.png"
import Bookcover from '../../assets/bookcover.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import './cart.css'

const CartItems = () => {

    const [count,setCount] = useState(1);

    return (
      <>
        <div className="cartProdContainer bg-gray-100">
          <div className="cartImageContainer">
            <img src={Bookcover} alt="" className="object-fit" />
          </div>

          <div className="cartProdName">
            <h3>Smart Watch with Extra feature</h3>
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