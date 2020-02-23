import React from "react";
import "./innerHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade left duration={500}>
            <section className="hero">
                <figure className="hero__img"> 
                    <Tilt
                    perspective={1000}  
                    gyroscope={true}
                    scale={1.02}
                    trackOnWindow={true}>
                    <img src={props.img} alt=""/>
                    </Tilt>
                </figure>
            </section>
        </Fade>
    </>
);