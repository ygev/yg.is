import React from "react";
import "../../css/normalize.css";
import "./homeTxt.css";
import "../../css/global.css";
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

// todo- this should be created by an array ["Phisher", "Cluse", ...]
export default props => (
    <>
        <section className="home__txt">
            <Fade left delay={300} duration={500}>
                <Link to="">
                    <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Phisher</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Cluse</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Ditto</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Fisqual</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Yext</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Trunks</h1>
                </Link>
            </Fade>
        </section>
    </>
);