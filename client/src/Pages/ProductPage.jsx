import React from "react";
import ProductImage from '../assets/productimage.png';
import Cart from '../assets/cart.png';
import Navigation from "../Components/TopNavigation/Navigation";
import { useNavigate, useLocation } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { BookTitle, Author, Price, BookImage } = location.state || {}; 

  return (
    <>
      <Navigation />
      <section className="main">
        <div className="Product">
          <section className="ProductContainer">
            <div className="productImageContainer">
              <img src={BookImage} className="mainImage" />
            </div>
          </section>
          <div className="ProductDetails">
            <div>
              <h5 className="productTitle">
                {BookTitle} 
              </h5>
              <h5 className="prodRating">Author : {Author}</h5>
              <h3 className="prodPrice">${Price}</h3>
            
              <p className="prodDesc">
              </p>
              <div className="prodBuyContainer" >
                <buttton className="Signup buy" onClick={() => navigate('/checkout', {
                  state: { BookTitle, Author, Price, BookImage },
                })}>
                  Buy Now
                </buttton>
                <button className="addCart Login cartbtn ml-5">
                  <img src={Cart} className="w-8 p-2" alt="Cart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
