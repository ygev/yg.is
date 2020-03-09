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
                    <img src={props.img} alt=""/>
                </figure>
            </section>
        </Fade>
    </>
);