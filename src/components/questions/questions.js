import React from "react";
import "./questions.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <div className="gridContainer">
            <section className="questions">
                <article className="questions__section">
                    <h4 className="paragraph__title">
                    Research Questions
                    </h4>
                    <ol className="questions__list">
                        <li className="questions__item">{props.questionItem1}</li>
                        <li className="questions__item">{props.questionItem2}</li>
                        <li className="questions__item">{props.questionItem3}</li>
                    </ol>
                </article>
            </section>
        </div>
    </>
);  
