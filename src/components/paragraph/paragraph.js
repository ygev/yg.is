import React from "react";
import "./paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Syntax from "../syntax/syntax.js"

export default props => (
    <>
        <div id={props.id} className="gridContainer">
            <section className="paragraph">
                <article className="paragraph__section">
                    <h4 className="paragraph__title">
                        {props.paragraphTitle}
                    </h4>
                    <p className="paragraph__body">
                        <Syntax content={props.paragraphBody} />
                    </p>
                </article>
            </section>
        </div>
    </>
);  
