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
    weekday[0] = "Happy Sunday!";
    weekday[1] = "Hope you're having a good Monday!";
    weekday[2] = "Hope you're having a good Tuesday!";
    weekday[3] = "Happy Hump Day!";
    weekday[4] = "It's almost Friday!";
    weekday[5] = "Thank God it's Friday!";
    weekday[6] = "Happy Saturday!";

    var n = weekday[d.getDay()];
    return n;
}

export default props => (
    <>
        <Fade duration={500}>
            <div className="aboutTxt"> 
                <h3 className=" aboutTxt__brow">{setDayMessage()}</h3>
                <h2 className=" aboutTxt__lead">I'm Yana Gevorgyan 👋</h2>
                <h2 className=" aboutTxt__head">Based in Seattle, I am a multi-disciplinary product designer bridging people with tech.  When not maintaining my open-source projects, you'll find me arranging black metal compositions on the piano buying dumb domain names. Seeking opportunities.</h2>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1Zmz32KRXFCzUucFPIRciZpMcfi7TLqBL">
                    <div className="btn btn__git--wrapper">
                        <button className="btn__git">See My Resume</button>
                        <span className="btn__git--iconbg"><img alt="Devpost Logo" className="btn__git--icon" src={download}/></span>
                    </div>
                </a>
            </div>
        </Fade>
    </>
);  