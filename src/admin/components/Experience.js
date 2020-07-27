import React from 'react';
import './styles/intro.css';


export function Experience(props) {
 return(
  <div id="education">
      <div>
       <label for="title">Title</label>
       <input id="title"></input>
      </div>
      <div>
       <label for="From">From</label>
       <input id="From"></input>
        <label for="To">To</label>
        <input id="To"></input>
      </div>
      <div>
       <label for="description">Description</label>
       <input id="description"></input>
      </div>
      <button id="b-eduction">
      Add Experience
      </button>
      </div>
    );
}