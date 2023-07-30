import React from 'react';
import '../../styles/pagestyles/resume.css';
import pdf from '../../assets/resume.pdf'
import ResumeWindow from './ResumeWindow';

const Resume = () => {

  return (
<div style={{height:'100vh'}}>
<ResumeWindow/>
</div>
  );
};
  
export default Resume;