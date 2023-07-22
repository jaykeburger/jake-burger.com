import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import HomePageTitle from './HomePageTitle';
import '../../styles/home.css'
import { Tooltip } from 'react-tooltip'

const Home = () => {
  return (
    <div>
      <div id='/' className='flex-container'>
        <div className='windows-title'>
        <HomePageTitle/>
        </div>
        <div className='social-media-bar'>
        <SocialMediaBar/>
        </div>
      </div>
    </div>
    
  );
};
  
export default Home;