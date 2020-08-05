import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/writing.css';
import Collapsible from 'react-collapsible';
import play_analysis from './documents/play_analysis.pdf';
import ex_girlfriend from './documents/ex_girlfriend.pdf';
import test from './documents/resume_prof.pdf';
import kitchen_poem from './documents/kitchen_poem.pdf';
import shore_poem from './documents/shore_poem.pdf';
import nyc_poem from './documents/nyc_poem.pdf';
import blog_1 from './documents/blog_1.pdf';
import blog_2 from './documents/blog_2.pdf';
import blog_3 from './documents/blog_3.pdf';
import blog_4 from './documents/blog_4.pdf';
import blog_5 from './documents/blog_5.pdf';
import blog_6 from './documents/blog_6.pdf';
import songs from './documents/summer_song.pdf';
import get_started from './documents/get_started.pdf';
import sierra_bogess from './documents/sierra_bogess.pdf';
import monday_blues from './documents/monday_blues.pdf';
import resolutions from './documents/resolutions.pdf';
import kids_show from './documents/kids_show.pdf';
import freshman_15 from './documents/freshman_15.pdf';
import winter_south from './documents/winter_south.pdf';
import chandler_bing from './documents/chandler_bing.pdf';
import singers from './documents/singers.pdf';
import holidays_mother from './documents/holidays_mother.pdf';

//<Collapsible trigger="Play Analysis">
//                             <object id="writing-pdf-view" data={play_analysis} type="application/pdf">
//                                   <p> <a href={play_analysis}></a></p>
//                                 </object>
//                            </Collapsible>

function Document(props) {
return(
<Collapsible id="pdf-collapsible" trigger={props.title}>
<div id="document-container">
   <object id="pdf-view" data={props.data} type="application/pdf">
   <p> <a href={props.data}></a></p>
   </object>
</div>
</Collapsible>
);
}

function DocumentLink(props){
return(
    <a href={props.data}>
     {props.title}
    </a>
);
}
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
                            <DocumentLink data={play_analysis} title="Play Analysis"/>
                            </div>
                           <div id="writing">
                           <DocumentLink data={ex_girlfriend} title="My Crazy Ex-Girlfriend Analysis"/>
                           </div>
                        </div>
                </Collapsible>
        </div>
        <div id="writing-category" >
        <Collapsible trigger="Poetry">
        <div id="poem-items">
                            <div id="writing">
                            <DocumentLink data={kitchen_poem} title="Kitchen Poem"/>
                            </div>
                           <div id="writing">
                           <DocumentLink data={shore_poem} title="Shore Poem"/>
                           </div>
                           <div id="writing">
                           <DocumentLink data={nyc_poem} title="NYC Poem"/>
                           </div>
                </div>
        </Collapsible>
        </div>
        <div id="writing-category" >
        <Collapsible trigger="Triad Stage Blogs">
            <div id="triad-items">
                            <div id="writing">
                            <DocumentLink data={blog_1} title="Summer Camps Unmasked: A Behind-The-Scenes Look at our Physical Comedy..."/>
                            </div>
                            <div id="writing">
                            <DocumentLink data={blog_2} title="Behind-the-Scenes at Our Monologue Intensive..."/>
                             </div>
                             <div id="writing">
                             <DocumentLink data={blog_3} title="I like to Move It, Move It: Understanding and Utilizing Movement"/>
                            </div>
                            <div id="writing">
                            <DocumentLink data={blog_4} title="Summer of Growth: Our Opportunity Greensboro Fellow"/>
                            </div>
                            <div id="writing">
                            <DocumentLink data={blog_5} title="Field Trip Fun at Triad Stage"/>
                            </div>
                            <div id="writing">
                            <DocumentLink data={blog_6} title="Summer Camp Wrap Up"/>
                            </div>
                </div>
        </Collapsible>
        </div>
        <div id="writing-category" >
        <Collapsible trigger="Entity Magazine">
          <div id="entity-items">
                            <div id="writing">
                            <DocumentLink data={songs} title="100 Songs for Summer To Spice Up Your Playlist"/>
                            </div>
                           <div id="writing">
                           <DocumentLink data={get_started} title="How to Get Started in Acting: 12 Tips for Aspiring Actors"/>
                           </div>
                           <div id="writing">
                           <DocumentLink data={sierra_bogess} title="Broadway&apos;s Leading Lady Sierra Boggess Inspires On and Off Stage"/>
                           </div>
                </div>
        </Collapsible>
        </div>
        <div id="writing-category">
        <Collapsible trigger="Odyssey">
                  <div id="odyssey-items">
                                    <div id="writing">
                                    <a href={monday_blues}>The Monday Blues</a>
                                    </div>
                                   <div id="writing">
                                    <a href={freshman_15}>
                                    The Freshman 15: Disney Edition
                                    </a>
                                   </div>
                                   <div id="writing">
                                   <a href={resolutions}>
                                   8 New Years Resolutions Worth Keeping
                                   </a>
                                   </div>
                                   <div id="writing">
                                   <a href={kids_show}>
                                   Honest Reviews of Popular Kid Show Characters
                                   </a>
                                   </div>
                                   <div id="writing">
                                   <a href={winter_south}>
                                   Hardships of Winter in the South
                                   </a>
                                   </div>
                                   <div id="writing">
                                   <a href={chandler_bing}>
                                   15 Times Chandler Bing Perfectly Described Us All
                                   </a>
                                   </div>
                                   <div id="writing">
                                   <a href={singers}>
                                   20 Things All Singers Know To Be True
                                   </a>
                                   </div>
                                   <div id="writing">
                                   <a href={holidays_mother}>
                                   The Holidays as Told By &ldquo;How I Met Your Mother&rdquo;
                                   </a>
                                   </div>

                        </div>
                </Collapsible>
        </div>
        </div>
        </React.Fragment>
    );
}