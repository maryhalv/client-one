import React, {useState, useLayoutEffect} from 'react';
import './styles/intro.css';
import headshot_1 from '../images/headshot_1.jpeg';
import headshot_2 from '../images/headshot_2.jpeg';
import headshot_3 from '../images/headshot_3.JPG';
import headshot_4 from '../images/headshot_4.JPG';

export function Headshots(props) {

return (
<React.Fragment>
    <div id="main-intro">
    <div id="d-headshot-1">
        <img src={headshot_1}/>
    </div>
    <div id="d-headshot-2">
        <img src={headshot_2}/>
    </div>
    <div id="d-headshot-3">
        <img src={headshot_3}/>
    </div>
    <div id="d-headshot-4">
        <img src={headshot_4}/>
    </div>
    </div>
</React.Fragment>
);
}
