import React from "react";
import "./homeHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import Marquee from 'react-double-marquee';
import { Constants } from "../../constants"
import phisherHero from "../../pages/phisher/images/hero.png"; 
import cluseHero from "../../pages/cluse/images/hero.png"; 
import dittoHero from "../../pages/ditto/images/hero.png"; 
import fisqualHero from "../../pages/fisqual/images/hero.png"; 
import trunksHero from "../../pages/trunks/images/hero.png"; 
  

var images = {
    phisher: phisherHero,
    cluse: cluseHero,
    ditto: dittoHero,
    fisqual: fisqualHero,
    trunks: trunksHero
}

export default props => (
    <>
        <Fade left duration={500}>
            <section className={"home__hero " + props.currentHover}>
                <figure className="home__img"> 
                    <Tilt
                     reset={true}
                     tiltAxis="x">
                    <img src={images[props.currentHover]} alt=""/>
                    </Tilt>
                </figure>
                <div className="hero__txt">
                    <h2 className="home__brow">{Constants[props.currentHover].heroCategory} - {Constants[props.currentHover].heroYear} - {Constants[props.currentHover].heroDeliverable}</h2>
                    <div className="marquee__wrap">
                        <Marquee
                        direction = "left"
                        delay="500"
                        speed ="0.1">
                        {Constants[props.currentHover].heroTitle}
                        </Marquee>
                    </div>
                </div>
            </section>
        </Fade>
    </>
);  