import React from "react";
import "./innerHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade left duration={500}>
            <section className="hero">
                <figure className="hero__img"> 
                <video className="inner__img--limiter" preload="yes" autoPlay="autoplay" loop muted playsInline>
                        <source src={props.img} type="video/webm"/>
                    </video>
                </figure>
            </section>
        </Fade>
    </>
);