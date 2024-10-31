import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
const List = () => {
  return (
    <div className="container-fluid or">
      <div className="container">
        <ul className="organise">
          <li><Link to="#">Vegetables & Fruits</Link></li>
          <li><Link to="#">Dairy & Breakfast</Link></li>
          <li><Link to="#">Munchies</Link></li>
          <li><Link to="#">Cold Drinks & Juices</Link></li>
          <li><Link to="#">Instant & Frozen Food</Link></li>
          <li><Link to="#">Tea, Coffee & Health Drinks</Link></li>
          <li><Link to="#">Bakery & Biscuits</Link></li>

          <li className="dropdown" >
  <Link
    to="#"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    More <i className="bi bi-chevron-down"></i>
  </Link>
  <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu"> 
  <li><Link className="custom-dropdown-item" to="#">Spices & Masalas</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Spices & Masalas</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Spices & Masalas</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Spices & Masalas</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Spices & Masalas</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Spices & Masalas</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Spices & Masalas</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Personal Care</Link></li>
  <hr className="dropdown-divider"/>
  <li><Link className="custom-dropdown-item" to="#">Household Essentials</Link></li>
</ul>

</li>
        </ul>
      </div>
    </div>
  );
};

export default List;
