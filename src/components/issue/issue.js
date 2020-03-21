import React from "react";
import "./issue.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
          <section className="issue">
          <aside className="issue__screen">
            <img className="issue__screen--img" src={props.img} alt=""/>
          </aside>
          <article className="issue__txt">
            <h2 className="issue__title paragraph__title">Bad Information Hierarchy</h2>
            <ul className="issues__quote paragraph__body">
              <li className="issue__quote--item">What were you thinking?</li>
              <li className="issue__quote--item">Are you retarded?</li>
            </ul>
          </article>
          </section>
        </div>
    </>
);  
