import React from "react";
import "./quote.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
    <div className="quote__absoluter">
        <div className="gridContainer">
          <section className="quote">
            <h2 className="quote__text--mark quote__text--mark-line">“</h2>
            <h2 className="quote__text"><span>{props.quote}</span></h2>
            <h2 className="quote__text--mark">”</h2>
          </section>
        </div>
    </div>
    </>
); 