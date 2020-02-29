import React from "react";
import "./homeHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade left duration={500}>
            <section className={"home__hero " + props.currentHover}>
                {props.currentHover}
                <br />

                img... set source to {props.currentHover}.png
                <br />
                div... set class/id to #{props.currentHover}
                <br />


            </section>
        </Fade>
    </>
);  