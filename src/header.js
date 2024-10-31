import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const SearchInput = () => {
  const placeholders = [
    'Search "butter"',
    'Search "eggs"',
    'Search "bread"',
    'Search "milk"',
    'Search "Rice"',
    'Search "Atta"',
    'Search "Dairy"',
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0]);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fade-out');
      setTimeout(() => {
        const nextIndex = (placeholders.indexOf(currentPlaceholder) + 1) % placeholders.length;
        setCurrentPlaceholder(placeholders[nextIndex]);
        setAnimationClass('fade-in');
      }, 500);
    }, 1200);

    return () => clearInterval(interval);
  }, [currentPlaceholder, placeholders]);

  return (
    <span className="input-group-text w-100" style={{ backgroundColor: "#f2f3f1", border: "0.11rem solid #eaeaea", borderRadius: "0.8rem" }}>
      <i className="bi bi-search"></i>
      <input
        className={`form-control me-2 color w-100 ${animationClass}`}
        placeholder={currentPlaceholder}
        aria-label="Search"
        style={{
          backgroundColor: "#f2f3f1",
          border: "none",
          transition: "none",
          boxShadow: "none",
        }}
      />
    </span>
  );
};

const Header = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLocationModal = () => setShowLocationModal(!showLocationModal);
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

  const closeModals = () => {
    setShowLocationModal(false);
    setShowLoginModal(false);
  };

  return (
    <div className='container-fluid background'>
      <div className='row border pos'>
        <div className='col-md-1 col-sm-12 border-right d-flex justify-content-center align-items-center p-2 logo'>
          <img src='./images/logo.svg' alt='Logo' />
        </div>
        <div className='col-md-2 col-sm-12 location p-2' onClick={toggleLocationModal} style={{ cursor: 'pointer' }}>
          <b>Delivery in 8 minutes</b>
          <p>Select Location<i className="bi bi-caret-down-fill" style={{ marginLeft: "0.4rem" }}></i></p>
        </div>
        <div className='col-md-7 col-sm-12 d-flex justify-content-start align-items-start mt-4'>
          <SearchInput />
        </div>
        <div className='col-md-2 col-sm-12 d-flex justify-content-around align-items-center p-4'>
          <button type='button' style={{ border: "none", background: "none", fontSize: "1.2rem" }} onClick={toggleLoginModal}>Login</button>
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

      {showLocationModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closeModals}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '6rem',
              left: '5rem',
              margin: '0',
              width: '50rem',
            }}
          >
            <div className="modal-content p-2" style={{ border: 'none', borderRadius: '0', height: '8rem', backgroundColor: 'rgba(243, 247, 254, 1)' }}>
              <div className="modal-body">
                <button
                  onClick={closeModals}
                  style={{
                    position: 'absolute',
                    top: '-7px',
                    right: '-5px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.3rem',
                    cursor: 'pointer'
                  }}
                >
<i className="bi bi-x"></i>
                  
                </button>
                <p style={{ fontSize: '0.95rem' }}>Change Location</p>
                <div className='row'>
                  <div className='col-md-4'>
                    <button className='button1'>Detect my location</button>
                  </div>
                  <div className='col-md-2 d-flex justify-content-center align-items-center'>
                    <div className="line"></div>
                    <div className='design'>OR</div>
                    <div className="line"></div>
                  </div>
                  <div className='col-md-6'>
                    <button className='button2'>Search delivery location</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{showLoginModal && (
  <div
    className="modal fade show"
    style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    onClick={closeModals}
  >
    <div
      className="modal-dialog"
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: '0',
        width: '30rem',
      }}
    >
      <div className="modal-content p-2" style={{ border: 'none', borderRadius: '1rem', height: '17rem', backgroundColor: 'rgba(260, 260, 260, 1)' }}>
              <div className="modal-body">
                <button
                  onClick={toggleLoginModal}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.3rem',
                    cursor: 'pointer'
                  }}
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
                <div className='mid'
                style={{
                  display: 'flex',
                  flexDirection:'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                >
                <img src='./images/logo.svg' alt='nothing'style={{
                  width:'6rem'
                  }}/>
                  <h4 style={{paddingTop:'.3rem'}}>India's last minute app</h4>
                  <p>Log In or Sign Up</p>
                  <button type='button' style={{backgroundColor:'white',fontWeight:'bold',borderRadius:'0.5rem',border:'0.1rem solid #999'}}>+91
                  <input
    style={{
      border:'none', 
      width:'12rem',
      padding:'0.4rem'
    }}
    placeholder='Enter Mobile Number'
  />
  </button>
  <button
    type='button'
    style={{
      borderRadius: '0.4rem',
      margin: '1.2rem 0rem',
      padding: '0.5rem 1rem', 
      width:'15.5rem',
      backgroundColor: '#888',
      color: 'white',
      border: 'none',
    }}
  >
    Continue
  </button><p style={{fontSize:'.8rem',color:'#888'}}>By continuing, you agree to our Terms of service & Privacy policy</p>
                  </div>
              </div>
            </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Header;
