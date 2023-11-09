import React from "react";
import logo from "../../images/logo.svg"
import Logo from "./logo/logo"
import "./header.css"
import "../../css/normalize.css"
import "../../css/global.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default props => (
   <div className="header__wrapper">
      <nav className={props.className}>
         <AniLink paintDrip hex="#000" to="/" onMouseOver={props.mouseOverCallback}>
            <Logo className="spinny-logo" />
            <img className="img-logo" src={logo} alt=""></img>
         </AniLink>
         <section className="header__txt navlink">
            Yana Gevorgyan
         </section>
      </nav>
   </div>
);