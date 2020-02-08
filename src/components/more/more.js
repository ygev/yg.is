import React from "react";
import "./more.css";
import "../../css/normalize.css";
import "../../css/global.css";
import glamor from "../../images/inner/glamor-shot.png" 

export default props => (
    <>
        <section className="more">
            <h4 className="more__head">Check Out More
            </h4>
            <figure className="">
            <img className="img-glamor" src={glamor} alt=""/>
            <figcaption className="more__title">{props.heroTitle}</figcaption>
            <h4 className="more__head">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}</h4>
            </figure>
        </section>
    </>
);  
