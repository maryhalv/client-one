import React, { useState, useLayoutEffect } from 'react';
import { EditView } from './admin/EditView';
import { Viewer } from './view/Viewer';

export function AppView(props) {

    const[view, setView] = useState('viewer');
    const[viewDisplay, setDisplay] = useState(<Viewer/>);

    const handleViewChange = (view) => {
            setView(view);};

    useLayoutEffect(() => {
       switch(view) {
        case 'viewer':
        setDisplay(<Viewer/>);
        break;
        case 'admin':
        setDisplay(<EditView/>);
        break;
        default:
        setDisplay(<Viewer/>);
       }
    }, [view]);

    return(
        <React.Fragment>
        {viewDisplay}
        </React.Fragment>
    );
}