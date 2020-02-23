import React from "react"
import "../imgRight/imgRight.css"
import "./imgFull.css"
import "../paragraph/paragraph.css"
import "../../css/normalize.css"
import "../../css/global.css"

export default props => (
    <>
          <figure className="imgFull">
            <img src={props.img} alt="" className="imgFull__img"/>
            <figcaption className="imgRight__caption">
                <span className="imgRight__number">{props.imgNum}</span> {props.imgCaption}
            </figcaption>
          </figure>
    </>
);  
