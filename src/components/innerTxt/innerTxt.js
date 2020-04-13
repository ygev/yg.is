import React from "react";
import "../../css/normalize.css";
import "./innerTxt.css";
import "../../css/global.css";
import gitlogo from "../../images/inner/gitlogo.svg";
import devpostlogo from "../../images/inner/devpostlogo.svg";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade right duration={500}>
            <div className="inner__txt"> 
                <h3 className="brow">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}</h3>
                <h2 className="lead">{props.heroTitle}</h2>
                <h2 className="head">{props.heroSummary}</h2>
                <div className="btns__wrapper">
                    {props.devpostLink ? 
                        <a target="_blank" rel="noopener noreferrer" href={props.devpostLink}>
                            <div className="btn btn__git--wrapper">
                                <button className="btn__git">See Devpost</button>
                                <span className="btn__git--iconbg"><img alt="Devpost Logo" className="btn__git--icon" src={devpostlogo}/></span>
                            </div>
                        </a> 
                    : ""}
                    {props.gitLink ? 
                        <a target="_blank" rel="noopener noreferrer" href={props.gitLink}>
                            <div className="btn btn__git--wrapper">
                                <button className="btn__git">See Repository</button>
                                <span className="btn__git--iconbg"><img alt="Devpost Logo" className="btn__git--icon" src={gitlogo}/></span>
                            </div>
                        </a> 
                    : ""}
                </div>
            </div>
        </Fade>
    </>
);  