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
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Decred</h1>
                            <h2 className="home__brow">{Constants.decred.heroYear} - {Constants.decred.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>AVAM</h1>
                            <h2 className="home__brow">{Constants.avam.heroYear} - {Constants.avam.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Semaphore</h1>
                            <h2 className="home__brow">{Constants.semaphore.heroYear} - {Constants.semaphore.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Bitshit</h1>
                            <h2 className="home__brow">{Constants.bitshit.heroYear} - {Constants.bitshit.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>MadLads</h1>
                            <h2 className="home__brow">{Constants.madlads.heroYear} - {Constants.madlads.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Carpets</h1>
                            <h2 className="home__brow">{Constants.carpets.heroYear} - {Constants.carpets.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Lissitzky</h1>
                            <h2 className="home__brow">{Constants.lissitzky.heroYear} - {Constants.lissitzky.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>Spiral</h1>
                            <h2 className="home__brow">{Constants.spiral.heroYear} - {Constants.spiral.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>ARTECA</h1>
                            <h2 className="home__brow">{Constants.arteca.heroYear} - {Constants.arteca.heroDeliverable}</h2>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="link__wrapper">
                            <h1 className="home__head" onMouseOver={props.mouseOverCallback}>TarPits</h1>
                            <h2 className="home__brow">{Constants.tarpits.heroYear} - {Constants.tarpits.heroDeliverable}</h2>
                        </div>
                    </Link>
                </Fade>
            </section>
        </div>
    </>
);