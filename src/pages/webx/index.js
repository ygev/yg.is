import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";
import Glam1 from "./images/hero.png"; 
import Glam2 from "./images/hero.png"; 
import Glam3 from "./images/hero.png"; 
import Glam4 from "./images/hero.png"; 
import Glam5 from "./images/hero.png"; 
import Glam6 from "./images/hero.png";  
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import More from "../../components/more/more"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"

class Index extends React.Component {
  render() {
    return (
      <div className="webx">
        <SEO title="WebX"/>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.webx.heroCategory}
                    heroYear={Constants.webx.heroYear}
                    heroDeliverable={Constants.webx.heroDeliverable}
                    heroTitle={Constants.webx.heroTitle}
                    heroSummary="Klepto is a Sketch plugin that allows designers to copy CSS font styles from live websites and paste them directly into Sketch."
                    btnGit="View Repository"
                    gitLink="https://github.com/ygev/webx"/>
        </div>
        <Abstract glams={
                    [
                      [Glam1],
                      [Glam2, Glam3],
                      [Glam4, Glam5, Glam6]
                    ]
                  }
                  abstractTeam="Yana Gevorgyan &amp; Blake Quigley"
                  abstractRole="UI Designer · Developer" 
                  abstractTools="Sketch API · CocoaScript · JS" 
                  abstractTime="2 months · Summer 2019" 
                  abstractBody="MICA Phisher is a proof-of-concept phishing site which spoofs Maryland Institute College of Art’s login page. It exposes the relative ease of creating tools to obtain sensitive information from unsuspecting users."/>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

