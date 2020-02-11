import React from "react";
import "./innerTxt.css";
import "../../css/normalize.css";
import "../../css/global.css";
import gitlogo from "../../images/inner/gitlogo.svg";

export default props => (
    <>
        <div className="hero__txt"> 
            <h3 className="brow">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}</h3>
            <h2 className="lead">{props.heroTitle}</h2>
            <div className="btn__git--wrapper">
                <button className="btn__git">View Repository</button>
                <span className="btn__git--iconbg"><img alt="GitHub Logo" className="btn__git--icon" src={gitlogo}/></span>
            </div>
        </div>
    </>
);  