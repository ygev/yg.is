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
      <div className="trunks">
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.trunks.heroCategory}
                    heroYear={Constants.trunks.heroYear}
                    heroDeliverable={Constants.trunks.heroDeliverable}
                    heroTitle={Constants.trunks.heroTitle}
                    heroSummary="Trunks is what happens when you chop down a family tree: an ancestry visualization tool inspired by rings on a tree trunk. "
                    btnGit="View Repository"
                    gitLink="https://github.com/ygev/trunks"/>
        </div>
        <Abstract glams={
                    [
                      [Glam1],
                      [Glam2, Glam3],
                      [Glam4, Glam5, Glam6]
                    ]
                  }
                  abstractRole="UI Designer · Developer" 
                  abstractTools="Sqlite.js · E.js · Express.js" 
                  abstractTime="14 days · September 2019" 
                  abstractBody="MICA Phisher is a proof-of-concept phishing site which spoofs Maryland Institute College of Art’s login page. It exposes the relative ease of creating tools to obtain sensitive information from unsuspecting users."/>
        <Tracker  phaseList={['UNDERSTAND', 'DEFINE', 'IDEATE', 'ITERATE', 'VALIDATE']}
                  trackerHead={Constants.phisher.heroTitle}/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

