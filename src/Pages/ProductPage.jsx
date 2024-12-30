import React from "react";
import ProductImage from '../assets/productimage.png'
import Cart from '../assets/cart.png'
import Topnav from "../Components/TopNavigation/Topnav";
import { useNavigate ,useLocation} from "react-router-dom";


const ProductPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { title, author, price, book, coverImage } = location.state || {};

  return (
    <>
      <Topnav/>
        <section className="main">
          <div className="Product">
          <section className="ProductContainer">
            <div className="productImageContainer">
              <img src={coverImage} className="mainImage" />
            </div>
           
          </section>
          <div className="ProductDetails">
            <div>
              <h5 className="productTitle">
                {title} 
              </h5>
              <h5 className="prodRating">Author : {author}</h5>
              <h3 className="prodPrice">${price}</h3>
              <h3 style={{ color: "#8A8A8A", marginTop: "2vh" }}>
              Subjects
              </h3>
              <p className="prodDesc">
              </p>
              <div className="prodBuyContainer" >
                <buttton className="Signup buy" onClick={() => navigate('/checkout', {
                  state: { title, author, price, book, coverImage },
                })}>
                  Buy Now
                </buttton>
                  <button className="addCart Login cartbtn">
                  <img src={Cart} className="cartIcon" />
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default ProductPage;