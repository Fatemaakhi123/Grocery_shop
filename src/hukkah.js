import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import elementthree from './elements.json';
import Card from './card'

const Hukkah = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalElements = elementthree.elementthree.length; // Updated to elementthree
  const [visibleCount, setVisibleCount] = useState(1); 

  useEffect(() => {
    const handleResize = () => {
      const cardWidth = 200; 
      const containerWidth = window.innerWidth; 
      const count = Math.floor(containerWidth / cardWidth); 
      setVisibleCount(count);
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < totalElements - visibleCount) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className='container'>
      <div className='slider'>
        <div className='row d-flex'>
          <div className='col-md-6 col-sm-12 p d-flex justify-content-start'>
            <p>Hookah</p>
          </div>
          <div className='col-md-6 col-sm-12 d-flex justify-content-end'>
            <p><a href='see.js'>see all</a></p> 
          </div>
        </div>
        <div 
          className="slider-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            transition: 'transform 0.5s ease-in-out',
            width: `${totalElements * (100 / visibleCount)}%`,
          }}
        >
          {elementthree.elementthree.map((element, index) => ( // Updated to elementthree
            <div className="slider-card" key={index}>
              <Card element={element} />
            </div>
          ))}
        </div>
        
        {currentIndex > 0 && (
          <button className='carousel-button prev' onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        
        {currentIndex < totalElements - visibleCount && (
          <button className='carousel-button next' onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Hukkah;
