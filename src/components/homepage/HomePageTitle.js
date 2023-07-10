import React from 'react';
import Typewriter from "typewriter-effect";
import '../../styles/home.css';


const HomePageTitle = () => {
  return (
    <div>
        <h1 className='title'><i>Jake Burger</i></h1>
        <h1 className='subtitle'><i>
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 150
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString("software developer")
                .pause(20000)
                .deleteAll()
                .typeString("adventurer")
                .pause(20000)
                .deleteAll()
                .typeString("university student")
                .pause(20000)
                .deleteAll()
                .typeString("leader")
                .pause(20000)
                .deleteAll()
                .typeString("designer")
                .pause(20000)
                .deleteAll()
                .start();
            }}
            />
        </i></h1>
    </div>
  );
};
  
export default HomePageTitle;