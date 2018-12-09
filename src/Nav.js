import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkStyle = {
  fontWeight: 'bold',
  color: 'white',
  fontFamily: 'Aria'
};

class Nav extends React.Component {

  render() {
    return (
      <div className='container-fluid' id='Home'>
        <nav className='navbar navbar-expand-lg'>
          <NavLink to='/' className='navbar-brand'>
            <span id='navSpan'>Dtuition</span>
          </NavLink>
          <button className='navbar-toggler' type='button'
            data-toggle='collapse' data-target='#navbarNav'
            //data-toggle collapse can fold menu
            aria-controls='navbarNav' aria-expanded='false'
            aria-label='Toggle Navigation'>
            <FontAwesomeIcon icon="align-center" />
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item mr-4'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link'>
                  <FontAwesomeIcon color='white' size='lg' icon={['fab', 'facebook-f']} />
                </NavLink>
              </li>
              <li className='nav-item mr-4'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link'>
                  <FontAwesomeIcon color='white' size='lg' icon={['fab', 'twitter']} />
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link'>
                  <FontAwesomeIcon color='white' size='lg' icon={['fab', 'instagram']} />
                </NavLink>
              </li>
            </ul>
            <ul className='navbar-nav' id='navbar-nav'>
              <li className='nav-item active mr-4'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link' id='home'>Home</NavLink>
              </li>
              <li className='nav-item mr-4'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link' id='home'>Features</NavLink>
              </li>
              <li className='nav-item mr-4'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link' id='home'>Pricing</NavLink>
              </li>
              <li className='nav-item mr-4'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link' id='home'>Services</NavLink>
              </li>
              <li className='nav-item mr-4'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link' id='home'>About Us</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeStyle={LinkStyle} to='/' className='nav-link' id='home'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
