
import React from 'react';
import vwavegif from '../assets/vwavegif.gif'
import SocialMediaBar from '../components/SocialMediaBar';
import HomePageLogo from '../components/HomePageLogo';
  
const Home = () => {
  return (
    <div style={{background: '#041129'}}>
      <HomePageLogo/>
      <SocialMediaBar/>
    </div>
    
  );
};
  
export default Home;