import React from "react";
import "../../css/normalize.css";
import "./innerTxt.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade delay={100} duration={1000}>
            <div className="inner__txt"> 
                <h3 className="brow">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}</h3>
                <h2 className="lead">{props.heroTitle}</h2>
                {/* <h2 className="head">{props.heroSummary}</h2> */}
            </div>
        </Fade>
    </>
);  