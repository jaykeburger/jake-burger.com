import React from 'react';
import '../../styles/home.css';
import Window from '../shared/Window';
import Typewriter from "typewriter-effect";


const HomePageTitle = () => {
  return (
    <div>
      <h1 style={{color:'white', fontSize:'700%'}}>
            <img src={require('../../assets/palmtree.png')}/>
            <i>Jake Burger</i>
            <img style={{transform:'scaleX(-1)'}} src={require('../../assets/palmtree.png')}/>
      </h1>
      <h1 style={{color:'white', fontSize:'2vw', textAlign:'center'}}>
      <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 150
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString("software developer")
                .pause(30000)
                .deleteAll()
                .typeString("adventurer")
                .pause(30000)
                .deleteAll()
                .typeString("university student")
                .pause(30000)
                .deleteAll()
                .typeString("leader")
                .pause(30000)
                .deleteAll()
                .typeString("designer")
                .pause(30000)
                .deleteAll()
                .start();
            }}
            />
      </h1>
    </div>
  );
};
  
export default HomePageTitle;