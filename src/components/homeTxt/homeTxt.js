import React from "react";
import "../../css/normalize.css";
import "./homeTxt.css";
import "../../css/global.css";
import { Constants } from "../../constants";
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

// todo- this should be created by an array ["Phisher", "Cluse", ...]
export default props => (
    <>
        <div className="home__txt--wrapper">
            <section className="home__txt">
                <Fade right duration={500}>
                    <Link to="phisher">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Phisher</h1>
                            <h2 className="home__brow">{Constants.phisher.heroYear} - {Constants.phisher.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="cluse">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Cluse</h1>
                            <h2 className="home__brow">{Constants.cluse.heroYear} - {Constants.cluse.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="ditto">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Ditto</h1>
                            <h2 className="home__brow">{Constants.ditto.heroYear} - {Constants.ditto.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="fisqual">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Fisqual</h1>
                            <h2 className="home__brow">{Constants.fisqual.heroYear} - {Constants.fisqual.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="trunks">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Trunks</h1>
                            <h2 className="home__brow">{Constants.trunks.heroYear} - {Constants.trunks.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Trunks</h1>
                            <h2 className="home__brow">{Constants.trunks.heroYear} - {Constants.trunks.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Trunks</h1>
                            <h2 className="home__brow">{Constants.trunks.heroYear} - {Constants.trunks.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Trunks</h1>
                            <h2 className="home__brow">{Constants.trunks.heroYear} - {Constants.trunks.heroDeliverable}</h2>
                        </div>
                    </Link>
                </Fade>
            </section>
        </div>
    </>
);