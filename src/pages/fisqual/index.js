import React from "react"
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
import Tracker from "../../components/tracker/tracker"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"

class Index extends React.Component {
  render() {
    return (
      <div className="fisqual">
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.fisqual.heroCategory}
                    heroYear={Constants.fisqual.heroYear}
                    heroDeliverable={Constants.fisqual.heroDeliverable}
                    heroTitle={Constants.fisqual.heroTitle}
                    heroSummary="Fisqual is an app that analyzes your bank statements and calculates a stable monthly income from variable earnings."
                    btnGit="View Devpost"
                    gitLink="https://devpost.com/software/fisqual"/>
        </div>
        <Abstract glams={
                    [
                      [Glam1],
                      [Glam2, Glam3],
                      [Glam4, Glam5, Glam6]
                    ]
                  }
                  abstractTeam="Yana Gevorgyan &amp; Amanda Yeh"
                  abstractRole="UX Researcher · UI Designer" 
                  abstractTools="Figma" 
                  abstractTime="24 hours · November 2019" 
                  abstractBody="MICA Phisher is a proof-of-concept phishing site which spoofs Maryland Institute College of Art’s login page. It exposes the relative ease of creating tools to obtain sensitive information from unsuspecting users."/>
        <Tracker  phaseList={['UNDERSTAND', 'DEFINE', 'IDEATE', 'ITERATE', 'VALIDATE']}
                  trackerHead={Constants.fisqual.heroTitle}/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

