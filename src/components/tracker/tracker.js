import React from "react";
import "./tracker.css";
import "../../css/normalize.css";
import "../../css/global.css";
import up from "../../images/inner/up.svg"; 

export default props => (
    <>
    <section className="tracker">
        <h4 className="tracker__head">{props.trackerHead} </h4>
        <img src={up} className="tracker__icon" alt=""/>
    </section>
    </>

    
);  
