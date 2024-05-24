import React from "react";
import ProductImage from '../assets/productimage.png'
import Cart from '../assets/cart.png'
import Topnav from "../Components/TopNavigation/Topnav";

const ProductPage = () => {

    return (
      <>
        <Topnav />
        <section className="main">
          <div className="Product">
            <section className="ProductContainer">
              <div className="productImageContainer">
                <img src={ProductImage} className="mainImage" />
              </div>
              <div className="subImageContainer">
                <div className="subImage">
                  <img src={ProductImage} className="subImage" />
                </div>
                <div className="subImage">
                  <img src={ProductImage} className="subImage" />
                </div>
                <div className="subImage">
                  <img src={ProductImage} className="subImage" />
                </div>
                <div className="subImage">
                  <div className="viewMore">
                    <p>+4 more</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="ProductDetails">
              <div>
                <h1 className="productTitle">
                  The New Relaxed Fit SweatShirt II
                </h1>
                <h5 className="prodRating">4.5 Rating</h5>
                <h3 className="prodPrice">$84.5</h3>
                <h3 style={{ color: "#8A8A8A", marginTop: "2vh" }}>
                  Description
                </h3>
                <p className="prodDesc">
                  Elevate your casual wardrobe with our CozyComfort Classic
                  Sweatshirt, the epitome of timeless style and unparalleled
                  comfort. Crafted for those who value both fashion and
                  functionality, this sweatshirt is your go-to for any season.
                </p>

                <div className="prodBuyContainer" >
                  <buttton className="Signup buy">
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