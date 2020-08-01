import React, { useState, useLayoutEffect } from 'react';
import aless from './media_images/alessandra.jpg';
import clown_bar_1 from './media_images/clown_bar_1.jpeg';
import clown_bar_2 from './media_images/clown_bar_2.JPG';
import clown_bar_3 from './media_images/clown_bar_3.jpeg';
import clown_bar_4 from './media_images/clown_bar_4.jpeg';
import collin from './media_images/collin.jpg';
import entity_mag from './media_images/entity_mag.jpeg';
import flying from './media_images/flying.jpg';
import john_basil from './media_images/john_basil.jpg';
import nyc from './media_images/nyc.jpeg';
import radio from './media_images/radio.jpeg';
import rocky_horror from './media_images/rocky_horror.jpg';
import './styles/photos.css';
import left_arrow from '../images/icons8-double-left-50.png';
import right_arrow from '../images/icons8-double-right-50.png'

function PhotoGrid(props) {

    const photos = props.photos;

    const photo_divs = photos.map(photo  => {
    return (<div class="photo-div" id={photo}>
           <img src={photo} id={photo}/>
           </div>);
         });

    return(photo_divs);
}

export function Photos(props) {

const photos = [
{src: aless, cap: "Hannah and some colleagues at ENTITY Mag in Los Angeles get one-on-one time with professional matchmaker Alessandra Conti."},
{src: clown_bar_1, cap: "Photo by Scott Muthersbaugh, Hannah as Petunia in Elon University’s production of Clown Bar by Adam Szymkowicz."},
{src: clown_bar_2, cap: "Photo by Scott Muthersbaugh"},
{src: clown_bar_3, cap: "Photo by Scott Muthersbaugh"},
{src: clown_bar_4, cap: "Photo by Scott Muthersbaugh"},
{src: collin, cap: "Hannah and her cohort at ENTITY Mag with actor and author Collin Egglesfield."},
{src: entity_mag, cap: "Photo by Rachel Hough, Hannah and her cohort at ENTITY Mag in Los Angeles."},
{src: flying, cap: "Hannah couldn’t resist sharing this photo from the time she took a flying lesson over Los Angeles to show you all how cool and spontaneous she is."},
{src: john_basil, cap: "Hannah and her fellow 2020 classmates with Shakespeare practitioner John Basil."},
{src: nyc, cap: "Hannah embraces vivacious New York City life while taking a winter term at Tisch School of the Arts to study comedy."},
{src: radio, cap: "Hannah in the WSOE 89.3 FM studio preparing for her weekly show."},
{src: rocky_horror, cap: "Photo by Alexandra Stafford, Hannah as a Transylvanian in The Rocky Horror Picture Show shadow production."}
];

const[index, setIndex] = useState(0);
const[prevIndex, setPrev] = useState(11);
const[nextIndex, setNext] = useState(1);

const handleNextClick = () => {
    if((index + 1) > (photos.length -1)) {
        setIndex(0);
        setNext(1);
        setPrev(photos.length -1);
    } else {
        setIndex(index + 1);
        if((index + 2) > (photos.length -1)) {
            setNext(0);
            setPrev(photos.length -2);
        } else {
        setNext(index + 2);
        setPrev(index);
        }
    }
}

const handlePreviousClick = () => {
   if((index - 1) < 0) {
     setIndex(photos.length - 1);
     setPrev(photos.length - 2);
     setNext(0);
   } else {
    setIndex(index - 1);
    if((index - 2) < 0) {
    setPrev(photos.length - 1);
    setNext(0);
    } else {
    setPrev(index - 2);
    setNext(index);
    }
   }
}
// <div id="side-pic-container">
//     <img id="side-pic" src={photos[prevIndex].src}/>
//    </div>
//
//
// <div id="side-pic-container">
//    <img  id="side-pic" src={photos[nextIndex].src}/>
//    </div>

// <img src={left_arrow}/>
//<img src={right_arrow}/>


return(
    <React.Fragment>
    <div id="display-photo">
    <button id="b-previous" onClick={handlePreviousClick}>
        <img id="left-arrow" src={left_arrow}/>
    </button>
    <div id="main-pic-container">
     <img id="main-pic" src={photos[index].src}/>
    </div>
    <button id="b-next" onClick={handleNextClick}>
        <img id="right-arrow" src={right_arrow}/>
    </button>
    </div>
    <figcaption id="gallery-cap">{photos[index].cap}</figcaption>
   <div id="photos-div">
   </div>
   </React.Fragment>
   );
}