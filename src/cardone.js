import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Cardone = ({ element }) => {
  return (
    <div className="card">
      <img src={element.image.src} alt={element.paragraphone.text} />
      <div className='adjust'>
        <span className='width1'>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: '0.23rem' }} />
          10 MINS
        </span>
        <p>{element.paragraphone.text}</p>
        <p style={{ color: '#929292', fontWeight: 'normal', marginTop: '-0.45rem' }}>
          {element.paragraphtwo.text}
        </p>
        <div className='op d-flex justify-content-between align-items-center'>
          <p className='m-0' style={{ fontSize: '0.75rem', fontWeight: 'bold', background: 'none' }}>
            {element.priceAndButton.price.text}
          </p>
          <button className='button'>
            {element.priceAndButton.button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardone;
