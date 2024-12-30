import React, { useEffect, useState } from 'react';
import Topnav from '../Components/TopNavigation/Topnav';
import CardBanner from '../Components/CardBanner/CardBanner';
import ProductCard from '../Components/ProductsCard/ProductCard';
import BookCard from '../Components/BookCard/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  // Fetch book data from an API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://openlibrary.org/subjects/programming.json?limit=16'
        );
        const data = await response.json();
        setBooks(data.works || []); // Assuming data.works contains the books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Topnav />
      <section className="main">
        <div className="Home">
          <CardBanner />
          <div className="prodGrid mt-24">
            {books.map((book, index) => (
              <BookCard
                key={index}
                BookTitle={book.title}
                Author={book.authors?.[0]?.name || 'Unknown Author'}
                Price ={book.edition_count}
                BookImage={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
