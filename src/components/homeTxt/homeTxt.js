import React from "react";
import "../../css/normalize.css";
import "./homeTxt.css";
import "../../css/global.css";
import { Constants } from "../../constants";
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

function buildProjectLinks(input, mouseOverCallback) {
    return Array.from(Array(input.length).keys()).map((i) => {
        return <Link to={input[i]}>
                    <div className="link__wrapper">
                        <h1 className="home__head" onMouseOver={mouseOverCallback}>{capitalizeFirstLetter(input[i])}</h1>
                        <h2 className="home__brow">{Constants[input[i]].heroYear} - {Constants[input[i]].heroDeliverable}</h2>
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