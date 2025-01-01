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
      <section className="main mt-10">
        <div className="Product">
          <section className="ProductContainer">
            <div className="productImageContainer">
              <img src={BookImage} className="mainImage" />
            </div>
          </section>
          <div className="ProductDetails">
            <div>
              <h5 className="font-poppins text-5xl mt-5">{BookTitle}</h5>
              <h5 className="font-poppins mt-2">Author : {Author}</h5>
              <h3 className="mt-10  text-2xl">₹{Price}</h3>

              <p className="prodDesc"></p>
              <div className="prodBuyContainer">
                <buttton
                  className="Signup buy bg-blue-900 text-white text-xl font-semibold px-6 py-3 rounded-md"
                  onClick={() =>
                    navigate("/checkout", {
                      state: { BookTitle, Author, Price, BookImage },
                    })
                  }
                >
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
