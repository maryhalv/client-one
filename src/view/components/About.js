import React, {useState, useLayoutEffect, useEffect} from 'react';
import './styles/about.css';
import headshot_1 from '../images/headshot_1.jpeg';
import headshot_2 from '../images/headshot_2.jpeg';
import headshot_3 from '../images/headshot_3.JPG';
import headshot_4 from '../images/headshot_4.JPG';

export function About(props) {

const[headView, setHead] = useState(headshot_1);
const[nextView, setNext]= useState(1);

useEffect(() => {
 setTimeout(() => {
    switch(nextView){
    case 1:
    setHead(headshot_2);
    setNext(2);
    break;
    case 2:
    setHead(headshot_3);
    setNext(3);
    break;
    case 3:
    setHead(headshot_4);
    setNext(4);
    break;
    default:
    setHead(headshot_1);
    setNext(1);
    }
 } ,3000)
});

return(
    <React.Fragment>
        <div id="about-container">
        <div id="main-about">
        <div id="about-headshot">
           <img id="img-headshot-about"src={headView} />
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