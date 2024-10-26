import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import './App.css';

const Banner = () => {
  return (
    <div className='container-fluid'>
      <div className='container top'>
        <img src='./images/banner.jpg' alt='Banner' />
        <div className="row d-flex justify-content-start align-items-center p-3">
          <div className='width col-sm-12'>
            <img src='./images/banner_4.jpg' alt='Banner 4' />
          </div>
          <div className='width col-sm-12'>
            <img src='./images/banner_3.jpg' alt='Banner 3' />
          </div>
          <div className='width col-sm-12'>
            <img src='./images/banner_2.jpg' alt='Banner 2' />
          </div>
        </div>

        <div className="row serial">
          
          <Link to="#"><img src='./images/paan-corner_web.jpg' alt='Paan Corner' /></Link>
          <Link to="#"><img src='./images/Slice-2_10.png' alt='Slice 2' /></Link>
          <Link to="#"><img src='./images/Slice-3_9.png' alt='Slice 3' /></Link>
          <Link to="#"><img src='./images/Slice-4_9.png' alt='Slice 4' /></Link>
          <Link to="#"><img src='./images/Slice-5_4.png' alt='Slice 5' /></Link>
          <Link to="#"><img src='./images/Slice-6_5.png' alt='Slice 6' /></Link>
          <Link to="#"><img src='./images/Slice-7_3.png' alt='Slice 7' /></Link>
          <Link to="#"><img src='./images/Slice-8_4.png' alt='Slice 8' /></Link>
          <Link to="#"><img src='./images/Slice-9_3.png' alt='Slice 9' /></Link>
          <Link to="/ata"><img src='./images/Slice-10.png' alt='Slice 10' /></Link>
          <Link to="#"><img src='./images/Slice-11.png' alt='Slice 11' /></Link>
          <Link to="#"><img src='./images/Slice-12.png' alt='Slice 12' /></Link>
          <Link to="#"><img src='./images/Slice-13.png' alt='Slice 13' /></Link>
          <Link to="#"><img src='./images/Slice-14.png' alt='Slice 14' /></Link>
          <Link to="#"><img src='./images/Slice-15.png' alt='Slice 15' /></Link>
          <Link to="#"><img src='./images/Slice-16.png' alt='Slice 16' /></Link>
          <Link to="#"><img src='./images/Slice-17.png' alt='Slice 17' /></Link>
          <Link to="#"><img src='./images/Slice-18.png' alt='Slice 18' /></Link>
          <Link to="#"><img src='./images/Slice-19.png' alt='Slice 19' /></Link>
          <Link to="#"><img src='./images/Slice-20.png' alt='Slice 20' /></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
