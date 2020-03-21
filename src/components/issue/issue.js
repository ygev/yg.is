import React from "react";
import "./issue.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

function buildList(input) {
  return Array.from(Array(input.length).keys()).map((i) => {
      return <li className="issue__quote--item">{input[i]}</li>
  })
}

export default props => (
    <>
        <div className="gridContainer">
          <section className="issue">
          <aside className="issue__screen">
            <img className="issue__screen--img" src={props.img} alt=""/>
          </aside>
          <article className="issue__txt">
            <h2 className="issue__title paragraph__title">{props.issueTitle}</h2>
            <ul className="issues__quote paragraph__body">{buildList(props.issueItems)}
            </ul>
          </article>
          </section>
        </div>
    </>
);  
