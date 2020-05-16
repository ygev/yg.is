import React from "react";
import "./innerHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade delay={100} duration={1000}>
            <section className="hero">
                <figure className="hero__img"> 
                <img alt="" className="inner__img--limiter" src={props.img}/>
                </figure>
            </section>
        </Fade>
    </>
);