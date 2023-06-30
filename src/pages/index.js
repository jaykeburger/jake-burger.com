
import React from 'react';
import vwavegif from '../assets/vwavegif.gif'
import githublogo from '../assets/github.png'
import linkedinlogo from '../assets/linkedin.png'
import cocologo from '../assets/coco.png'
  
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
      <img src={vwavegif} style={{ width: "30%", height: "35%" }} alt="loading..."/>
      <div class="row">
        <div class="col-xs-2">
          <a href="https://github.com/jaykeburger"><img src={githublogo} style={{ width: "5%", height: "5%" }} alt="loading..."/></a>
        </div>
        <div class="col-xs-2">
          <a href="https://www.codecoogs.com/"><img src={cocologo} style={{ width: "5%", height: "5%" }} alt="loading..."/></a>
        </div>
        <div class="col-xs-2">
          <a href="https://www.linkedin.com/in/jake-d-burger/"><img src={linkedinlogo} style={{ width: "5%", height: "5%" }} alt="loading..."/></a>
        </div>
      </div>
    </div>
  );
};
  
export default Home;