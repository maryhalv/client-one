import React, {useState, useLayoutEffect} from 'react';
import './styles/resume.css';
import resume from './documents/resume_prof.pdf';


export function Resume() {
   return (
     <React.Fragment>
     <div id="main-resume">
     <object id="resume-view" data={resume} type="application/pdf">
       <p> <a href={resume}></a></p>
     </object>
     </div>
     </React.Fragment>
   );
}