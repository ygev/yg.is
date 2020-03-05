import React from "react";
import "./howMightWe.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
          <section className="howMightWe">
            <h3 className="howMightWe__head">Design Challenge</h3>
            <p className="howMightWe__txt">{props.howMightWe}</p>
          </section>
    </>
);  
