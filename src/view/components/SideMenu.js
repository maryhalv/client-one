import React, {useState, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import './sidemenu.css';

export function SideMenu(props) {

    const[viewMenu, setMenu] = useState("hidden");

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
        props.handleViewChange('headshots');
    }

    const handleResumeClick = () => {
        props.handleViewChange('resume');
    }

    const handleMediaClick = () => {
         props.handleViewChange('media');
    }

    const handleWritingClick = () => {
        props.handleViewChange('writing');
    }

    const handleContactClick = () => {
        props.handleViewChange('contact');
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

    return(

    <React.Fragment>
    <div id="side-menu-container">
    <div id="menu-control" onClick={animateMenu}>
                Menu
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