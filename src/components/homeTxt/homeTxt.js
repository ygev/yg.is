import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../../css/normalize.css";
import "./homeTxt.css";
import "../../css/global.css";
import { Constants } from "../../constants";
import Fade from 'react-reveal/Fade';

function buildProjectLinks(projects, mouseOverCallback) {
    return Array.from(Array(projects.length).keys()).map((i) => {
        return <AniLink paintDrip hex="#000000" to={projects[i]}>
                        <div className="link__wrapper" onMouseOver={mouseOverCallback}>
                            <h1 className="home__head">{capitalizeFirstLetter(projects[i])}</h1>
                            <h2 className="home__brow">{Constants[projects[i]].heroYear}</h2>
                        </div>
                </AniLink>
    })
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// todo- this should be created by an array ["Phisher", "Cluse", ...]
export default props => (
    <>
        <div className="home__txt--wrapper">
            <section className="home__txt">
                <Fade opposite duration={500}>
                    {
                        buildProjectLinks(props.projects, props.mouseOverCallback)
                    }
                </Fade>
            </section>
        </div>
    </>
);