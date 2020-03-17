import React from "react";
import "./imgRight.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
          <figure className="imgRight">

          <div className={ (props.padding ? "imgRight--padding" : "")}>
            <img src={props.img} alt="" className="imgRight__img"/>
          </div>
            <figcaption className="imgRight__caption">
                <span className="imgRight__number">{props.imgNum}</span> {props.imgCaption}
            </figcaption>
          </figure>
        </div>
    </>
);  
