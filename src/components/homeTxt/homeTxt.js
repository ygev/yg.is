import React from "react";
import "../../css/normalize.css";
import "./homeTxt.css";
import "../../css/global.css";
import { Constants } from "../../constants";
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

function buildProjectLinks(projects, mouseOverCallback) {
    return Array.from(Array(projects.length).keys()).map((i) => {
        return <Link to={projects[i]}>
                        <div className="link__wrapper" onMouseOver={mouseOverCallback}>
                            <h1 className="home__head">{capitalizeFirstLetter(projects[i])}</h1>
                            <h2 className="home__brow">{Constants[projects[i]].heroYear} - {Constants[projects[i]].heroDeliverable}</h2>
                        </div>
                </Link>
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
                <Fade opposite right duration={500}>
                    {
                        buildProjectLinks(props.projects, props.mouseOverCallback)
                    }
                </Fade>
            </section>
        </div>
    </>
);