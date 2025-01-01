import React, { useEffect, useState } from 'react';
import Topnav from '../Components/TopNavigation/Topnav';
import Navigation from '../Components/TopNavigation/Navigation';
import CardBanner from '../Components/CardBanner/CardBanner';
import BookCard from '../Components/BookCard/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  // Fetch book data from an API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        console.log('Fetched Books:', data); // Debugging log
        setBooks(data); // Assuming the response is a list of books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Navigation />
      <section className="main mt-20">
        <div className="Home">
          <CardBanner />

          <div className="prodGrid mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <BookCard
                key={book._id}
                BookTitle={book.title}
                Author={book.author}
                Price={book.price}
                BookImage={book.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
