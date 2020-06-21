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
      <div className="madlads">
        <SEO title="MadLads"/>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.madlads.heroCategory}
                    heroYear={Constants.madlads.heroYear}
                    heroDeliverable={Constants.madlads.heroDeliverable}
                    heroTitle={Constants.madlads.heroTitle}
                    heroSummary="MadLads is an award-winning phrasal template word game with image recognition. Not your grandmother's Mad Libs game. Winner at BitCamp 2019 🏆"
                  />
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
                  abstractTools="imageClassifier( ) · p5.speech( ) · JS" 
                  abstractTime="48 hours · April 2019" 
                  abstractBody="Created at the BitCamp hackathon in 36 hours, MadLads is a mobile web app reinvention of the famous phrasal template word game called Mad Libs, in which a player is prompted to fill in blanks to create a custom story. In order to pick a sufficiently out-of-context word for the blanks, the user takes a photo of an object, which is then recognized and inputted into a list. After choosing up to five words, the user is presented with the crafted story, often humorous."
                  gitLink="https://github.com/ygev/madlads"/>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

