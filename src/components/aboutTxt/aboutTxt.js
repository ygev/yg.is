import React from "react";
import "../../css/normalize.css";
import "../paragraph/paragraph.css";
import "./aboutTxt.css";
import "../../css/global.css";
import gitlogo from "../../images/inner/gitlogo.svg";
import devpostlogo from "../../images/inner/devpostlogo.svg";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade duration={500}>
            <div className="aboutTxt"> 
                <h3 className=" aboutTxt__brow">Thank God It's Friday!</h3>
                <h2 className=" aboutTxt__lead">Y. G. is Yana Gevorgyan 👋</h2>
                <h2 className=" aboutTxt__head">Based in Seattle, I am a multi-disciplinary product designer bridging people with tech.  When not maintaining my open-source projects, you'll find me arranging black metal compositions on the piano, writing about design theory on my Medium and buying dumb domain names. Seeking opportunities.</h2>
            </div>
        </Fade>
    </>
);  