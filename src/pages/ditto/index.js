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
import Tracker from "../../components/tracker/tracker"
import More from "../../components/more/more"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"

class Index extends React.Component {
  render() {
    return (
      <div className="ditto">
        <SEO title="Ditto"/>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.ditto.heroCategory}
                    heroYear={Constants.ditto.heroYear}
                    heroDeliverable={Constants.ditto.heroDeliverable}
                    heroTitle={Constants.ditto.heroTitle}
                    heroSummary="Ditto is a tool that allows designers to copy CSS font styles from live websites and paste them into Sketch."
                    btnGit="View Repository"
                    gitLink="https://github.com/ygev/klepto"/>
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
                  abstractBody="Ditto is a Chrome extension with a companion Sketch plugin that allows designers to copy CSS font styles from live websites and paste them directly into Sketch as Sketch styles. It was created to improve the workflow of the UI Design team at Yext."
                  liveLink="https://ygev.github.io/ditto"/>
        <Tracker  phaseList={['UNDERSTAND', 'ANALYSE', 'DESIGN', 'VALIDATE']}
                  trackerHead={Constants.ditto.heroTitle}/>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

