import React from "react";
import "./listStats.css";
import "../paragraph/paragraph.css";
import "../imgRight/imgRight.css";
import "../../css/normalize.css";
import "../../css/global.css";

function buildList(input) {
    return Array.from(Array(input.length).keys()).map((i) => {
        return <li className="list__item">{input[i]}</li>
    })
}

export default props => (
    <>
        <div className="gridContainer">
            <section className="listStats">
                <div className="listStats__item--wrapper">   
                    <article className="listStats__item">
                        <h1 className="listStats__num">46%</h1>
                        <h2 className="listStats__txt">of respondents note irregular income as the worst part of freelancing.</h2>
                    </article>
                    <figcaption className="imgRight__caption">
                            <span className="imgRight__number">Fig 24</span> Pew Research Center
                    </figcaption>
                </div>  
                <div className="listStats__item--wrapper">   
                    <article className="listStats__item">
                        <h1 className="listStats__num">46%</h1>
                        <h2 className="listStats__txt">of respondents note irregular income as the worst part of freelancing.</h2>
                    </article>
                    <figcaption className="imgRight__caption">
                            <span className="imgRight__number">Fig 24</span> Pew Research Center
                    </figcaption>
                </div>  
                <div className="listStats__item--wrapper">   
                    <article className="listStats__item">
                        <h1 className="listStats__num">46%</h1>
                        <h2 className="listStats__txt">of respondents note irregular income as the worst part of freelancing.</h2>
                    </article>
                    <figcaption className="imgRight__caption">
                            <span className="imgRight__number">Fig 24</span> Pew Research Center
                    </figcaption>
                </div>  
            </section>
        </div>
    </>
);
