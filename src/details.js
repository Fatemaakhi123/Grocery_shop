import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'; 

const ZoomImageComponent = () => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  return (
    <div className="container" style={{ maxWidth: '100%', height: '100vh' }}>
      <div className="row" style={{ alignItems: 'center', height: '100%', position: 'relative' }}>
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'start',
            padding: '6.1rem',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <img
            src="./images/dairy_product2.jpg"
            alt="nothing"
            style={{
              width: '100%',
              maxWidth: '20rem',
              height: 'auto',
              cursor: 'zoom-in',
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />  
        </div>
          
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
            padding: '8.2rem',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          
          {isZooming && (
            <div
              style={{
                width: '20rem',
                height: '20rem',
                position: 'absolute',
                zIndex: '5',
                backgroundImage: 'url(./images/dairy_product2.jpg)',
                backgroundSize: '300%',
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            ></div>
          )}

          <div>
            <p
              style={{
                fontSize: '.65rem',
                fontWeight: '400',
                letterSpacing: '.02rem',
                marginBottom: '0.1rem',
              }}
            >
              Home / Atta /
              <span
                style={{
                  fontSize: '.65rem',
                  fontWeight: '500',
                  letterSpacing: '.02rem',
                  color: '#bbb',
                  marginBottom: '0.1rem',
                }}
              >
                {' '}
                Aashirvaad 0% Maida, 100% M.P. Chakki Atta
              </span>
            </p>
            <h6 style={{ margin: '0', fontWeight: 'bold' }}>
              Aashirvaad 0% Maida, 100% M.P. Chakki <br/> Atta
            </h6>
            <span
              className="width1"
              style={{ marginRight: '0.3rem', marginTop: '0.5rem' }}
            >
              <FontAwesomeIcon icon={faClock} style={{ marginRight: '0.23rem' }} />
              8 MINS
            </span>
          </div>
          <h6
            style={{
              margin: '0',
              color: 'green',
              marginTop: '0.2rem',
            }}
          >
            View all by Aashirvaad{' '}
            <FontAwesomeIcon icon={faCaretRight} />
          </h6>
          <hr
            style={{
              width: '100%',
              height: '.08rem',
              backgroundColor: '#aaa',
              border: 'none',
              marginTop: '1rem',
            }}
          />
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 '>
              <p className='fontsize'>10kg</p>
              <div className='position'>
              <p className='fontsize' style={{fontWeight:'bolder'}}>₹573</p>
              <p className='fontsize'>MRP <del>₹590</del></p>
              </div>
              <p className='fontsize'>(Inclusive of all taxes)</p>
             
              </div>
            <div className='col-lg-6 col-md-6 col-sm-12' style={{display:'flex',justifyContent:'right',alignItems:'start'}}>
            <button className='button'>Add
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomImageComponent;
