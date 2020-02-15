import React from "react";
import "../paragraph/paragraph.css";
import "./bullet.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
            <section className="paragraph--bullet">
                <article className="paragraph__section--bullet">
                    <p className="paragraph__body">
                    {props.bulletBody} 
                    </p>
                </article>
            </section>
        </div>
    </>
);  
