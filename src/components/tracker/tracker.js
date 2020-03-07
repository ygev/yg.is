import React from "react";
import "./tracker.css";
import "../../css/normalize.css";
import "../../css/global.css";
import logo from "../../images/logo.svg" 
import { Controller, Scene } from "react-scrollmagic"
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade bottom duration={300}>
            <Controller>
                <Scene triggerHook="onLeave" pin>
                    <section className="pinned">
                        <div className="tracker">
                            <img className="tracker__logo" src={logo} alt=""/>
                            <h4 className="tracker__head">{props.trackerHead} </h4>
                        </div>
                        <div className="phases">
                            {
                                Array.from(Array(props.phaseList.length).keys()).map((i) => {
                                    return <Controller>
                                        <Scene duration={() => { if (document.getElementById('p' + (i+1)) != null) return document.getElementById('p' + (i+1)).clientHeight } }
                                                    classToggle="phases__active" triggerElement={'#p' + (i+1)}>
                                            <h3 className="phases__txt">PHASE {i+1}: {props.phaseList[i]}</h3>
                                        </Scene>
                                    </Controller>;
                                })
                            }
                        </div>
                    </section>
                </Scene>
            </Controller>
        </Fade>
    </>

);  
