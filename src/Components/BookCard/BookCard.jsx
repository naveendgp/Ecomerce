import { Link } from "react-router-dom";

const BookCard = ({ BookImage, BookTitle, Author, Price }) => {
  const bookData = { BookTitle, Author, Price, BookImage };

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
            <Link to='/productpage'>
              <button className=" bg-blue-900 text-white px-6 py-3  rounded-md">
                BuyNow
              </button>
            </Link>

        </div>
      </div>
    </section>
  );
};

export default BookCard;
