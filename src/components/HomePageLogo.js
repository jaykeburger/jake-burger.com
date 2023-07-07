import React from 'react';
import vwavegif from '../assets/vwavegif.gif'

  
const HomePageLogo = () => {
  return (
    <div style={{        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'Center',
        gap: '5%',
        position:'relative'}}>
      <img src={vwavegif} style={{ width: "30%", height: "35%" }} alt="loading..."/>
    </div>
  );
};
  
export default HomePageLogo;