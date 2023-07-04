
import React from 'react';
import HomePageLogo from '../components/HomePageLogo';
import HomePageTitle from '../components/HomePageTitle';
import SocialMediaBar from '../components/SocialMediaBar';
import '../styles/home.css';
  
const Home = () => {
  return (
    <div class="home-style">
      <HomePageTitle/>
      <SocialMediaBar/>
      <HomePageLogo/>
    </div>
    
  );
};
  
export default Home;