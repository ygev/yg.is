import React from "react";
import "./tracker.css";
import "../../css/normalize.css";
import "../../css/global.css";
import logo from "../../images/logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Controller, Scene } from "react-scrollmagic"

function computeDuration(i) {
    if (typeof document !== `undefined`) {
        if (document.getElementById('p' + (i+1)) != null) {
            return document.getElementById('p' + (i+1)).clientHeight;
        }
    }
}

export default props => (
    <>
        <Controller>
            <Scene triggerHook="onLeave" pin>
                <section className="pinned">
                    <div className="tracker">
                        <AniLink paintDrip hex="#000" to="/"><img className="tracker__logo" src={logo} alt=""/></AniLink>
                        <h4 className="tracker__head">{props.trackerHead} </h4>
                    </div>
                    <div className="phases">
                        {
                            Array.from(Array(props.phaseList.length).keys()).map((i) => {
                                return <Controller>
                                    <Scene duration={computeDuration(i)}
                                                classToggle="phases__active" triggerElement={'#p' + (i+1)}>
                                        <h3 className="phases__txt">{props.phaseList[i]}</h3>
                                    </Scene>
                                </Controller>;
                            })
                        }
                    </div>
                </section>
            </Scene>
        </Controller>
    </>

);

// PHASE {i+1}: add this to "phases__txt if you want phases..."
