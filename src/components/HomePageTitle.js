import React from 'react';
import Typewriter from "typewriter-effect";


const HomePageTitle = () => {
  return (
    <div 
        style={{        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'Center',
        gap: '5%',}}>
        <h1 style={{color:'white', fontFamily:'inherit', fontSize:'70px'}}><i>
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 100
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString("Jake Burger:")
                .pause(20000)
                .deleteAll()
                .typeString("software developer")
                .pause(20000)
                .deleteAll()
                .typeString("adventurer")
                .pause(20000)
                .start();
            }}
/>
        </i></h1>
    </div>
  );
};
  
export default HomePageTitle;
/*
<Typewriter
onInit={(typewriter) => {
typewriter
.typeString("Welcome to")
.pause(20000)
.deleteAll()
.typeString("jake-burger.com")
.start();
}}
/>
*/