import React from 'react'
import Topnav from '../Components/TopNavigation/Topnav'
import CardBanner from '../Components/CardBanner/CardBanner'
import ProductCard from '../Components/ProductsCard/ProductCard'

const Home = () => {
  return (
    <>
      <Topnav />
      <section className="main">

        <div className='Home'>
          <CardBanner />

          <div className="prodGrid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

        </div>

      </section>
    </>
  );
}

export default Home