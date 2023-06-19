import React from 'react';
import {  Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavLayout';

const Navbar= () =>{
  return (
    <>
      <Nav>
        <Bars/>
        <NavMenu>
          <NavLink to="/" activeStyle>Home</NavLink>
          <NavLink to="/about" activeStyle>About</NavLink>
          <NavLink to="/gallery" activeStyle>Gallery</NavLink>
          <NavLink to="/blog" activeStyle>Blog</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
export default Navbar;