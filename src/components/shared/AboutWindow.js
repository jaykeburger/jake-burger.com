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
                <div className='about-section'>
                    <h1 className='about-title'>
                    <img src={require('../../assets/spinningfries.gif')}/>
                    <i>About Me</i>
                    <img style={{transform:'scaleX(-1)'}} src={require('../../assets/burger.gif')}/>
                </h1>
                <p><i><b>Software Engineering @ Boeing 🚀</b></i></p>
                <p><i><b>BS, Computer Science @ University of Houston 💻</b></i></p>
                <p><i><b>Minor, Mathematics @ University of Houston 🧮</b></i></p>
                <br></br>
                <p><i><b>Who I am</b></i></p>
                <p>I am Jake Burger, a student and software engineer who is constantly looking for new ways to improve my skills. I enjoy activities that challenge me and promote both physical and mental growth.</p>
                <br></br>
                <p><i><b>Code Coogs</b></i></p>
                <p>I spent much of my time in college developing a computer science student organization known as Code Coogs. Here, I was given the opportunity to foster a community of coding enthusiasts. More info about Code Coogs can be found here: <a target='blank' href='https://www.codecoogs.com/'>Code Coogs Website</a></p>
                <br></br>
                <p><i><b>Hobbies</b></i></p>
                <p>Outside of school and work, I am an avid enjoyer of video games, hiking, and traveling. My favorite genre of video game is sandbox, and I enjoy recreating real world structures virtually. I also love exploring and am a huge enjoyer of traveling and the outdoors. More about my travels can be found here: <a target='blank' href='http://j4ke.dev/blogs'>Jake's Blogs</a></p>
                </div>
                <div className='image-section'>
                <img src={require('../../assets/photos/jakeburger.jpg')}/>
                </div>
            </div>
        </div>
    </div>
  );
};
  
export default AboutWindow;