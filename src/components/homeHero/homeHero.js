import React from "react";
import "./homeHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';
import Marquee from 'react-double-marquee';
import { Constants } from "../../constants"
import defaultHero from "../../images/hero.webm"
import phisherHero from "../../pages/phisher/images/hero.webm"; 
import cluseHero from "../../pages/cluse/images/hero.webm"; 
import dittoHero from "../../pages/ditto/images/hero.webm"; 
import fisqualHero from "../../pages/fisqual/images/hero.webm"; 
import trunksHero from "../../pages/trunks/images/hero.webm"; 
  

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
                    <video className="home__img--limiter" preload="yes" autoPlay="autoplay" key={images[props.currentHover]} loop muted playsInline>
                        <source src={images[props.currentHover]} type="video/webm"/>
                    </video>
                    <div className="marquee__wrap">
                            <Marquee
                            direction = "left"
                            children ="Booty"
                            delay="0"
                            speed ="0.2">
                            {Constants[props.currentHover].heroTitle}
                            </Marquee>
                    </div>
                </figure>
            </section>
        </Fade>
    </>
);  