import React from 'react';
import '../../styles/windowstyles/resumewindow.css';
import pdf from '../../assets/resume.pdf'
import Typewriter from "typewriter-effect";

const ResumeWindow = () => {
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
                        <i>Resume</i>
                        <img style={{transform:'scaleX(-1)'}} src={require('../../assets/burger.gif')}/>
                    </h1>
                </div>
                <div style={{height:'50vh'}}>
                    <section class="accordion">
                        <input type="checkbox" name="collapse1" id="handle1"/>
                        <h2 class="handle">
                            <label for="handle1">Education</label>
                        </h2>
                        <div class="content">
                            <p>University of Houston - BS Computer Science - 2024</p>
                        </div>
                    </section>
                    <section class="accordion">
                        <input type="checkbox" name="collapse2" id="handle2"/>
                        <h2 class="handle">
                            <label for="handle2">Work Experience</label>
                        </h2>
                        <div class="content">
                            <ul>
                                <li><p>Boeing - Houston TX - May 2022 - Present</p></li>
                                <li><p>iCode - Houston TX - Nov 2021 - May 2022</p></li>
                            </ul>
                        </div>
                    </section>
                    <section class="accordion">
                        <input type="checkbox" name="collapse3" id="handle3"/>
                        <h2 class="handle">
                            <label for="handle3">Skills</label>
                        </h2>
                        <div class="content">
                            <ul>
                                <li><p>Languages: C++, C#, Java, HTML, CSS, JavaScript</p></li>
                                <li><p>Frameworks: ASP.NET, Blazor, React </p></li>
                                <li><p>Other: PhotoShop, Visual Studio, Raspberry Pi</p></li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <form action={pdf} target="_blank">
                            <input type="submit" value="Resume" />
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </div>
  );
};
  
export default ResumeWindow;