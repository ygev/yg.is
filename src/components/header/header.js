import React from "react";
import logo from "../../images/logo.svg" 
import "./header.css"
import "../../css/normalize.css"
import "../../css/global.css"
import Fade from 'react-reveal/Fade';

export default props => (
<Fade left delay={300} duration={500}>
   <div className="wrapper-header">
      <nav>
         <img className="img-logo" src={logo} alt=""></img>
         <section className="header__txt">
         <a className="navlink__active" href="#" alt="">Projects</a>
         <a className="navlink" href="#" alt="">About</a>
         </section>
      </nav>
   </div>
</Fade>
); 