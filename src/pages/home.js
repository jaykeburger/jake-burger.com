
import React from 'react';
import HomePageLogo from '../components/HomePageLogo';
import HomePageTitle from '../components/HomePageTitle';
import SocialMediaBar from '../components/SocialMediaBar';
  
const Home = () => {
  return (
    <div style={{background: '#041129', height:'100vh'}}>
      <HomePageTitle/>
      <SocialMediaBar/>
      <HomePageLogo/>
    </div>
    
  );
};
  
export default Home;