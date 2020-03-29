import React from "react";
import "./homeHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';
import Marquee from 'react-double-marquee';
import { Constants } from "../../constants"
import defaultHero from "../../images/meatspin.gif"
import phisherHero from "../../pages/phisher/images/hero.png"; 
import cluseHero from "../../pages/cluse/images/hero.png"; 
import dittoHero from "../../pages/ditto/images/hero.png"; 
import fisqualHero from "../../pages/fisqual/images/hero.png"; 
import trunksHero from "../../pages/trunks/images/hero.png"; 
  

var images = {
    default: defaultHero,
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
                    <img src={images[props.currentHover]} alt=""/>
                </figure>
                <div className="hero__txt">
                    <div className="marquee__wrap">
                        <Marquee
                        direction = "left"
                        children ="Booty"
                        delay="0"
                        speed ="0.2">
                        {Constants[props.currentHover].heroTitle}
                        </Marquee>
                    </div>
                </div>
            </section>
        </Fade>
    </>
);  