import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";

import Glam1 from "./images/hero.png";
import Glam2 from "./images/hero.png";
import Glam3 from "./images/hero.png";
import Glam4 from "./images/hero.png";

import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
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


class Index extends React.Component {
  render() {
    return (
      <div className="airtable">
        <SEO title="Airtable" description="" />
        <Header />
        <div className="hero__wrapper">
          <InnerHero img={Hero} />
          <InnerTxt heroCategory={Constants.airtable.heroCategory}
            heroYear={Constants.airtable.heroYear}
            heroDeliverable={Constants.airtable.heroDeliverable}
            heroTitle={Constants.airtable.heroTitle}
            heroSummary="Trunks is an ancestry visualization tool inspired by rings on a tree trunk. "
          />
        </div>

        <Abstract glams={
          [
            [Hero]
          ]
        }
          abstractTeam="Growth · Design Systems · Mobile"
          abstractRole="Product Designer"
          abstractTools="Auditing, Prototyping, A/B Testing"
          abstractTime="2020 – Now"
          abstractBody="This pose-recognition-based game introduces the user to flag semaphore in a fun and competitive way. The player is prompted with a letter and a corresponding pose that they must recreate. As the player completes more rounds, they develop muscle memory and think more quickly about each pose, improving their fluency in flag semaphore. Who knows when they will need it?" />

        <Tracker phaseList={['GROWTH', 'CORE PRODUCT', 'DESIGN SYSTEMS', 'MOBILE', 'CULTURE']}
          trackerHead={Constants.trunks.heroTitle} />
        <div id="p1">
          <Phase phaseTitle="Growth" />
          <ImgLeft img={Hero} padding="" imgNum="01" imgCaption="My Onboarding Wizard drove so much Activation <3" />
          <Paragraph paragraphTitle="Onboarding, Education and Experimental Delight"
            paragraphBody="Responsible for overhauling the entirety of our top of funnel design, from redesigning and re-routing our sign-up flow to conceiving brand new onboarding experiences." />
          <List listTitle="❓ Questions you may want to ask me:" listType='ol'
            listItems={["Are templates best suited as an accelerative or demonstrative activation lever?",
              "What was the most surprising activation lever? How did you discover it, and how did you leverage it?",
              "Descibe the perfect in-product Help surface.",
              "What makes a good wizard? 🪄"
            ]} />
        </div>
        <div id="p2">
          <Phase phaseTitle="Core Product" />
          <ImgLeft img={Hero} padding="" imgNum="01" imgCaption="Onboarding Wizard" />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["Do templates really work?",
              "How ",
              "Sample question"
            ]} />
        </div>
        <More />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Index

