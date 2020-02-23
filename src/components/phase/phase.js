import React from "react";
import "../paragraph/paragraph.css";
import "./phase.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
            <div className="gridContainer">
                <section className="paragraph">
                    <article className="paragraph__section">
                        <h4 className="phase__head">
                        {props.phaseTitle}
                        </h4>
                    </article>
                </section>
            </div>
    </>
);  
