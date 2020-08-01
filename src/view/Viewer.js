import React, { useState, useLayoutEffect } from 'react';
import {TopMenu} from './components/TopMenu';
import {Headshots} from './components/MainIntro';
import {About} from './components/About'
import {Resume} from './components/Resume';
import {Contact} from './components/Contact';
import {Writing} from './components/Writing';
import {Media} from './components/Media';
import {SideMenu} from './components/SideMenu';
import {Header} from './components/Header';

import './components/styles/main.css';
import './components/styles/fullheader.css';

export function Viewer(props){

  const[view,setView] = useState('intro');
  const[viewDisplay, setViewDisplay] = useState(<About/>);


  const handleViewChange = (view) => {
            setView(view);
        };

   useLayoutEffect(() => {
             switch(view) {
             case 'intro':
             setViewDisplay(<About handleViewChange={handleViewChange}/>);
             break;
             case 'headshots':
             setViewDisplay(<Headshots handleViewChange={handleViewChange}/>);
             break;
             case 'resume':
             setViewDisplay(<Resume handleViewChange={handleViewChange} />);
             break;
             case 'media':
             setViewDisplay(<Media handleViewChange={handleViewChange} />);
             break;
             case 'writing':
             setViewDisplay(<Writing handleViewChange={handleViewChange} />);
             break;
             case 'contact':
             setViewDisplay(<Contact handleViewChange={handleViewChange} />);
             break;
             default:
             setViewDisplay(<About handleViewChange={handleViewChange}/>);}
             }, [view]);

    return(
    <div id="main-div">
        <Header handleViewChange={handleViewChange}/>
        <SideMenu handleViewChange={handleViewChange}/>

        <div id="main-div-child-2">
        {viewDisplay}
        </div>
    </div>
    );
 }