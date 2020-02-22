import React from "react";
import "../../css/normalize.css";
import "./homeTxt.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade left delay={300} duration={500}>
            <div className="hero__txt"> 
                <h3 className="brow">{props.lulzBrow}</h3>
                <h2 className="lead">{props.heroTitle}</h2>
            </div>
        </Fade>
    </>
);  