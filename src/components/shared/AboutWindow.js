import React from 'react';
import '../../styles/windowstyles/aboutwindow.css';
import Typewriter from "typewriter-effect";

const AboutWindow = () => {
  return (
    <div className='flex-container'>
        <div class="window-container">
            <div class="window-header">
                <div class="close-tab">X</div>
                <div class="close-tab2">-</div>
            </div>
            <div class="window-body">
                <h1 className='about-title'>
                    <img src={require('../../assets/spinningfries.gif')}/>
                    <i>About Me</i>
                    <img style={{transform:'scaleX(-1)'}} src={require('../../assets/burger.gif')}/>
                </h1>
                <p><i><b>Software Engineering @ Boeing</b></i></p>
                <p><i><b>BS, Computer Science @ University of Houston</b></i></p>
                <p><i><b>Minor, Mathematics @ University of Houston</b></i></p>
                <br></br>
                <p>I am Jake Burger, a student studying to be the best programmer I can be.</p>
                <br></br>
                <p><i><b>Code Coogs</b></i></p>
                <p>I spent much of my time in college developing a student org.</p>
                <br></br>
                <p><i><b>Hobbies</b></i></p>
                <p>Outside of school and work, I am an avid enjoyer of video games, hiking, and traveling.</p>
            </div>
        </div>
    </div>
  );
};
  
export default AboutWindow;