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
                            <Controller>
                                <Scene  duration={() => { if (document.getElementById('p1') != null) return document.getElementById('p1').clientHeight } }
                                        classToggle="phases__active" triggerElement="#p1" indicators={true}>
                                    <h3 className="phases__txt">PHASE 1: BOOBIE</h3>
                                </Scene>
                            </Controller>
                            <Controller>
                                <Scene  duration={() => { if (document.getElementById('p2') != null) return document.getElementById('p2').clientHeight } }
                                        classToggle="phases__active" triggerElement="#p2" indicators={true}>
                                    <h3 className="phases__txt">PHASE 2: BOOBIE</h3>
                                </Scene>
                            </Controller>                            
                            <Controller>
                                <Scene  duration={() => { if (document.getElementById('p3') != null) return document.getElementById('p3').clientHeight } }
                                        classToggle="phases__active" triggerElement="#p3" indicators={true}>
                                    <h3 className="phases__txt">PHASE 3: BOOBIE</h3>
                                </Scene>
                            </Controller>                            
                            <Controller>
                                <Scene  duration={() => { if (document.getElementById('p4') != null) return document.getElementById('p4').clientHeight } }
                                        classToggle="phases__active" triggerElement="#p4" indicators={true}>
                                    <h3 className="phases__txt">PHASE 4: BOOBIE</h3>
                                </Scene>
                            </Controller>                            
                            <Controller>
                                <Scene  duration={() => { if (document.getElementById('p5') != null) return document.getElementById('p5').clientHeight } }
                                        classToggle="phases__active" triggerElement="#p5" indicators={true}>
                                    <h3 className="phases__txt">PHASE 5: BOOBIE</h3>
                                </Scene>
                            </Controller>
                            <Controller>
                                <Scene  duration={() => { if (document.getElementById('p6') != null) return document.getElementById('p6').clientHeight } }
                                        classToggle="phases__active" triggerElement="#p6" indicators={true}>
                                    <h3 className="phases__txt">PHASE 6: BOOBIE</h3>
                                </Scene>
                            </Controller>
                        </div>
                    </section>
                </Scene>
            </Controller>
        </Fade>
    </>

    
);  
