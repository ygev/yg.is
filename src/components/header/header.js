import React from "react";
import logo from "../../images/logo.svg" 
import Logo from "./logo/logo"
import "./header.css"
import "../../css/normalize.css"
import "../../css/global.css"
import Fade from 'react-reveal/Fade';
import {Link} from "gatsby"

export default props => (
<Fade right duration={500}>
   <div className="header__wrapper">
      <nav>
        <Logo className="spinny-logo"/>
         <img className="img-logo" src={logo} alt=""></img>
         <section className="header__txt">
         <Link className="navlink__active" to="">Projects</Link>
         <Link className="navlink" to="">About</Link>
         </section>
      </nav>
   </div>
</Fade>
); 