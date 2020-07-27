import React, {useState, useLayoutEffect } from 'react';
import { SideMenu } from './SideMenu';
import { EditView } from './EditView';

export function AdminView(props) {

    return(
    <React.Fragment>
    <SideMenu/>
    <EditView/>
    </React.Fragment>
    );
}