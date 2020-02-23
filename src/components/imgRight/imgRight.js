import React from "react";
import "./imgRight.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
          <figure className="imgRight">
            <img src={props.img} alt="" className="imgRight__img"/>
            <figcaption className="imgRight__caption">
                <span className="imgRight__number">{props.imgNum}</span> {props.imgCaption}
            </figcaption>
          </figure>
        </div>
    </>
);  
