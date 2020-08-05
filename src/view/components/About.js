import React, {useState, useLayoutEffect, useEffect} from 'react';
import './styles/about.css';
import headshot_1 from '../images/headshot_1.jpeg';

export function About(props) {

useEffect(() => {
    window.scrollTo(0,0);
}, []);

return(
    <React.Fragment>
        <div id="about-container">
        <div id="main-about">
        <div id="about-headshot">
           <img id="img-headshot-about"src={headshot_1} />
        </div>
        <div id="welcome-header">
            Welcome!
        </div>
        <div id="about-text">
        <div id="about-section">
            My name is Hannah Dobrogosz and I am an actor, singer, and writer.
            I am a proud graduate of Elon University with a Bachelor of Fine Arts
            in Acting. I live for making people laugh and am a bit of a self-proclaimed comedian.
        </div>
        <div id="about-section">
            Beyond performing and creating content, I love jamming out to The Beatles, learning new dialects,
            and making Italian food. Don’t even get me started on my Carbonara recipe.
        </div>
         <div id="about-section">
            From growing up in the middle of a zoo to learning to fly a plane over Los Angeles, my life is full of
            wild encounters and adventures. I look forward to sharing bits of my story with you!
        </div>
        </div>
        </div>
        </div>
    </React.Fragment>
    );
}