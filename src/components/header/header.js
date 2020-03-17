import React from "react";
import logo from "../../images/logo.svg" 
import Logo from "./logo/logo"
import "./header.css"
import "../../css/normalize.css"
import "../../css/global.css"
import {Link} from "gatsby"
import Fade from 'react-reveal/Fade';

export default props => (
<Fade right duration={500}>
   <div className="header__wrapper">
      <nav>
         <Link to="/">
            <Logo className="spinny-logo"/>
            <img className="img-logo" src={logo} alt=""></img>
         </Link>
         <section className="header__txt">
         <Link className="navlink__active" to="">Projects</Link>
         <Link className="navlink" to="">About</Link>
         </section>
      </nav>
   </div>
</Fade>
);