import Cart from '../../assets/cart.png'
import Product from '../../assets/product.png'
import { useNavigate } from 'react-router-dom'
import './card.css'


const ProductCard = () => {

  const navigate = useNavigate();

  

    return (
      <section className="cardContainer">
        <div className="cardImage">
          <img src={Product} className="cardImage" />
        </div>
        <div className="cardBody">
          <div className="prodCardDesc">
            <h3 className="prodCardTitle">Products</h3>
            <h3 className="prodCardPrice">$54.33</h3>
            <div className="buyContainer">
              <button
                onClick={() => navigate("/productpage")}
                className="Signup"
              >
                Buy Now
              </button>
              <button className="addCart Login">
                <img src={Cart} className="cartIcon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProductCard;