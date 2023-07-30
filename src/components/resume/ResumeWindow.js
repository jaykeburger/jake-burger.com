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
                <div style={{width:'300vh'}}>
                    <section class="accordion">
                        <input type="checkbox" name="collapse1" id="handle1"/>
                        <h2 class="handle">
                            <label for="handle1">Education</label>
                        </h2>
                        <div class="content">
                            <div className='education'>
                            <p><i><b>BS, Computer Science @ University of Houston 💻</b></i></p>
                            <p><i>Minor, Mathematics @ University of Houston 🧮</i></p>
                            <p><i>GPA: 3.7</i></p>
                            </div>
                        </div>
                    </section>
                    <section class="accordion">
                        <input type="checkbox" name="collapse2" id="handle2"/>
                        <h2 class="handle">
                            <label for="handle2">Work Experience</label>
                        </h2>
                        <div class="content">
                            <div className='work-experience'>
                                <p><i><b>Software Engineering Intern </b>@ Boeing</i></p>
                                <p><i><b>Coding Instructor </b>@ iCode School Missouri City</i></p>
                            </div>
                        </div>
                    </section>
                    <section class="accordion">
                        <input type="checkbox" name="collapse3" id="handle3"/>
                        <h2 class="handle">
                            <label for="handle3">Skills</label>
                        </h2>
                        <div class="content">
                            <p><b>Languages:</b> C++, C#, Java, HTML, CSS, JavaScript</p>
                            <p><b>Frameworks:</b> ASP.NET, Blazor, React </p>
                            <p><b>Other:</b> PhotoShop, Visual Studio, Raspberry Pi</p>
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