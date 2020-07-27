import React, { useState, useLayoutEffect } from 'react';
import './components/styles/sidemenu.css';

export function SideMenu(props) {

    const viewChange = props.handleViewChange;

    const handleIntroClick = () => {
      viewChange('intro');
    }

    const handleEducationClick = () => {
       viewChange('education');
    }

    const handleExperienceClick = () => {
        viewChange('experience');
    }

    return(
        <div id="side-menu" >
            <div id="menu-item"  onClick={handleIntroClick}>
                Intro
            </div>
            <div id="menu-item" onClick={handleEducationClick}>
                Education
            </div>
            <div id="menu-item" onClick={handleExperienceClick}>
                Experience
            </div>
        </div>
    );
}