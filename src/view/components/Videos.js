import React, { useState, useLayoutEffect } from 'react';
import radio_reel from './videos/radio_reel.mp3';
import './styles/vidoes.css';
import Collapsible from 'react-collapsible';


function AudioComp(props){

return(
    <figure id="audio-comp">
        <figcaption id="audio-caption"></figcaption>
        <audio
            controls
            src={props.src}>
                Your browser does not support the
                <code>audio</code> element.
        </audio>
    </figure>
);
}

export function Videos(props) {
    return(
    <div id="media-container">
         <div id="video-view">
         <div id="video-collapse">
         <Collapsible trigger="Radio Reel">
         <AudioComp src={radio_reel} cap="Radio Reel"/>
         </Collapsible>
        </div>
         <div id="video-collapse">
         <Collapsible id="video-display" trigger="An Unexpected Match">
         <iframe id="i-frame-video" width="560" height="315" src="https://www.youtube.com/embed/RjZxVZ9w0yI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </Collapsible>
         </div>
         <div id="video-collapse">
         <Collapsible  trigger="Singing Reel">
         <iframe id="i-frame-video" width="560" height="315" src="https://www.youtube.com/embed/thKOhJZtkKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </Collapsible>
         </div>
         <div id="video-collapse">
         <Collapsible  trigger="Acting Reel ">
         <iframe id="i-frame-video" width="560" height="315" src="https://www.youtube.com/embed/qk31x1PzCKY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </Collapsible>
         </div>
         </div>
    </div>
    );
}