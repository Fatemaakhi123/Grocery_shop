import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import data from './elements.json';
import Card from './card'; 

const Store = () => {
  const [activeItem, setActiveItem] = useState(0);
  const ataitems = data.ataitems; 

  return (
    <>
      <div className='container-fluid' style={{ overflow: 'hidden' }}> 
        <div className='container'>
          <div 
            className='row m-0' 
            style={{ 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
              borderRadius: '8px', 
              backgroundColor: '#fff',
              marginTop: '0.5rem', 
              overflow: 'hidden'
            }}
          >
            <div className='col-md-3 p-0'>
              <div 
                style={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',  
                }}
              >
                <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
                  {Array.isArray(ataitems) && ataitems.length > 0 ? (
                    ataitems.map((item, index) => (
                      <li 
                        className='border-column' 
                        key={item.name}
                        onClick={() => setActiveItem(index)} 
                        style={{
                          cursor: 'pointer',
                          position: 'relative',
                          padding: '10px',
                          backgroundColor: activeItem === index ? '#ddfcd1' : 'transparent',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {activeItem === index && (
                            <div 
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '1.5%', 
                                height: '100%',
                                backgroundColor: '#388e3c', 
                              }} 
                            />
                          )}
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className={`item-image ${activeItem === index ? 'active' : ''}`} 
                          />
                          <Link to="#" className="link-style" style={{ color: activeItem === index ? '#000' : '#000' }}>
                            {item.name}
                          </Link>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>No items available</li>
                  )}
                </ul>
              </div>
            </div>
            <div className='col-md-9 pt-3'>
              <div className='row p-0 m-0'>
                <div className='col-md-6'>
                  <p style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>Buy Atta Online</p>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  <p style={{ fontSize: '0.9rem', color: '#888', marginRight: '0.4rem' }}>Sort by</p>
                  <div className="sort-dropdown" >
                    <select style={{ padding: '0rem 3rem', display: 'flex', justifyContent: 'space-between', color: '#6bc249 ' }}>
                      <option value="relevance" selected>Relevance</option>
                      <option value="date">Date</option>
                      <option value="popularity">Popularity</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: '#e6edf9', height: '100vh', overflow: 'hidden' }}>
               
              <div 
  className="slider-tra" 
  style={{ 
    width: '100%', 
    height: 'auto',
    overflowX: 'scroll',   
    overflowY: 'hidden', 
    display: 'flex',
    padding: '10px 0',
    boxSizing: 'border-box', 
  }}
>
  {data.elementnew.map((element, index) => (
    <div 
      className="slider-card1" 
      key={index} 
      style={{ 
        margin: '5px', 
        flex: '0 0 auto', 
        width: '170px', 
      }}
    >
      <Card element={element} />
    </div>
  ))}
</div>

                <div style={{ maxHeight: '70vh', overflowY: 'auto', position: 'relative', padding: '20px', marginTop: '10px' }}>
                  <h2>Other Content</h2>
                  <p>This is some content that can be scrolled after scrolling through the cards.</p>
                </div>

              </div>
            </div>
            <div className='row p-4 m' style={{ border: '1px solid #ddd', fontFamily: 'Arial' }}>
              <div className='col-md-6'>
                <p style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>
                  Buy Atta at Online grocery store in India
                </p>
                <p style={{ fontSize: '0.8rem', color: '#888' }}>
                  Are you super fond of online shopping because you hate crowded supermarkets? Now you don't need to worry as Blinkit is delivering Atta at your doorstep superfast with easy returns for your complete peace of mind.<br />
                  Get Atta delivered to your home in minutes. You can check Atta price before buying.<br />
                  We deliver Atta at various cities across India. Buy from several popular brands like <span style={{ color: '#40bd0d' }}>Aashirvaad, Pillsbury, Fortune.</span>
                </p>
              </div>
              <div className='col-md-6'>
                <div style={{ width: '100%', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Atta Price List</h4>
                  <table style={{ width: '100%', fontSize: '0.75rem', color: '#888' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '0.7rem' }}>Atta</th>
                        <th style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '0.7rem' }}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.<span style={{ color: '#40bd0d' }}> Fortune Chakki Fresh (100% Atta, 0% Maida) Atta</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.240</td>
                      </tr>
                      <tr>
                        <td>2.<span style={{ color: '#40bd0d' }}> Aashirvaad Whole Wheat Atta</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.320</td>
                      </tr>
                      <tr>
                        <td>3.<span style={{ color: '#40bd0d' }}> Pillsbury Chakki Fresh Atta</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.380</td>
                      </tr>
                      <tr>
                        <td>4.<span style={{ color: '#40bd0d' }}> Ashirvad Atta (Whole Wheat)</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.210</td>
                      </tr>
                      <tr>
                        <td>5.<span style={{ color: '#40bd0d' }}> Patanjali Whole Wheat Atta</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.300</td>
                      </tr>
                      <tr>
                        <td>6.<span style={{ color: '#40bd0d' }}> Dadaji's 100% Pure Whole Wheat Atta</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.280</td>
                      </tr>
                      <tr>
                        <td>7.<span style={{ color: '#40bd0d' }}> Duda Atta (Whole Wheat)</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.290</td>
                      </tr>
                      <tr>
                        <td>8.<span style={{ color: '#40bd0d' }}> MD Atta (Whole Wheat)</span></td>
                        <td style={{ textAlign: 'right' }}>Rs.350</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
