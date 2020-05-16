import React from "react";
import Fade from 'react-reveal/Fade';
import "./abstract.css";
import "../../css/normalize.css"
import "../../css/global.css"
import caret_left from "../../images/inner/caret_left.svg" 

function buildImgWrapperDiv(listOfSrc) {
    return Array.from(Array(listOfSrc.length).keys()).map((i) => {
        if (Array.isArray(listOfSrc[i])){
            var videoSources = [];
            for(var j = 0; j < listOfSrc[i].length; j++){
                if (listOfSrc[i][j].extension === "webm"){
                    videoSources.push(<source src={listOfSrc[i][j].file} type="video/webm"/>)
                }
                else if (listOfSrc[i][j].extension === "mp4"){
                    videoSources.push(<source src={listOfSrc[i][j].file} type="video/mp4"/>)
                }
            }
            return <video className="abstract__img" preload="yes" autoPlay="autoplay" loop muted playsInline>{videoSources}</video>
        }
        else {
            return <img alt="" className="abstract__img" src={listOfSrc[i]}/>
        }
    })
}

function buildGallery(listOfLists) {
    return Array.from(Array(listOfLists.length).keys()).map((i) => {
        return <div className="abstract__img--wrapper" data-width={listOfLists[i].length}>
            {buildImgWrapperDiv(listOfLists[i])}
        </div>
    })
}

export default props => (
    <>
        <section className="abstract">
            <section className="abstract__gallery">
                {buildGallery(props.glams)}
            </section>
            <section className="abstract__txt--wrapper">
                <aside className="abstract__txt--left">
                <section className="abstract__details">
                    <aside className="abstract__head">
                        {props.abstractTeam ? <h4>Team</h4> : ""}
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
                {props.liveLink ? 
                    <a target="_blank" rel="noopener noreferrer" href={props.liveLink}>
                        <div className="btn__live--wrapper">
                            <button className="btn__live">View Live</button>
                            <span className="btn__live--iconbg"><img className="btn__live--icon" alt="" src={caret_left}/></span>
                        </div>
                    </a> 
                : ""}
            </aside>
                <section className="abstract__txt">
                    <h4 className="abstract__head">Abstract</h4>
                    <p className="abstract__body--paragraph">{props.abstractBody}</p>
                </section>
            </section>
            {/* <Fade top delay={0} duration={300}>
            <section className="abstract__hint">
                <h4 className="abstract__head">Learn More</h4>
                <h4 className="abstract__head abstract__head--arrow">↓</h4>
            </section>
            </Fade> */}
        </section>
    </>
);  