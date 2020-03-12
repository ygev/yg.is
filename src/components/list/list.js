import React from "react";
import "./list.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";

function buildList(input) {
    return Array.from(Array(input.length).keys()).map((i) => {
        return <li class="list__item">{input[i]}</li>
    })
}

export default props => (
    <>
        <div className="gridContainer">
            <section className="list">
                <article className="list__section">
                    <h4 className="paragraph__title">
                        {props.listTitle}
                    </h4>
                    {
                        props.listType == 'ol'
                            ? <ol className="list__items list__ordered">{buildList(props.listItems)}</ol>
                            : <ul className="list__items list__unordered">{buildList(props.listItems)}</ul>
                    }
                </article>
            </section>
        </div>
    </>
);
