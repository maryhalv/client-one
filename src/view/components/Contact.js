import React, { useState, useLayoutEffect } from 'react';
import './styles/contact.css';

export function Contact(props) {
    return(
        <React.Fragment>
            <div id="contact-main">
            <div id="d-contact">
            <p>
            EMAIL
            </p>
            <p id="p-info">
            hannah.dobrogosz@gmail.com
            </p>
            </div>
            <div id="d-contact">
            <p>
            INSTAGRAM
            </p>
            <p id="p-info">
            hannahdobrogosz
            </p>
            </div>
            <div id="d-contact">
            <p>
            LINKEDIN
            </p>
            <p id="p-info">
            <a id="linkedin-link" href="https://www.linkedin.com/in/hannahdobrogosz/">hannahdobrogosz</a>
            </p>
            </div>
            </div>
        </React.Fragment>
    );
}