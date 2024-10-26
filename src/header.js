import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const SearchInput = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = [
    'Search "butter"',
    'Search "eggs"',
    'Search "bread"',
    'Search "milk"',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <span className="input-group-text w-100" style={{ backgroundColor: "#f2f3f1", border: "0.11rem solid #eaeaea", borderRadius: "0.8rem" }}>
      <i className="bi bi-search"></i>
      <input
        className="form-control me-2 color w-100"
        placeholder={placeholders[placeholderIndex]}
        aria-label="Search"
        style={{
          backgroundColor: "#f2f3f1",
          border: "none",
          transition: "none",
          boxShadow: "none"
        }}
      />
    </span>
  );
};

const Header = () => {
  return (
    <div className='container-fluid background'>
      <div className='row border pos'>
        <div className='col-md-1 col-sm-12 border-right d-flex justify-content-center align-items-center p-2'>
          <img src='./images/logo.svg' alt='Logo' />
        </div>
        <div className='col-md-2 col-sm-12 location p-2'>
          <b>Delivery in 8 minutes</b>
          <p>Select Location<i className="bi bi-caret-down-fill" style={{ marginLeft: "0.4rem" }}></i></p>
        </div>
        <div className='col-md-7 col-sm-12 d-flex justify-content-start align-items-start mt-4'>
          <SearchInput />
        </div>
        <div className='col-md-2 col-sm-12 d-flex justify-content-around align-items-center p-4'>
          <button type='button' style={{ border: "none", background: "none", fontSize: "1.2rem" }}>Login</button>
          <button
            type="button"
            style={{
              border: "none",
              borderRadius: "0.6rem",
              background: "green",
              fontSize: "1rem",
              padding: "0.75rem",
              color: "white",
              fontFamily: "Helvetica",
            }}
          >
            <i
              className="bi bi-cart"
              style={{
                fontFamily: "Okra",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            ></i>
            My cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
