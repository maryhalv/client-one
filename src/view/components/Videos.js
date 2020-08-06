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
        <iframe id="i-frame-video" src="https://drive.google.com/file/d/1eAMb2-wh1QT5TxsJXBCnhTbc256gQOGm/preview" allowfullscreen="allowfullscreen"></iframe>
         </Collapsible>
         </div>
         <div id="video-collapse">
         <Collapsible  trigger="Singing Reel">
           <iframe id="i-frame-video" src="https://drive.google.com/file/d/14vi9GZzc6h0Gy1wIRpoHieFIkLWGZt6O/preview" allowfullscreen="allowfullscreen"></iframe>
         </Collapsible>
         </div>
         <div id="video-collapse">
         <Collapsible  trigger="Acting Reel ">
            <iframe id="i-frame-video" src="https://drive.google.com/file/d/1lVQ0JDfTHOeSXLzjg6_27IthP78rp1x4/preview" allowfullscreen="allowfullscreen"></iframe>
         </Collapsible>
         </div>
         </div>
    </div>
    );
}