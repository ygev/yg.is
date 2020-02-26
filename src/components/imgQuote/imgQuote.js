import React from "react";
import "./imgQuote.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
          <figure className="imgQuote__fig">
            <img src={props.img} alt="" className="imgQuote__img"/>
          </figure>
          <section className="imgQuote__bg">
          “Never needed extra security, so it’s totally unnecessary to me.”
          </section>
        </div>
    </>
);  
