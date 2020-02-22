import React from "react";
import "../../css/normalize.css";
import "./innerTxt.css";
import "../../css/global.css";
import gitlogo from "../../images/inner/gitlogo.svg";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade left delay={300} duration={500}>
            <div className="hero__txt"> 
                <h3 className="brow">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}</h3>
                <h2 className="lead">{props.heroTitle}</h2>
                <div className="btn__git--wrapper">
                    <button className="btn__git">{props.btnGit}</button>
                    <span className="btn__git--iconbg"><img alt="GitHub Logo" className="btn__git--icon" src={gitlogo}/></span>
                </div>
            </div>
        </Fade>
    </>
);  