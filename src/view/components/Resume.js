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
     <Collapsible trigger="Professional Resume">
      <div id="main-resume">
          <object id="resume-view" data={resume} type="application/pdf">
            <p> <a href={resume}></a></p>
          </object>
          </div>
     </Collapsible>
     </div>
     <div id="resume-option">
     <Collapsible trigger="Acting Resume">
     <div id="main-resume">
               <object id="resume-view" data={performance_resume} type="application/pdf">
                 <p> <a href={performance_resume}></a></p>
               </object>
               </div>
     </Collapsible>
     </div>
     </div>

     </React.Fragment>
   );
}