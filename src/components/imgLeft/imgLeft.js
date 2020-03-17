import React from "react";
import "./imgLeft.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

function buildImageList(img, imgNum, imgCaption, padding) {
  if (!Array.isArray(img)) {
    return <div className="gridContainer">
              <figure className="imgLeft">
              <div className={ (padding ? "imgLeft--padding" : "")}>
                <img src={img} alt="" className="imgLeft__img"/>
              </div>
              <figcaption className="imgLeft__caption">
                  <span className="imgLeft__number">{imgNum}</span> {imgCaption}
              </figcaption>
            </figure>
          </div>
  } else {
    return Array.from(Array(img.length).keys()).map((i) => {
        return <div className="gridContainer">
                <figure className="imgLeft">
                  <div className={ (padding ? "imgLeft--padding" : "")}>
                    <img src={img[i]} alt="" className="imgLeft__img"/>
                  </div>
                  <figcaption className="imgLeft__caption">
                      <span className="imgLeft__number">{imgNum[i]}</span> {imgCaption[i]}
                  </figcaption>
                </figure>
              </div>
    })
  }
}

export default props => (
    <>
      <div className="imgLeft__absoluter">
        {
          buildImageList(props.img, props.imgNum, props.imgCaption, props.padding)
        }
      </div>
    </>
); 