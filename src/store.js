import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import data from './elements.json';
import Card1 from './card1';

const Store = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const ataitems = data.ataitems; 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    setIsDropdownOpen(false); 
  };

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
            <div className='col-lg-3 col-md-3 p-0'>
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
            <div className='col-lg-9 col-md-9 pt-1'>
              <div className='row p-0 m-0'>
                <div className='col-md-6'>
                  <p style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>Buy Atta Online</p>
                </div>
                <div className='col-md-6 d-flex justify-content-end align-items-center'>
                  <p style={{ fontSize: '0.9rem', color: '#888', marginRight: '0.4rem' }}>Sort by</p>
                
                  <div className="sort-dropdown position-relative">
                    <button 
                      className="btn btn-light dropdown-toggle" 
                      onClick={toggleDropdown} 
                      style={{ 
                        padding: '0rem 1.5rem', 
                        marginTop:'-1rem',
                        display: 'flex', 
                        justifyContent: 'left', 
                        color: '#6bc249',
                        border: '1px solid #6bc249',
                        borderRadius: '5px',
                        backgroundColor: '#fff', 
                      }}
                    >
                      {selectedSort} <i className="bi bi-chevron-down ms-2"></i>
                    </button>
                    {isDropdownOpen && (
                      <ul 
                        className="dropdown-menu show" 
                        style={{ 
                          padding: '0.5rem', 
                          width: '200px',
                          position: 'absolute', 
                          top: '100%',
                           
                          right: 0, 
                          zIndex: 1, 
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          backgroundColor: '#fff', 
                        }}
                      >
                        {["Relevance", "Price (Low to High)", "Price (High to Low)", "Discount (High to Low)", "Name (A to Z)"].map((option) => (
                          <li key={option} style={{ marginBottom: '5px' }}>
                            <button 
                              className="dropdown-item d-flex align-items-center" 
                              onClick={() => handleSortChange(option)}
                              style={{ 
                                color: option === selectedSort ? '#6bc249' : '#000',
                                backgroundColor: 'transparent', 
                                border: 'none',
                                width: '100%',
                                textAlign: 'left',
                                padding: '0.25rem 1rem',
                              }}
                            >
                              {option}
                              {option === selectedSort && (
                                <i className="bi bi-check-circle-fill ms-auto" style={{ color: '#6bc249' }}></i>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div 
                style={{ 
                  backgroundColor: '#e6edf9', 
                  height: '100vh', 
                  overflow: 'hidden' 
                }}
              >
                <div 
                  className="slider-tra" 
                  style={{ 
                    width: '100%', 
                    height: 'calc(100vh - 10px)',
                    overflowX: 'scroll', 
                    overflowY: 'auto', 
                    display: 'flex',
                    padding: '5px 0',
                    boxSizing: 'border-box', 
                  }}
                >
                  {data.elementnew.map((element, index) => (
                    <div 
                      className="slider-card1" 
                      key={index} 
                      style={{ 
                        margin: '0 2px',
                        width: '20%', 
                        flex: '0 0 18.5%', 
                        boxSizing: 'border-box', 
                      }}
                    >
                      <Card1 element={element} />
                    </div>
                  ))}
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
