import React from "react";
import "./innerHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import hero from "../../images/inner/hero.png"; 

export default props => (
    <>
        <section className="hero">
            <figure className="hero__img"> 
                <img src={hero} alt="load butthole"/>
            </figure>
        </section>
    </>
);  