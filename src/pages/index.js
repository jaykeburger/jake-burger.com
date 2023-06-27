
import React from 'react';
import logo from '../assets/vwavegif.gif'
import logo2 from '../assets/github.png'
  
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'Center',
        height: '100vh',
        background: '#041129',
        gap: '5%'
      }}
    >
      <div style={{ fontSize: 150, color:'white', fontFamily:'monospace' }}>
        Jake Burger
      </div>
      <img src={logo} style={{ width: "30%", height: "35%" }} alt="loading..."/>
      <div>
        <a href="https://github.com/jaykeburger"><img src={logo2} style={{ width: "65%", height: "10%" }} alt="loading..."/></a>
        <a href="https://www.codecoogs.com/"><img src="logo.png"/></a>
        <a href="https://www.linkedin.com/in/jake-d-burger/"><img src="logo.png"/></a>
      </div>
    </div>
  );
};
  
export default Home;