import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import './App.css';
const Footer = () => {
    return (
        <div className='container-fluid back'>
      <div className='container p-4'>
        <div className='row'>
            <div className='col-md-2 col-sm-12'>
               <p style={{fontWeight:'bold'}}>All Categories</p>
               <p>Grocery</p>
               <p>Electronics</p>
               <p>Fashion</p>
               <p>Home & Lifestyle</p>
               <p>Premium Fruits</p>
               <p>Books</p>
               <p>Furniture</p>
            </div>
            <div className='col-md-2 col-sm-12'>
               <p style={{fontWeight:'bold'}}>Popular Categories</p>
               <p>Biscuits, Drinks & Packaged Foods</p>
               <p>Fruits & Vegetables</p>
               <p>Cooking Essentials</p>
               <p>Dairy & Bakery</p>
               <p>Personal Care</p>
               <p>Beauty</p>
               <p>Home Care</p>
               <p>Mom & Baby Care</p>
               <p>School, Office & Stationery</p>
            </div>
            <div className='col-md-2 col-sm-12'>
            <p style={{fontWeight:'bold'}}>Customer Account</p>
               <p>My Account</p>
               <p>My Orders</p>
               <p>Wishlist</p>
               <p>Delivery Addresses</p>
               <p>JioMart Wallet</p>
            </div>
            <div className='col-md-2 col-sm-12'>
            <p style={{fontWeight:'bold'}}>Help & Support</p>
               <p>About Us</p>
               <p>FAQ</p>
               <p>Terms & Conditions</p>
               <p>Privacy Policy</p>
               <p>E-waste Policy</p>
               <p>Cancellation & Return Policy</p>
               <p>Shipping & Delivery Policy</p>
               <p>AC Instation by resQ</p>
            </div>
            <div class="col-md-4 col-sm-12 contact-section">
    <h2 className='font'>Contact Us</h2>
    <p>WhatsApp us:70003 70003</p>
    <p>Call us:1800 890 1222</p>
    <p>8:00 AM to 8:00 PM, 365 days</p>
    <p>
        Should you encounter any bugs, glitches, lack of functionality, delayed
        deliveries, billing errors or other problems on the website.
    </p>
    <h3 className='font'>Download the app</h3>
    <div class="app-buttons">
        <Link to="#"><img src="images/google-play-icon.svg" alt="Google Play" /></Link>
        <Link to="#"><img src="images/ios_app_icon.svg" alt="App Store" /></Link>
    </div>
</div>

        </div>
      </div>
      <hr/>
      </div>
      
    );
  };
  
  export default Footer;
  