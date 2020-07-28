import React, { useState, useLayoutEffect } from 'react';
import './styles/writing.css';

export function Writing(props) {
    return(
        <React.Fragment>
        <div id="writing-main">
        <div id="writing-sample-top">
        <h1 id="writing-title">
         Writing Sample One
        </h1>
        <p id="p-sample" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                 eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                 in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        </div>
        <div id="writing-sample">
        <h1 id="writing-title">
        Writing Sample Two
        </h1>
         <p id="p-sample">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
         </p>

        </div>
        <div id="writing-sample">
        <h1 id="writing-title">
        Writing Sample Three
        </h1>
         <p id="p-sample">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </div>
        </div>
        </React.Fragment>
    );
}