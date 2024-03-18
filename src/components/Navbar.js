import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link }  from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);    
    const [button,setButton]=useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth<=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                 BITS Tech Fest 2024  
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home Page
                 </Link>
                </li>
                <li className='nav-item'>
                 <Link to='/technofest' className='nav-links' onClick={closeMobileMenu}>
                  Technofest for Schools
                 </Link>
                </li>
                <li className='nav-item'>
                 <Link to='/enginuity' className='nav-links' onClick={closeMobileMenu}>
                  Enginuity for Universities
                 </Link>
                </li>
                 <li className='nav-item'>
                  <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                   Events
                  </Link>
                </li>
             </ul>
             {button && <Button buttonStyle='btn--outline'>Register <i class="fa fa-user-plus" aria-hidden="true"></i></Button>} 
            </div>
          </nav>
        </>
    )
}

export default Navbar