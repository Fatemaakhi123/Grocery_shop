import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Card from './card';
import elementfive from './elements.json';

const Cold = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const cardWidth = 200; // Set card width for consistent calculation
  const gap = 10; // Gap between cards
  const totalElements = elementfive.elementfive.length;

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      const count = Math.floor(containerWidth / (cardWidth + gap)); // Consider gap in calculation
      setVisibleCount(count > 0 ? count : 1); // Ensure at least one card is visible
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, totalElements - visibleCount); // Prevents last card overflow

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <div className="slider">
        <div className="row d-flex">
          <div className="col-md-6 col-sm-12 p d-flex justify-content-start">
            <p>Cold Drinks & Juices</p>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-end">
            <p><a href="see.js">see all</a></p>
          </div>
        </div>
        <div 
          className="slider-track"
          style={{
            transform: `translateX(-${Math.min(currentIndex, maxIndex) * (cardWidth + gap)}px)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
            gap: `${gap}px`, // Adds consistent gap between cards
          }}
        >
          {elementfive.elementfive.map((element, index) => (
            <div className="slider-card" key={index} style={{ width: `${cardWidth}px` }}>
              <Card element={element} />
            </div>
          ))}
        </div>

        {currentIndex > 0 && (
          <button className="carousel-button prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        
        {currentIndex < maxIndex && (
          <button className="carousel-button next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Cold;
