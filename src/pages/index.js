
import React from 'react';
import vwavegif from '../assets/vwavegif.gif'
import HomePageLogo from '../components/HomePageLogo';
import HomePageTitle from '../components/HomePageTitle';
import SocialMediaBar from '../components/SocialMediaBar';
  
const Home = () => {
  return (
    <div style={{background: '#041129'}}>
      <HomePageTitle/>
      <SocialMediaBar/>
      <HomePageLogo/>
    </div>
    
  );
};
  
export default Home;