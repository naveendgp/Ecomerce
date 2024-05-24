import React, { useEffect, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './cardbanner.css';
import img from "../../assets/banner.png";

const CardBanner = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (carouselRef.current) {
        if (event.key === 'ArrowLeft') {
          carouselRef.current.onClickNext();
        } else if (event.key === 'ArrowRight') {
          carouselRef.current.onClickPrev();
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
          <p className="legend">slide 1</p>
        </div>
        <div>
          <img src={img} alt="Banner 2" className="bannerImage" />
          <p className="legend">slide 2</p>
        </div>
        <div>
          <img src={img} alt="Banner 3" className="bannerImage" />
          <p className="legend">slide 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CardBanner;
