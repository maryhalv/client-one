import React, {useState, useLayoutEffect } from 'react';
import { Intro } from './components/Intro';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { SideMenu } from './SideMenu';

export function EditView(props){
      const[view, setView] = useState('intro');
      const[viewDisplay, setDisplay] = useState(<Intro/>);


      const handleViewChange = (view) => {
          setView(view);
      };

       useLayoutEffect(() => {
           switch(view) {
           case 'intro':
           setDisplay(<Intro handleViewChange={handleViewChange}/>);
           break;
           case 'education':
           setDisplay(<Education handleViewChange={handleViewChange} />);
           break;
           case 'experience':
           setDisplay(<Experience handleViewChange={handleViewChange} />);
           break;
           default:
           setDisplay(<Intro handleViewChange={handleViewChange}/>);}
           }, [view]);

      return(
        <React.Fragment>
        <div id="admin-container">
         <SideMenu handleViewChange={handleViewChange}/>
         {viewDisplay}
        </div>
        </React.Fragment>
       );
}