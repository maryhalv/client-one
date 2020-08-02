import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/writing.css';
import Collapsible from 'react-collapsible';
import {play_analysis} from './documents/play_analysis.pdf';
import {ex_girlfriend} from './documents/ex_girlfriend.pdf';
import {test} from './documents/resume_prof.pdf';

//<Collapsible trigger="Play Analysis">
//                             <object id="writing-pdf-view" data={play_analysis} type="application/pdf">
//                                   <p> <a href={play_analysis}></a></p>
//                                 </object>
//                            </Collapsible>
export function Writing(props) {

    const[pdf_view, setPdf] = useState("play_analysis");
    const[pdfDisplay, setDisplay] = useState(<div></div>);

    const displayPlayAnalysis = () => {
     setPdf("play_analysis");
    }

    useLayoutEffect(() => {
        switch(pdf_view){
        case "play_analysis":
        setDisplay(
        <object id="writing-pdf-view" data={test} type="application/pdf">
        <p> <a href={play_analysis}></a></p>
        </object>);
        break;
        case "ex_girlfriend":
        setDisplay(
        <object id="writing-pdf-view" data={ex_girlfriend} type="application/pdf">
        <p> <a href={ex_girlfriend}></a></p>
        </object>);
        break;
        default:
        setDisplay(<div></div>);
        }
    }, [pdf_view]);

    return(
        <React.Fragment>
        <div id="writing-main">
        <div id="writing-category-top">
        <Collapsible id="top-collapsible" trigger="Academic">
                <div id="category-items">
                            <div id="writing">
                             Play Analysis
                            </div>
                           <div id="writing">
                           Crazy Ex-Girlfriend Analysis
                           </div>
                        </div>
                </Collapsible>
        </div>
        <div id="writing-category" >
        <Collapsible trigger="Poetry">
        <div id="poem-items">
                            <div id="writing">
                            Kitchen Poem
                            </div>
                           <div id="writing">
                           The Shore Poem
                           </div>
                           <div id="writing">
                            New York City Poem
                           </div>
                </div>
        </Collapsible>
        </div>
        <div id="writing-category" >
        <Collapsible trigger="Triad Stage Blogs">
            <div id="triad-items">
                            <div id="writing">
                            Blog 1
                            </div>
                            <div id="writing">
                            Blog 2
                             </div>
                             <div id="writing">
                            Blog 3
                            </div>
                            <div id="writing">
                            Blog 4
                            </div>
                            <div id="writing">
                            Blog 5
                            </div>
                            <div id="writing">
                            Blog 6
                            </div>
                </div>
        </Collapsible>
        </div>
        <div id="writing-category" >
        <Collapsible trigger="Entity Magazine">
          <div id="entity-items">
                            <div id="writing">
                            <a href="https://www.entitymag.com/100-songs-for-summer-to-spice-up-your-playlist/">
                            100 Songs For Summer to Spice Up Your Playlist
                            </a>
                            </div>
                           <div id="writing">
                           <a href="https://www.entitymag.com/how-to-get-started-in-acting-12-tips-for-aspiring-actors/">
                           How to Get Started in Acting: 12 Tips for Aspiring Actors
                           </a>
                           </div>
                           <div id="writing">
                           <a href="https://www.entitymag.com/broadways-leading-lady-sierra-boggess-inspires-on-and-off-stage/">
                           Broadway&apos;s Leading Lady Sierra Bogess Inspires On and Off Stage
                           </a>
                           </div>
                </div>
        </Collapsible>
        </div>
        <div id="writing-category">
        <Collapsible trigger="Odyssey">
                  <div id="odyssey-items">
                                    <div id="writing">
                                    Play Analysis
                                    </div>
                                   <div id="writing">
                                   Crazy Ex-Girlfriend Analysis
                                   </div>
                        </div>
                </Collapsible>
        </div>
        {pdfDisplay}
        </div>
        </React.Fragment>
    );
}