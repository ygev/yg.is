import React from "react";
import Fade from 'react-reveal/Fade';
import "./abstract.css";
import "../../css/normalize.css"
import "../../css/global.css"
import caret_left from "../../images/inner/caret_left.svg" 


export default props => (
    <>
        <Fade bottom delay={0} duration={300}>
            <section className="abstract">
                <section className="abstract__gallery">
                    <div className="abstract__img--wrapper" data-width="1">
                        <img className="abstract__img"  src={props.Glam1}/>
                    </div>
                    <div className="abstract__img--wrapper" data-width="2">
                        <video className="abstract__img" preLoad="yes" autoplay="autoplay" loop muted playsinline>
                            <source src={props.Glam2} type="video/webm"/>
                        </video>
                        <img className="abstract__img"  src={props.Glam3}/>
                    </div>
                    <div className="abstract__img--wrapper" data-width="3">
                        <img className="abstract__img"  src={props.Glam4}/>                     
                        <img className="abstract__img"  src={props.Glam5}/>
                        <img className="abstract__img"  src={props.Glam6}/>
                    </div>
                </section>
                <section className="abstract__txt--wrapper">
                    <aside className="abstract__txt--left">
                    <section className="abstract__details">
                        <aside className="abstract__head">
                            <h4>Team</h4>
                            <h4>Role</h4>
                            <h4>Tools</h4>
                            <h4>Time</h4>
                        </aside>
                        <aside className="abstract__body">
                            <p>{props.abstractTeam}</p>
                            <p>{props.abstractRole}</p>
                            <p>{props.abstractTools}</p>
                            <p>{props.abstractTime}</p>
                        </aside>
                    </section>
                    <div className="btn__live--wrapper">
                        <button className="btn__live">View Live</button>
                        <span className="btn__live--iconbg"><img className="btn__live--icon" alt="" src={caret_left}/></span>
                    </div>
                </aside>
                    <section className="abstract__txt">
                        <h4 className="abstract__head">Abstract</h4>
                        <p className="abstract__body--paragraph">{props.abstractBody}</p>
                    </section>
                </section>
                <Fade top delay={0} duration={300}>
                <section className="abstract__hint">
                    <h4 className="abstract__head">Read How the Sausage Gets Made</h4>
                    <h4 className="abstract__head abstract__head--arrow">↓</h4>
                </section>
                </Fade>
            </section>
        </Fade>
    </>
);  