import React from "react";
import "./paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
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
    </>
);  
