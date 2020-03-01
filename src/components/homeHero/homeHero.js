import React from "react";
import "./homeHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import imgPhisher from "../../pages/phisher/images/hero.png"; 
import Marquee from 'react-double-marquee';
import { Constants } from "../../constants"

export default props => (
    <>
        <Fade left duration={500}>
            <section className={"home__hero " + props.currentHover}>
                {/* {props.currentHover} */}
                {/* img... set source to {props.currentHover}.png */}
                {/* div... set class/id to #{props.currentHover} */}
                <figure className="home__img"> 
                    <Tilt
                    perspective={1000}  
                    gyroscope={true}
                    scale={1.02}
                    trackOnWindow={true}>
                    <img src={imgPhisher} alt=""/>
                    </Tilt>
                </figure>
                <div className="hero__txt">
                    <h2 className="home__brow">{Constants[props.currentHover].heroCategory} - {Constants[props.currentHover].heroYear} - {Constants[props.currentHover].heroDeliverable}</h2>
                    <div className="marquee__wrap">
                        <Marquee
                        direction = "left"
                        delay="1000"
                        speed ="0.1">
                        {Constants[props.currentHover].heroTitle}
                        </Marquee>
                    </div>
                </div>
            </section>
        </Fade>
    </>
);  