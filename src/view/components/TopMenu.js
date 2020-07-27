import React, { useState, useLayoutEffect } from 'react';
import "./styles/mainmenu.css";

export function TopMenu(props) {


const handleIntroClick = () => {
    props.handleViewChange('intro');
}

const handleHeadshotsClick = () => {
    props.handleViewChange('headshots');
}

const handleResumeClick = () => {
    props.handleViewChange('resume');
}

const handleMediaClick = () => {
     props.handleViewChange('media');
}

const handleWritingClick = () => {
    props.handleViewChange('writing');
}

const handleContactClick = () => {
    props.handleViewChange('contact');
}

 return(
 <React.Fragment>
       <div id="header-container">
       <div id="main-header" onClick={handleIntroClick}>
              Hannah Dobrogsz
             </div>
            <div id="main-menu">
            <div id="mm-item" onClick={handleHeadshotsClick}>
               Headshots
            </div>
            <div id="mm-item" onClick={handleResumeClick}>
               Resume
            </div>
            <div id="mm-item" onClick={handleMediaClick}>
               Photos and Videos
            </div>
            <div id="mm-item" onClick={handleWritingClick}>
               Writing
            </div>
            <div id="mm-item" onClick={handleContactClick}>
              Contact
            </div>
            </div>
       </div>

 </React.Fragment>
 );
}