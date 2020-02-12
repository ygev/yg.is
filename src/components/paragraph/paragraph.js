import React from "react";
import "./paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
     <Fade bottom duration={300}>
        <div className="gridContainer">
            <section className="paragraph">
                <article className="paragraph__section">
                    <h4 className="paragraph__title">
                    {props.paragraphTitle}
                    </h4>
                    <p className="paragraph__body">
                    {props.paragraphBody} 
                    </p>
                </article>
            </section>
        </div>
    </Fade>
    </>
);  
