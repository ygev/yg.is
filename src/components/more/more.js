import React from "react";
import "./more.css";
import "../../css/normalize.css";
import "../../css/global.css";
import { Constants } from "../../constants"
import { Link } from "gatsby"
import Ticker from 'react-ticker'
import defaultHero from "../../images/hero.gif"
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

var projectNames= ['cluse', 'trunks', 'fisqual', 'phisher']

function buildMoreProjects(projects){
    var moreProjects = [];
    for (var i=0; i < projectNames.length; i++){
        moreProjects.push(
                <Link to={projects[projectNames[i]]}>
                    <figure className="more__item">
                        <img className="more__img" src={images[projectNames[i]]} alt=""/>
                        <figcaption className="more__title">{projects[projectNames[i]].heroTitle}</figcaption>
                        <h4 className="more__head">{projects[projectNames[i]].heroYear} - {projects[projectNames[i]].heroDeliverable}</h4>
                    </figure>
                </Link>
        );
    }
    return moreProjects
}

export default props => (
    <>
        <section className="more">
            {/* <h4 className="more__head">Check Out More</h4> */}
            < Ticker>
            {({ index }) => (
                <div className="more__group">
                    {buildMoreProjects(Constants)}                  
                </div>
             )}
            </Ticker>  
        </section>
    </>
);  


