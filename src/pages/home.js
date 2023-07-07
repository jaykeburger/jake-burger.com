
import React from 'react';
import HomePageLogo from '../components/HomePageLogo';
import SocialMediaBar from '../components/SocialMediaBar';
import HomePageTitle from '../components/HomePageTitle';
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