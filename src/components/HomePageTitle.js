import React from 'react';
  
const HomePageTitle = () => {
  return (
    <div style={{        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'Center',
        gap: '5%',}}>
        <div style={{ fontSize: 150, color:'white', fontFamily:'monospace' }}>
        Jake Burger
      </div>
    </div>
  );
};
  
export default HomePageTitle;