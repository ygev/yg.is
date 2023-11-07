import React from "react";
import { useState } from 'react'
import "./more.css";
import "../../css/normalize.css";
import "../../css/global.css";
import { Constants } from "../../constants"
import { Link } from "gatsby"
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility';
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

var projectNames = ['cluse', 'ditto', 'semaphore', 'trunks', 'phisher']

function buildMoreProjects(projects) {
    var moreProjects = [];
    for (var i = 0; i < projectNames.length; i++) {
        moreProjects.push(
            <Link to={projectNames[i]}>
                <figure className="more__item">
                    <img className="more__img" src={images[projectNames[i]]} alt="" />
                    <figcaption className="more__title">{projects[projectNames[i]].heroTitle}</figcaption>
                    <h4 className="more__head">{projects[projectNames[i]].heroYear} · {projects[projectNames[i]].heroDeliverable}</h4>
                </figure>
            </Link>
        );
    }
    return moreProjects
}

const MoveStuffAround = () => {
    const [pageIsVisible, setPageIsVisible] = useState(true)

    const handleVisibilityChange = (isVisible) => {
        setPageIsVisible(isVisible)
    }

    return (
        <>
            <section className="more">
                {/* <h4 className="more__head">Check Out More</h4> */}
                <PageVisibility onChange={handleVisibilityChange}>
                    {pageIsVisible && (
                        < Ticker>
                            {({ index }) => (
                                <div className="more__group">
                                    {buildMoreProjects(Constants)}
                                </div>
                            )}
                        </Ticker>
                    )}
                </PageVisibility>
            </section>
        </>
    )
}

export default MoveStuffAround