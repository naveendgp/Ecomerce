import Cart from '../../assets/cart.png'
import Product from '../../assets/product.png'
import './card.css'


const ProductCard = () => {

    return (
      <section className="cardContainer">
        <div className="cardImage">
          <img src={Product} className="cardImage" />
        </div>
        <div className="cardBody">
          <div className="prodDesc">
            <h3 className="prodTitle">Products</h3>
            <h3 className="prodPrice">$54.33</h3>
            <div className="buyContainer">
              <button className="Signup">Buy Now</button>
              <button
                className="addCart Login"
                onClick={() => console.log("Bought")}
              >
                <img src={Cart} className="cartIcon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProductCard;