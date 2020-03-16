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
                            <span className="imgRight__number">Fig 24</span> PayPal · 2018 Freelancer Insights Report
                    </figcaption>
                </div>  
                <div className="listStats__item--wrapper">   
                    <article className="listStats__item">
                        <h1 className="listStats__num">70%</h1>
                        <h2 className="listStats__txt">of freelancers have a business relationship with a bank</h2>
                    </article>
                    <figcaption className="imgRight__caption">
                            <span className="imgRight__number">Fig 24</span> And Co · The Slash Workers Study
                    </figcaption>
                </div>  
                <div className="listStats__item--wrapper">   
                    <article className="listStats__item">
                        <h1 className="listStats__num">63%</h1>
                        <h2 className="listStats__txt">of freelancers withdraw from their savings at least once a month</h2>
                    </article>
                    <figcaption className="imgRight__caption">
                            <span className="imgRight__number">Fig 24</span> FreshBooks · Freelancer Finance Report 
                    </figcaption>
                </div>  
            </section>
        </div>
    </>
);
