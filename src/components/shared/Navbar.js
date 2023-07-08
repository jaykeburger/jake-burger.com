import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavLayout';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavBtn>
          <NavBtnLink to='/'>j4ke.dev</NavBtnLink>
        </NavBtn>
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
          <NavLink to='/gallery' activeStyle>
            Gallery
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;