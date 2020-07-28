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
        <img id="img-headshot" src={headshot_1}/>
        <figcaption id="headshot-cap">Photo by Patricia Roseman</figcaption>
    </div>
    <div id="d-headshot-2">
        <img id="img-headshot" src={headshot_2}/>
        <figcaption id="headshot-cap">Photo by Patricia Roseman</figcaption>
    </div>
    <div id="d-headshot-3">
        <img id="img-headshot" src={headshot_3}/>
        <figcaption id="headshot-cap">Photo by Patricia Roseman</figcaption>
    </div>
    <div id="d-headshot-4">
        <img id="img-headshot" src={headshot_4}/>
        <figcaption id="headshot-cap">Photo by Wayne Reich</figcaption>
    </div>
    </div>
</React.Fragment>
);
}
