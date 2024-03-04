import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"></link>

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Save a life 
          </Link>
          <div className="logo">
              <FontAwesomeIcon icon={faDog} />
            </div>
          <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={faDog} />
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/adoptii-caini'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Adopții câini
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/adoptii-pisici'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Adopții pisici
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact us 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;