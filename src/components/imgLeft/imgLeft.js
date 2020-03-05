import React from "react";
import "./imgRight.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
          <figure className="imgLeft">
            <img src={props.img} alt="" className="imgLeft__img"/>
            <figcaption className="imgLeft__caption">
                <span className="imgLeft__number">{props.imgNum}</span> {props.imgCaption}
            </figcaption>
            
          </figure>
        </div>
    </>
);  
