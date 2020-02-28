import React from "react";
import "../../css/normalize.css";
import "./homeTxt.css";
import "../../css/global.css";
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <section className="home__txt">
            <Fade left delay={300} duration={500}>
                <Link to="">
                    <h1 className="home__head">Phisher</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head">Cluse</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head">Ditto</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head">Fisqual</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head">Yext</h1>
                </Link>
                <Link to="">
                    <h1 className="home__head">Trunks</h1>
                </Link>
            </Fade>
        </section>
    </>
);  