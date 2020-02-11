import React from "react";
import "./tracker.css";
import "../../css/normalize.css";
import "../../css/global.css";
import { Controller, Scene } from "react-scrollmagic"

export default props => (
    <>
        <Controller>
            <Scene triggerHook="onLeave" pin>
                <section className="tracker">
                    <h4 className="tracker__head">{props.trackerHead} </h4>
                </section>
            </Scene>
        </Controller>

    </>

    
);  
