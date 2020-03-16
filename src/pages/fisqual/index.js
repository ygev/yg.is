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
import ListStats from "../../components/listStats/listStats"
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
                    paragraphBody="As designers and art students, many of our peers use freelance as their primary form of income. As a result, they are often plagued with considerable anxiety over the variability of their money flow. <<Some months may be ripe with client contracts, others may result in a barren checking account.>> Our first-hand experiences with freelancers pushed Amanda and I to dive deep into the lives of self-employed people. We were inspired to pursue a product-based solution to the struggles faced by people with variable income."/>
          <Paragraph paragraphTitle="Contextual Inquiry" 
                    paragraphBody="To research how widespread this postulated problem may be, we sent out a <<questionnaire>> around the Maryland Institute College of Art, as well as freelancers that were in our professional network on LinkedIn. We received several responses to the following questions posed:"/>
          <List listTitle="" listType='ul'
                listItems={["As a freelancer, how do you manage your income?",
                  "What tools, if any, do you use for budgeting?",
                  "How much time do you spend creating a budget or managing your finances?",
                  "What adjectives run through your head when you think about budgeting?",
                  "How many freelance gigs are you usually working on simultaneously?"
                  ]} />
          <Paragraph paragraphTitle="What Freelancers Say" 
                    paragraphBody="The following are some of the most insightful quotes we have gathered from the aforementioned survey, as well as the interviews."/>
          <List listTitle="" listType='ul'
                listItems={["We spend about 30 minutes budgeting for our week. Cindy and Stuart, Freelance Movie Location Scouts",
                  "Budgeting as a freelancer is definitely stressful, but necessary. I worry about the instability of it. - Katie, Freelance Graphic Designer",
                  "I usually just try to ensure there is some sort of rainy-day fund, and trying to keep my monthly spending in check. - Trevor, Freelance 3D Artist"
                  ]} />
          <Paragraph paragraphTitle="Selected Responder Interviews" 
                    paragraphBody="We picked two interviewers who were most vocal about their habits as freelancers and conducted in depth interviews with them for further insight. Amanda took on Devin, a <<freelance product designer from New York City>>, while I interviewed Katie, a <<freelance graphic designer from rural Maryland.>>"/>
          <Paragraph paragraphTitle="Supplemental Research" 
                      paragraphBody="Additionally, we consulted studies conducted by outside companies on freelance work, and drew the following statistics of significance."/>
          <ListStats />
          <Paragraph paragraphTitle="Market Insight" 
                      paragraphBody="To get a bigger picture for the future of self-employment, we read a study on freelancing conducted by Forbes in 2018. Most statistics pointed to a rapid increase in freelancing within the next decade."/>
          <List listTitle="" listType='ul'
                listItems={["35% of Americans had a freelance gig in 2018",
                "50% of Americans will be freelancing by 2027"
                ]} /> 
        </div>
        <div id="p2">
        <Phase phaseTitle="Gaining Insight on the Sentiment of Managing Finances"/>
        <Paragraph paragraphTitle="Discoveries" 
                      paragraphBody="After conducting questionnaires, interviewing freelance designers and consulting outside sources on the state of self-employment, as well as the future of the market, we concluded the following:"/>
        <List listTitle="" listType='ul'
                listItems={["Freelancers use tools that aren’t designed for financial budgeting.",
                "Freelancers think making a budget is convoluted, stress inducing and time consuming, but feel like it is completely necessary.",
                "Freelancers feel big banks don’t meet their unique needs",
                "The need for freelancers is growing, and there is no one good option for financial management for such a rapidly growing market."
                ]} /> 
        <Paragraph paragraphTitle="User Journey" 
                      paragraphBody="Given the discoveries, we created a user journey for the average freelance project to put our findings onto a centralized timeline and analyze possible pain points associated with self-employment."/>
        <HowMightWe howMightWe="How might we ensure financial wellness for self-employed people with variable incomes?"/>
        </div>
        <div id="p3">
        <Phase phaseTitle="Brainstorming the Scope of the Product"/>
      
        </div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

