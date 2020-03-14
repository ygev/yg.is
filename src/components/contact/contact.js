import React from "react";
import "./contact.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <section className="contact">
            <h4 className="contact__head">Feel free to say hi!
            </h4>
            <div className="btn__contact--wrapper">
                <a href="mailto:ygis@mit.edu"><button className="btn__contact">ygis@mit.edu</button></a>
                <a href="https://linkedin.com/in/ygevorgyan"><button className="btn__contact">LinkedIn</button></a>
                <a href="https://github.com/ygev"><button className="btn__contact">GitHub</button></a>
                <a href="https://are.na/yana"><button className="btn__contact">Are.Na</button></a>
            </div>
        </section>
    </>
);  