import React, { useEffect, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './cardbanner.css';
import img from "../../assets/banner.png";
import img1 from "../../assets/banner.jpg"

const CardBanner = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (carouselRef.current) {
        if (event.key === 'ArrowLeft') {
          carouselRef.current.onClickPrev();
        } else if (event.key === 'ArrowRight') {
          carouselRef.current.onClickNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bannerContainer">
      <Carousel ref={carouselRef}>
        <div>
          <img src={img} alt="Banner 1" className="bannerImage" />
          
        </div>
        <div>
          <img src={img1} alt="Banner 2" className="bannerImage" />
        </div>
        <div>
          <img src={img} alt="Banner 3" className="bannerImage" />
        </div>
      </Carousel>
    </div>
  );
}

export default CardBanner;
