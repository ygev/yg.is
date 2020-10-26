import React from "react";
import "../../css/normalize.css";
import "../paragraph/paragraph.css";
import "./aboutTxt.css";
import "../../css/global.css";
import download from "../../images/inner/download.svg";
import Fade from 'react-reveal/Fade';

function setDayMessage() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Hope you had a good Sunday brunch!";
    weekday[1] = "Happy Monday!";
    weekday[2] = "It's already Tuesday.";
    weekday[3] = "Happy Hump Day!";
    weekday[4] = "It's almost Friday!";
    weekday[5] = "Thank God it's Friday!";
    weekday[6] = "It's Caturday!";

    var n = weekday[d.getDay()];
    return n;
}

export default props => (
    <>
        <Fade duration={500}>
            <div className="aboutTxt"> 
                <h3 className=" aboutTxt__brow">{setDayMessage()}</h3>
                <h2 className=" aboutTxt__lead">A bit about myself.</h2>
                <h2 className=" aboutTxt__head">Product designer by day, front-end engineer by night, when no one's watching. Love nothing more than hacking on sandbox products and software that facilitates human creativity. Featured in <a href="https://www.sketch.com/blog/2020/05/21/accessible-design-in-conversation-with-cluse-developer-yana-gevorgyan/" rel="noopener noreferrer" target="_blank">Sketch Blog</a>, <a href="https://www.bestfolios.com/portfolio/yanagevorgyan" rel="noopener noreferrer" target="_blank">Bestfolios Editor's Pick</a>, <a href="https://uxdesign.cc/accessibility-tools-and-tips-for-designers-1b8eea599c5d" rel="noopener noreferrer" target="_blank">UX Collective</a> and more. Thanks for stopping by, stranger!</h2>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1Zmz32KRXFCzUucFPIRciZpMcfi7TLqBL">
                    <div className="btn btn__resume--wrapper">
                        <button className="btn__resume">See My Resume</button>
                        <span className="btn__resume--iconbg"><img alt="Devpost Logo" className="btn__resume--icon" src={download}/></span>
                    </div>
                </a>
            </div>
        </Fade>
    </>
);  