import React, { useEffect, useState } from 'react';
import Topnav from '../Components/TopNavigation/Topnav';
import CardBanner from '../Components/CardBanner/CardBanner';
import ProductCard from '../Components/ProductsCard/ProductCard';

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
          <div className="prodGrid">
            {books.map((book, index) => (
              <ProductCard
                key={index}
                title={book.title}
                author={book.authors?.[0]?.name || 'Unknown Author'}
                price ={book.edition_count}
                book = {book}
                coverImage={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
