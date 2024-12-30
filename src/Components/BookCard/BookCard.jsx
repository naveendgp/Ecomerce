import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
const BookCard = ({ BookImage, BookTitle, Author, Price }) => {
  return (
    <>
      <section className="border border-gray rounded-md h-[55vh] bg-white ">
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
            <Link to='/productpage' state={{ title: BookTitle, author: Author, price: Price, image: BookImage }}>
              <button className=" bg-blue-900 text-white px-6 py-3  rounded-md">
                BuyNow
              </button>
            </Link>

            <button className="flex justify-center rounded-md border h-full border-blue-900 w-12  py-3 ml-5 items-center">
              {" "}
              <img className="w-5" src={cart} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCard;
