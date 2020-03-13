import React from "react";
import "./imgLeft.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
    <div className="imgLeft__absoluter">
        <div className="gridContainer">
          <figure className="imgLeft">
            <div className={ (props.padding ? "imgLeft--padding" : "")}>
            <img src={props.img} alt="" className="imgLeft__img"/>
            </div>
            <figcaption className="imgLeft__caption">
                <span className="imgLeft__number">Fig {props.imgNum}</span> {props.imgCaption}
            </figcaption>
          </figure>
          </div>
        </div>
    </>
); 