import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";
import Glam1 from "./images/Glam1.png"; 
import Glam2_webm from "./images/Glam2.webm"; 
import Glam2_mp4 from "./images/Glam2.mp4"; 
import Glam3_webm from "./images/Glam3.webm"; 
import Glam3_mp4 from "./images/Glam3.mp4"; 
import Glam4_webm from "./images/Glam4.webm"; 
import Glam4_mp4 from "./images/Glam4.mp4"; 
import Glam5 from "./images/Glam5.png";
import Glam6 from "./images/Glam6.png";
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgRight from "../../components/imgRight/imgRight"
import ImgLeft from "../../components/imgLeft/imgLeft"
import HowMightWe from "../../components/howMightWe/howMightWe"
import Issue from "../../components/issue/issue"
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

const Glam4 = [
  {
    extension: "mp4",
    file: Glam4_mp4
  },
  {
    extension: "webm",
    file: Glam4_webm
  }
]


class Index extends React.Component {
  render() {
    return (
      <div className="ditto">
        <SEO title="Ditto" description="Ditto is a tool that allows designers to copy CSS font styles from live websites and paste them into Sketch. Originally created for the Yext design team by Yana Gevorgyan during her UI Design internship."/>
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
                      [Glam3, Glam5],
                      [Glam6, Glam4],
                      [Glam2]
                    ]
                  }
                  abstractTeam="Yana Gevorgyan &amp; Blake Quigley"
                  abstractRole="UI Designer · Developer" 
                  abstractTools="Sketch API · CocoaScript · JS" 
                  abstractTime="2 months · Summer 2019" 
                  abstractBody="Ditto is a Chrome extension with a companion Sketch plugin that allows designers to copy CSS font styles from live websites and paste them directly into Sketch as Sketch styles. It was created to improve the workflow of the UI Design team at Yext."
                  liveLink="https://ygev.github.io/ditto"/>
        {/* <Tracker  phaseList={['UNDERSTAND', 'ANALYSE', 'DESIGN', 'VALIDATE']}
                  trackerHead={Constants.ditto.heroTitle}/> */}
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

