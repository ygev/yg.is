import React from "react";
import "./innerHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import hero from "../../images/inner/hero.png"; 
import Tilt from 'react-parallax-tilt';

export default props => (
    <>
        <section className="hero">
            <figure className="hero__img"> 
                <Tilt
                perspective={500}  
                gyroscope={true}
                scale={1.02}
                trackOnWindow={true}>
                <img src={hero} alt="load butthole"/>
                </Tilt>
            </figure>
        </section>
    </>
);  