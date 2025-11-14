import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements.jsx';
import logo from '../images/logo.png';

/**
 * 
 * @returns a navigation bar that direct the user to target page
 */
const Navbar = () => {
  return (
    <>
      <Nav>

        <NavLink to='/'>
          <img src={logo} alt={logo} className="logo" />
          <h1 className="logo-title">BOOKLAND</h1>
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink
            to="/mybooks"
            style={({ isActive }) => (isActive ? { color: '#007bff' } : undefined)}
          >
            My Books
          </NavLink>
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;