import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Card1 = ({ element }) => {
  return (
    <div className="card1">
      {(element.offer.name !== "0% OFF" ) && (
        <div className='offer'>{element.offer.name}</div>
      )}
      <img src={element.image.src} alt={element.paragraphone.text} />
      <div className='adjust'>
        <span className='width1' style={{ marginRight: '0.3rem' }}>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: '0.23rem' }} />
          10 MINS
        </span>
        <span className='width1' style={{ color: '#999' }}>
          {element.offer.ad}
        </span>
        <p>{element.paragraphone.text}</p>
        <p style={{ color: '#929292', fontWeight: 'normal', marginTop: '-0.45rem' }}>
          {element.paragraphtwo.text}
        </p>
        <div className='op d-flex justify-content-between align-items-center'>
          <p className='m-0' style={{ fontSize: '0.75rem', fontWeight: 'bold', background: 'none' }}>
            {element.priceAndButton.price.text}
            {element.priceAndButton.price.discount && (
              <>
                <br />
                <del style={{ color: '#999' }}>{element.priceAndButton.price.discount}</del>
              </>
            )}
          </p>
          <button className='button'>
            {element.priceAndButton.button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
