import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #004a61; //NAVBAR BACKGROUND COLOR
  height: 4rem; //NAVBAR HEIGHT
  display: flex;
  justify-content: space-between;
 // padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #ffffff; //COLOR OF EACH NAVBAR MODULE
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #afffff; //COLOR OF MODULE WHEN SELECTED
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #afff00;
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: right;
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ffff; //BUTTON BACKGROUND COLOR
  padding: 10px 22px;
  color: #F00000; //BUTTON TEXT COLOR
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0;
  }
`;