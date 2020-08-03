import React, {useState, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import './sidemenu.css';
import menu from '../images/icons8-menu-100.png';


//  <div id="d-media-menu">
//      <div id="photo-menu-item" onClick={handlePhotosClick}>
//     Photos
//     </div>
//     <div id="photo-menu-item" onClick={handleVideosClick}>
//      Videos
//     </div>
//     <div id="photo-menu-item" onClick={handleSoundClick}>
//     Sound
//     </div>
//     </div>

export function SideMenu(props) {

    const[viewMenu, setMenu] = useState("hidden");
    const[viewMediaMenu, setMedia] = useState("hidden");

    const animateMediaMenu = () => {
    switch(viewMediaMenu) {
    case "visible":
    setMedia("hidden");
    break;
    case "hidden":
    setMedia("visible");
    break;
    default:
    setMedia("visible");
    }
    }

    const animateMenu = () => {
       switch(viewMenu) {
       case "visible":
       setMenu("hidden");
       break;
       case "hidden":
       setMenu("visible");
       break;
       default:
       setMenu("visible");
       }
    }

    const handleHeadshotsClick = () => {
        animateMenu();
        setMedia("hidden");
        props.handleViewChange('headshots');
    }

    const handleResumeClick = () => {
        animateMenu();
         setMedia("hidden");
        props.handleViewChange('resume');
    }

    const handleMediaClick = () => {
         animateMenu();
         animateMediaMenu();
         props.handleViewChange('photos');
    }

    const handleWritingClick = () => {
        animateMenu();
         setMedia("hidden");
        props.handleViewChange('writing');
    }

    const handleContactClick = () => {
        animateMenu();
         setMedia("hidden");
        props.handleViewChange('contact');
    }

    const handleAboutClick=() => {
        setMedia("hidden");
        props.handleViewChange('intro');
    }

    const handlePhotosClick=() => {
         props.handleViewChange('photos');
    }

    const handleVideosClick=() => {
        props.handleViewChange('videos');
    }

    const handleSoundClick=() => {

    }

    useLayoutEffect(() => {
        switch(viewMenu){
        case "visible":
        document.getElementById("items").style.visibility = "visible";
        break;
        case "hidden":
        document.getElementById("items").style.visibility = "hidden";
        break;
        default:
        document.getElementById("items").style.visibility = "visible";
        break;
        }
    }, [viewMenu]);

    /* useLayoutEffect(() => {
            switch(viewMediaMenu){
            case "visible":
            document.getElementById("d-media-menu").style.visibility = "visible";
            break;
            case "hidden":
            document.getElementById("d-media-menu").style.visibility = "hidden";
            break;
            default:
            document.getElementById("d-media-menu").style.visibility = "visible";
            break;
            }
        }, [viewMediaMenu]); */

    return(

    <React.Fragment>
    <div id="side-menu-container">
    <div id="menu-control">
    <div id="d-menu-icon">
    <img id="menu-icon" src={menu} onClick={animateMenu}/>
    </div>
                <p id="p-name" onClick={handleAboutClick}>HANNAH DOBROGOSZ</p>

          </div>
            <div id="items">
                <div id="smenu-item" onClick={handleHeadshotsClick}>
                Headshots
                </div>
                <div id="smenu-item" onClick={handleResumeClick}>
                Resume
                </div>
                <div id="smenu-item" onClick={handleMediaClick}>
                Photos, Videos, and Sound
                </div>
                <div id="smenu-item" onClick={handleWritingClick}>
                Writing
                </div>
                <div id="smenu-item" onClick={handleContactClick}>
                Contact
                </div>
            </div>
    </div>


    </React.Fragment>


    );
}