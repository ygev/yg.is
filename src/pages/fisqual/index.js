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
import List from "../../components/list/list"
import Quote from "../../components/quote/quote"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgRight from "../../components/imgRight/imgRight"
import ImgLeft from "../../components/imgLeft/imgLeft"
import ImgFull from "../../components/imgFull/imgFull"
import HowMightWe from "../../components/howMightWe/howMightWe"
import Issues from "../../components/issues/issues"
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
                    devpostLink="https://devpost.com/software/fisqual"/>
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
                  abstractBody="Fisqual is a tool that empowers freelancers and small businesses to feel financially secure in their independent ventures. The app analyzes freelancers’ income and spending history and calculates a stable monthly income from variable earnings."/>
        <Tracker  phaseList={['UNDERSTAND', 'ANALYZE', 'BRAINSTORM', 'PROTOTYPE', 'VALIDATE','POST-VALIDATION']}
                  trackerHead={Constants.fisqual.heroTitle}/>
        <div id="p1">
          <Phase phaseTitle="Empathizing with Self-Employment"/>
          <Paragraph paragraphTitle="The Starving Artist" 
                    paragraphBody="As designers and art students, many of our peers use freelance as their primary form of income. As a result, they are often plagued with considerable anxiety over the variability of their money flow. Some months may be ripe with client contracts, others may result in a barren checking account. Our first-hand experiences with freelancers pushed Amanda and I to dive deep into the lives of self-employed people. We were inspired to pursue a product-based solution to the struggles people with variable incomes may face."/>
           <Paragraph paragraphTitle="Surveying Freelancers" 
                    paragraphBody="To research how widespread this postulated problem may be, we sent out a questionnaire around the Maryland Institute College of Art, as well as freelancers that were in our professional network on LinkedIn. We received 20+ responses to the following questions posed:"/>
          <List listTitle="" listType='ul'
                listItems={["As a freelancer, how do you manage your income?",
                  "What tools, if any, do you use for budgeting?",
                  "How much time do you spend creating a budget or managing your finances?",
                  "What adjectives run through your head when you think about budgeting?",
                  "How many freelance gigs are you usually working on simultaneously?"
                  ]} />
        </div>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

