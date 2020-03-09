import React from "react";
import "./more.css";
import "../../css/normalize.css";
import "../../css/global.css";
import glamour from "../../images/inner/glamourPH.png" 

export default props => (
    <>
        <section className="more">
            <h4 className="more__head">Check Out More
            </h4>
            <div className="more__group">
                <figure className="more__item">
                    <img className="more__img" src={glamour} alt=""/>
                    <figcaption className="more__title">{props.heroTitle}
                    </figcaption>
                    <h4 className="more__head">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}
                    </h4>
                </figure>
                <figure className="more__item">
                    <img className="more__img" src={glamour} alt=""/>
                    <figcaption className="more__title">{props.heroTitle}
                    </figcaption>
                    <h4 className="more__head">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}
                    </h4>
                </figure>
                <figure className="more__item">
                    <img className="more__img" src={glamour} alt=""/>
                    <figcaption className="more__title">{props.heroTitle}
                    </figcaption>
                    <h4 className="more__head">{props.heroCategory} - {props.heroYear} - {props.heroDeliverable}
                    </h4>
                </figure>
            </div>
        </section>
    </>
);  
