import React from "react";
import logo from "../../images/logo.svg" 
import Logo from "./logo/logo"
import "./header.css"
import "../../css/normalize.css"
import "../../css/global.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from 'react-reveal/Fade';

export default props => (
   <Fade delay={100} duration={1000}>
      <div className="header__wrapper">
         <nav>
            <AniLink paintDrip hex="#000" to="/" onMouseOver={props.mouseOverCallback}>
               <Logo className="spinny-logo"/>
               <img className="img-logo" src={logo} alt=""></img>
            </AniLink>
            <section className="header__txt navlink">
            Yana G.
            </section>
         </nav>
      </div>
   </Fade>
);