import React, {useState, useLayoutEffect} from 'react';
import './styles/resume.css';
import resume from './documents/resume_prof.pdf';
import performance_resume from './documents/performance_resume.pdf';
import Collapsible from 'react-collapsible';


export function Resume() {
   return (
     <React.Fragment>
     <div id="resumes">
     <div id="resume-option">
     <a href={resume} id="resume-link">Professional Resume</a>
     </div>
     <div id="resume-option">
     <a href={performance_resume} id="resume-link">Acting Resume</a>
     </div>
     </div>

     </React.Fragment>
   );
}