import React from "react";
import "./listStats.css";
import "../paragraph/paragraph.css";
import "../imgRight/imgRight.css";
import "../../css/normalize.css";
import "../../css/global.css";

function buildStatList(statNum, statTxt, imgCaption) {
    if (!Array.isArray(statNum)) {
      return <div className="listStats__item--wrapper">   
                <article className="listStats__item">
                    <h1 className="listStats__num">{statNum}</h1>
                    <h2 className="listStats__txt">{statTxt}</h2>
                </article>
                <figcaption className="imgRight__caption">
                        {imgCaption}
                </figcaption>
            </div>  
    } else {
      return Array.from(Array(statNum.length).keys()).map((i) => {
          return <div className="listStats__item--wrapper">   
                    <article className="listStats__item">
                        <h1 className="listStats__num">{statNum[i]}</h1>
                        <h2 className="listStats__txt">{statTxt[i]}</h2>
                    </article>
                    <figcaption className="imgRight__caption">
                            {imgCaption[i]}
                    </figcaption>
                </div>  
      })
    }
  }

export default props => (
    <>
        <div className="gridContainer">
            <section className="listStats">
                {
                    buildStatList(props.statNum, props.statTxt, props.imgCaption)
                }
            </section>
        </div>
    </>
);