import React from "react";
import logo from "../../images/logo.svg" 
import "./header.css"
import "../../css/normalize.css"
import "../../css/global.css"

export default props => (
<div className="wrapper-header">
   <nav>
      <img className="img-logo" src={logo} alt=""></img>
      <a className="navlink__active" href="#" alt="">Projects</a>
      <a className="navlink" href="#" alt="">About</a>
   </nav>
</div>
); 