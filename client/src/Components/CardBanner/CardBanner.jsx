import React, { useState, useEffect } from "react";
import BookBanner1 from "../../assets/BookBanner1.jpg";
import BookBanner2 from "../../assets/BookBanner2.jpg";
import BookBanner3 from "../../assets/BookBanner3.jpg";

const CardBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: BookBanner1, title: "Slide 1" },
    { url: BookBanner2, title: "Slide 2" },
    { url: BookBanner3, title: "Slide 3" },
  ];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full mt-10 max-w-4xl mx-auto rounded-lg h-[40vh]">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-[40vh] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full">
        <button
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
          }
          className="p-2  rounded-full shadow-lg ml-5 focus:outline-none"
        >
          &#9664;
        </button>
        <button
          onClick={() =>
            setCurrentSlide(
              currentSlide === slides.length - 1 ? 0 : currentSlide + 1
            )
          }
          className="p-2 rounded-full shadow-lg mr-5 focus:outline-none"
        >
          &#9654;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-2 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardBanner;
