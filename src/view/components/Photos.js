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

//function Photo(props) {
//
//const photo=props.photo;
//
//return(
//  <div>
//  Hello!
//  </div>
//);
//}

function PhotoGrid(props) {

    const photos = props.photos;

//    const handlePhotoClick = (e) => {
//    console.log(e.target.id);
//      props.handlePhotoClick(e.target.id);
//    }

    const photo_divs = photos.map(photo  => {
    return (<div class="photo-div" id={photo}>
           <img src={photo} id={photo}/>
           </div>);
         });

    return(photo_divs);
}

export function Photos(props) {

const photos = [
aless,
clown_bar_1,
clown_bar_2,
clown_bar_3,
clown_bar_4,
collin,
entity_mag,
flying,
john_basil,
nyc,
radio,
rocky_horror
];

//const[view, setView] = useState('grid');
//const[photo,setPhoto] = useState(photos[0]);
//
//const handlePhotoClick = (photo) => {
//    setPhoto(photo);
//    setView('photo');
//}
//
//const handleViewChange = (view) => {
//  setView(view);
//};
//
//const[viewDisplay, setViewDisplay] = useState(<PhotoGrid photos={photos} handleViewChange={handleViewChange}/>);
//
// useLayoutEffect(() => {
//                  switch(view) {
//                  case 'grid':
//                  setViewDisplay(<PhotoGrid photos={photos} handleViewChange={handleViewChange} handlePhotoClick={handlePhotoClick}/>);
//                  break;
//                  case 'photo':
//                  setViewDisplay(<Photo photo={photo} handleViewChange={handleViewChange} />);
//                  break;
//                  default:
//                  setViewDisplay(<PhotoGrid photos={photos} handleViewChange={handleViewChange}  handlePhotoClick={handlePhotoClick}/>);}
//                  }, [view]);

return( <React.Fragment>
   <div id="photos-div">
   <PhotoGrid photos={photos}/>
   </div>
   </React.Fragment>
   );
}