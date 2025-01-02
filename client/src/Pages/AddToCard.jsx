import React, { useEffect, useState } from "react";
import Navigation from "../Components/TopNavigation/Navigation";
import { useNavigate } from "react-router-dom";
import CartItems from "../Components/CartItems/CartItems";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const name = localStorage.getItem("name");

        const response = await fetch(`http://localhost:5000/api/cart/${name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          setCart(data);
        } else {
          setError(data.message || "Failed to fetch cart items");
        }
      } catch (error) {
        setError("An error occurred while fetching the cart data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [navigate]);

  const updateTotalPrice = (title, newCount, newPrice) => {
    let updatedCart = [...cart];
    updatedCart = updatedCart.map((item) => 
      item.BookTitle === title ? { ...item, count: newCount, updatedPrice: newPrice } : item
    );
    setCart(updatedCart);

    const newTotal = updatedCart.reduce((total, item) => total + item.updatedPrice, 0);
    setTotal(newTotal);
  };

  const calculateTotal = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.Price * (item.count || 1);
    });
    const discount =  0;
    const delivery = 0.00;
    const total = subtotal + delivery;
    return { subtotal, discount, delivery, total };
  };

  const { subtotal, discount, delivery } = calculateTotal();

  if (loading) {
    return <p>Loading cart data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Handle checkout, passing cart items as state
  const handleCheckout = () => {
    const itemDetails = cart.map(item => ({
      BookTitle: item.BookTitle,
      Author: item.Author,
      Price: item.Price,
      BookImage: item.BookImage
    }));
  
    navigate("/checkout", { state: itemDetails });
  };

  localStorage.setItem("cart", JSON.stringify(cart));
  
  

  return (
    <>
      <Navigation />
      <section className="main mt-20">
        <div className="cartContainer">
          <div className="cartProducts">
            <h3 className="font-poppins text-3xl mt-10">Cart Items</h3>
            <div style={{ marginBottom: "5vh" }}>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <CartItems
                    key={index}
                    BookImage={item.BookImage}
                    BookTitle={item.BookTitle}
                    Author={item.Author}
                    Price={item.Price}
                    initialCount={item.count || 1}
                    onQuantityChange={updateTotalPrice}
                  />
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>

          <div className="cartTotal">
            <h4 className="promoTitle">Promo Code</h4>
            <div className="searchContainer p-5 flex items-center">
              <input placeholder="Type here..." />
              <button className="apply mb-1 border border-black">Apply</button>
            </div>
            <div className="priceContainer">
              <div className="part">
                <h3 className="price">SubTotal</h3>
                <h3 className="price">Discount</h3>
                <h3 className="price">Delivery</h3>
                <h3 className="price" style={{ color: "black" }}>
                  Total
                </h3>
              </div>
              <div className="part">
                <h3 className="price">${subtotal.toFixed(2)}</h3>
                <h3 className="price">-${discount.toFixed(2)}</h3>
                <h3 className="price">${delivery.toFixed(2)}</h3>
                <h3 className="price" style={{ color: "black" }}>
                  ${subtotal}
                </h3>
              </div>
            </div>
            <button onClick={handleCheckout} className="apply checkoutBtn">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
