import React from "react";
import "./abstract.css";
import "../../css/normalize.css"
import "../../css/global.css"
import glamor from "../../images/inner/glamor-shot.png" 
import caret_left from "../../images/inner/caret_left.svg" 

export default props => (
    <>
        <section className="abstract">
            <img className="img-glamor" src={glamor} alt=""/>
            <section className="abstract__txt--wrapper">
                <aside className="abstract__txt--left">
                <section className="abstract__details">
                    <aside className="abstract__head">
                        <h4>Role</h4>
                        <h4>Tools</h4>
                        <h4>Time</h4>
                    </aside>
                    <aside className="abstract__body">
                        <p>{props.abstractRole}</p>
                        <p>{props.abstractTools}</p>
                        <p>{props.abstractTime}</p>
                    </aside>
                </section>
                <div className="btn__live--wrapper">
                    <button className="btn__live">See It In Action</button>
                    <span className="btn__live--iconbg"><img alt="" src={caret_left}/></span>
                </div>
              </aside>
                <section className="abstract__txt">
                    <h4 className="abstract__head">Abstract</h4>
                    <p className="abstract__body--paragraph">{props.abstractBody}</p>
                </section>
            </section>
        </section>
    </>
);  