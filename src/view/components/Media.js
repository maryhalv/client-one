import React, { useState, useLayoutEffect } from 'react';
import './styles/media.css';
import {Photos} from './Photos';
import {Videos} from './Videos';

export function Media(props) {

    const[view, setView] = useState('photos');
    const[viewDisplay, setViewDisplay] = useState(<Photos/>);

    const handleViewChange = (view) => {
                 setView(view);
         };

    const handlePhotoClick = () => {
         setView('photos');
         }

     const handleVideoClick = () => {
         setView('videos');
         }

    useLayoutEffect(() => {
                  switch(view) {
                  case 'photos':
                  setViewDisplay(<Photos handleViewChange={handleViewChange}/>);
                  break;
                  case 'videos':
                  setViewDisplay(<Videos handleViewChange={handleViewChange} />);
                  break;
                  default:
                  setViewDisplay(<Photos handleViewChange={handleViewChange}/>);}
                  }, [view]);

    return(
        <React.Fragment>
            <div id="media-main">
             <div id="media-viewer">
                           {viewDisplay}
                           </div>
            </div>
        </React.Fragment>
    );
}