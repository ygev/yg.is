import React from "react";
import "./homeHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';
import { Constants } from "../../constants"
import defaultHero from "../../images/hero.gif"
import phisherHero from "../../pages/phisher/images/hero.png";
import cluseHero from "../../pages/cluse/images/hero.png";
import dittoHero from "../../pages/ditto/images/hero.png";
import trunksHero from "../../pages/trunks/images/hero.png";
import semaphoreHero from "../../pages/semaphore/images/hero.png";

var images = {
    default: defaultHero,
    phisher: phisherHero,
    cluse: cluseHero,
    ditto: dittoHero,
    semaphore: semaphoreHero,
    trunks: trunksHero
}

export default props => (
    <>
        <section className={"home__hero " + props.currentHover} >
            <figure className="home__img">
                <img className="home__img--limiter" src={images[props.currentHover]} />
            </figure>
        </section>
    </>
);  