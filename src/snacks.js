import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Card from './card'; 
import elementtwo from './elements.json';

const Snacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const cardWidth = 200; // Set card width for consistent calculation
  const gap = 10; // Gap between cards
  const totalElements = elementtwo.elementone.length;

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth; 
      const count = Math.floor(containerWidth / (cardWidth + gap)); // Account for the gap when calculating visible cards
      setVisibleCount(count > 0 ? count : 1); // Ensure at least one card is visible
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = totalElements - visibleCount; // Prevents last card overflow

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
    <div className="container">
      <div className="slider">
        <div className="row d-flex">
          <div className="col-md-6 col-sm-12 p d-flex justify-content-start">
            <p>Snacks & Munchies</p>
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
          {elementtwo.elementone.map((element, index) => (
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

export default Snacks;
