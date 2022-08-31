import React from "react";
import "./contact.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Marquee from ".././marquee/marquee"

export default props => (
    <>
        <section className="contact">
            <h4 className="contact__head">Found elsewhere:
            </h4>
            <div className="btn__contact--wrapper">
                <a target="_blank" rel="noopener noreferrer" href="https://are.na/yana"><button className="btn__contact">Are.Na</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ygev"><button className="btn__contact">GitHub</button></a>
            </div>
        </section>
    </>
);  