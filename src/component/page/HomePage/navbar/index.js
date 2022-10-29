import React,{ useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';
import Logo from '../images/logo.png';
import CloseButton from '../images/close.svg';
import Menu from '../images/fi_menu.png'

const Navbar = () => {

  const location = useLocation();
  const tampil = location.pathname === '/' ? true : false

  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  }
  const closeSidebar = () => {
    setActive(false);
  }
  return (
    <header className="header">
   <div className="container">
      <div className="row">
        <div className="logo">
          <a href={'/'} >
            <img src={Logo} alt="logo saya" />
          </a>
        </div>


      {
        tampil ? (
    <>
      <div className={`overlay-bg ${active ? 'menu-active' : ''}`} />
        <div className={`sidebar ${active ? 'menu-active' : ''}`}>
          <div className="top-sidebar">
            <h3>BCR</h3>
            <div className="close-icon">
              <img src={CloseButton} alt="" onClick={closeSidebar}/>
            </div>
          </div>
          <ul className="menu">
            <li>
              <a href="#our-services">Our Services</a>
            </li>
            <li>
              <a href="#why">Why Us</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="burger-icon" onClick={openSidebar}>
          <img src={Menu} alt="" />
        </div>
      </>

        ) : null
      }

        



      </div>
    </div>
  </header>
)
}


export default Navbar