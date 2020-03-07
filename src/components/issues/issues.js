import React from "react";
import "./issues.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
          <ul className="issues__list">
              <li className="issues__list--issue"><span className="issues__list--title">{props.issue}</span></li>
          </ul>
          <aside className="issues__screen">
            <img className="issues__screen--img" src={props.img} alt=""/>
          </aside>
        </div>
    </>
);  
