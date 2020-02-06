import React from "react";
import "./paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
    <section className="content">
        <article className="content__section">
            <h4 className="content__title">
            {props.contentTitle}
            </h4>
            <p className="content__body">
            {props.contentBody} 
            </p>
        </article>
    </section>
    </>
);  
