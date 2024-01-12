import React from "react";
import "../../css/normalize.css";
import "./innerTxt.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade delay={100} duration={1000}>
            <div className="inner__txt">
                <h3 className="brow">{props.heroCategory} · {props.heroYear} · {props.heroDeliverable}</h3>
                <h2 className="lead">{props.heroTitle}</h2>
                {/* <h2 className="head">{props.heroSummary}</h2> */}
                <svg className="curvy__svg--inner" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71 71C31.7878 71 0 39.2122 0 0V71H71Z" fill="black" />
                </svg>
            </div>
        </Fade>
    </>
);  