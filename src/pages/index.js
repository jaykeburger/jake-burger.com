
import React from 'react';
import logo from '../assets/vwavegif.gif'
  
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh',
        background: '#041129',
        gap: '5%'
      }}
    >
      <div style={{ fontSize: 150, color:'white' }}>
        Jake Burger
      </div>
      <img src={logo} style={{ width: "30%", height: "35%" }} alt="loading..."/>
    </div>
  );
};
  
export default Home;