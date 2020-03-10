import React from "react";
import "./questions.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
    {/* <Fade bottom delay={0} duration={300}> */}
        <div className="gridContainer">
            <section className="questions">
                <article className="questions__section">
                    <h4 className="paragraph__title">
                   {props.questionTitle}
                    </h4>
                    <ol className="questions__list">
                        <li className="questions__item">{props.questionItem1}</li>
                        <li className="questions__item">{props.questionItem2}</li>
                        <li className="questions__item">{props.questionItem3}</li>
                    </ol>
                </article>
            </section>
        </div>
    {/* </Fade> */}
    </>
);  
