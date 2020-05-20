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
        <SEO title="Pixelation"/>
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
                  abstractTeam="Yana Gevorgyan · Amanda Yeh · Tony Kim · Zoey Russomano · Anne Xin"
                  abstractRole="Full-Stack Developer" 
                  abstractTools="React · Gatsby" 
                  abstractTime="2 months · Spring 2020" 
                  abstractBody="Historically, MICA's Artwalk Exhibition has been a physical space for viewers to come in and experience in-person degree projects by our graduating class. Due to COVID-19, this pandemic rejuvenated a team of graduating students in the Bachelor's of Fine Arts in Graphic Design program to spearhead, lead, and invent this alternative virtual exhibition for their class."/>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

