import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #000000; //NAVBAR BACKGROUND COLOR
  height: 8vh; //NAVBAR HEIGHT
  width: 100vw;
  display: flex;
  justify-content: space-between;

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
    background: #303030;
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
  padding: 20% 25%;
  color: #000000; //BUTTON TEXT COLOR
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 30%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0;
  }
`;