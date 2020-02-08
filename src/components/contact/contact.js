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
                <button className="btn__contact">LinkedIn</button>
                <button className="btn__contact">Resume</button>
            </div>
            <p className="contact__disclaimer">All information in the projects is my own and does not necessarily reflect the views of respective companies. All projects comply to NDA.</p>
        </section>
    </>
);  