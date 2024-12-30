import React from "react";
import ProductImage from '../assets/productimage.png';
import Cart from '../assets/cart.png';
import Topnav from "../Components/TopNavigation/Topnav";
import { useNavigate, useLocation } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { BookTitle, Author, Price, BookImage } = location.state || {};
  console.log(location.state);

  return (
    <>
      <Topnav />
      <section className="main">
        <div className="Product">
          <section className="ProductContainer">
            <div className="productImageContainer">
              <img src={BookImage} className="mainImage" alt={BookTitle || "Product"} />
            </div>
          </section>
          <div className="ProductDetails">
            <div>
              <h5 className="productTitle">{BookTitle}</h5>
              <h5 className="prodRating">Author : {Author}</h5>
              <h3 className="prodPrice">${Price}</h3>
              <h3 style={{ color: "#8A8A8A", marginTop: "2vh" }}>Subjects</h3>
              <p className="prodDesc">hi</p>
              <div className="prodBuyContainer">
                <button
                  className="Signup buy"
                  onClick={() =>
                    navigate("/checkout", {
                      state: { BookTitle, Author, Price, BookImage },
                    })
                  }
                >
                  Buy Now
                </button>
                <button className="addCart Login cartbtn">
                  <img src={Cart} className="cartIcon" alt="Cart" />
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
