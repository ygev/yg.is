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
      <div className="semaphore">
        <SEO title="Learn Semaphore"/>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.semaphore.heroCategory}
                    heroYear={Constants.semaphore.heroYear}
                    heroDeliverable={Constants.semaphore.heroDeliverable}
                    heroTitle={Constants.semaphore.heroTitle}
                    heroSummary="Say No More! is an award-winning AI game that aims to teach more people about flag-based maritime communication. Winner at UMBC 2019 Hackathon 🏆"
                    btnGit="View Repository"
                    gitLink="https://github.com/ygev/semaphore"/>
        </div>
        <Abstract glams={
                    [
                      [Glam1],
                      [Glam2, Glam3],
                      [Glam4, Glam5, Glam6]
                    ]
                  }
                  abstractTeam="Yana Gevorgyan &amp; Amanda Yeh"
                  abstractRole="Primary Developer · Support UI Designer" 
                  abstractTools="poseNet( ) · JS · Figma" 
                  abstractTime="24 hours · October 2019" 
                  abstractBody="This pose-recognition-based game introduces the user to flag semaphore in a fun and competitive way. The player is prompted with a letter and a corresponding pose that they must recreate. As the player completes more rounds, they develop muscle memory and think more quickly about each pose, improving their fluency in flag semaphore. Who knows when they will need it?"/>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

