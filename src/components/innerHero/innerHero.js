import React from "react";
import "./innerHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade duration={500}>
            <section className="hero">
                <figure className="hero__img"> 
                <img className="inner__img--limiter" src={props.img}/>
                </figure>
            </section>
        </Fade>
    </>
);