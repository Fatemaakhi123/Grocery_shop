import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <>
    <div className='container-fluid or'>
      <div className='container'>
        <ul className='organise'>
          <li><Link to="#">Vegetables & Fruits</Link></li>
          <li><Link to="#">Dairy & Breakfast</Link></li>
          <li><Link to="#">Munchies</Link></li>
          <li><Link to="#">Cold Drinks & Juices</Link></li>
          <li><Link to="#">Instant & Frozen Food</Link></li>
          <li><Link to="#">Tea, Coffee & Health Drinks</Link></li>
          <li><Link to="#">Bakery & Biscuits</Link></li>
          <li><Link to="#">More <i className="bi bi-chevron-down"></i></Link></li>
        </ul>
      </div>
      </div>
      
    </>
  );
};

export default List;
