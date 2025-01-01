import { Link } from "react-router-dom";
import Cart from "../../assets/cart.png";

const BookCard = ({ BookImage, BookTitle, Author, Price }) => {
  const bookData = { BookTitle, Author, Price, BookImage };

  const addToCart = async () => {
    if (!BookTitle || !Author || !Price || !BookImage) {
      alert('Please fill in all the required fields');
      return;
    }

    const name = localStorage.getItem('name');
    
    const cartItemData = {
      BookTitle,
      Author,
      Price,
      BookImage,
      name
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(cartItemData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Item added to cart successfully');
      } else {
        alert(data.message || 'Failed to add item to cart');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding to cart');
    }
  };
  

  return (
    <>
      <section className="border border-gray rounded-md h-[55vh] bg-gray-100 ">
        <div className="rounded-md p-4 flex-shrink-0">
          <img
            src={BookImage}
            alt="book"
            className="rounded-md w-full h-40 object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-2xl p-2 ml-2 truncate">{BookTitle}</h1>
          <p className="ml-4">{Author}</p>
          <p className="ml-4 mt-2">${Price}</p>
          <div className="flex mt-10 justify-center items-center mb-4">
            <Link
              to="/bookdetails"
              state={bookData} // Pass product data to the BookDetails page
            >
              <button className="bg-blue-900 text-white px-6 py-3 rounded-md">
                Buy Now
              </button>
            </Link>

            {/* Cart Button - Add to Cart functionality */}
            <button 
              onClick={addToCart} 
              className="p-2 ml-5 rounded-md border border-gray-500"
            >
              <img src={Cart} alt="Add to Cart" className="w-8 p-1 border border-gray-100" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCard;
