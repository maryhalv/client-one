import React, {useState, useLayoutEffect} from 'react';

import './styles/fullheader.css';

export function Header(props) {

const handleHeaderClick = () => {
    props.handleViewChange('intro');
}
    return(
      <div id="full-header">
      <p id="p-header" onClick={handleHeaderClick}>
      Hannah Dobrogosz
      </p>
      </div>
    );
}