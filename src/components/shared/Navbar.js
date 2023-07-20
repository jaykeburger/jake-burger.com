import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/navbarstyle.css'

function BasicExample() {
  return (
    <Navbar expand="lg" style={{backgroundColor:'black', position:'sticky', top:'0'}}>
      <Container style={{color:'white', marginLeft:'0px'}}>
        <Navbar.Brand  style={{color:'white', marginLeft:'1vw'}} href="/">j4ke.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav bg-light">
          <Nav className='order-4' style={{color:'white', marginRight:'100px'}}>
            <Nav.Link style={{color:'white'}} href="/#">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/#about">About</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/#resume">Resume</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/gallery">Gallery</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/blogs">Blogs</Nav.Link>
            <Nav.Link style={{color:'white'}} href="/testtitle">TestTitle</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;