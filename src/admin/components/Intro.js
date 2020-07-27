import React, {useState, useLayoutEffect} from 'react';
import './styles/intro.css';

export function Intro(props){

return(
    <React.Fragment>
       <div id="intro">
           <p>
           Personal Introduction and Overview
           </p>
           <input id="intro-input">

           </input>
           <button id="b-update">
           Update
           </button>
       </div>
    </React.Fragment>
    );
}