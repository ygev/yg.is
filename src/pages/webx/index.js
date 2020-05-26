import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";
import Glam1 from "./images/Glam1.png"; 
import Glam2_mp4 from "./images/Glam2.mp4"; 
import Glam2_webm from "./images/Glam2.webm"; 
import Glam3_mp4 from "./images/Glam3.mp4"; 
import Glam3_webm from "./images/Glam3.webm"; 
import Glam4 from "./images/Glam4.png";   
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import More from "../../components/more/more"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"

const Glam2 = [
  {
    extension: "mp4",
    file: Glam2_mp4
  },
  {
    extension: "webm",
    file: Glam2_webm
  }
]

const Glam3 = [
  {
    extension: "mp4",
    file: Glam3_mp4
  },
  {
    extension: "webm",
    file: Glam3_webm
  }
]

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
                    heroSummary="Pixelation is an online exhibition of works from the Graphic Design graduating class of 2020 at the Maryland Institute College of Art. It is a two-months long collaboration between 5 graduating seniors."
                    btnGit="View Repository"
                    gitLink="https://github.com/ygev/webx"/>
        </div>
        <Abstract glams={
                    [
                      [Glam1],
                      [Glam2, Glam4],
                      [Glam3]
                    ]
                  }
                  abstractTeam="Yana Gevorgyan · Amanda Yeh · Tony Kim · Zoey Russomano · Anne Xin"
                  abstractRole="Full-Stack Developer" 
                  abstractTools="React · Gatsby" 
                  abstractTime="2 months · Spring 2020" 
                  abstractBody="Historically, MICA's Artwalk Exhibition has been a physical space for viewers to come in and experience in-person degree projects by our graduating class. Due to COVID-19, this pandemic rejuvenated a team of graduating students in the Bachelor's of Fine Arts in Graphic Design program to spearhead, lead, and invent this alternative virtual exhibition for their class."
                  liveLink="https://pixelation.micagraphicdesign.org/"/>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

