import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png"; 
import Glam1_webm from "./images/Glam1.webm"; 
import Glam1_mp4 from "./images/Glam1.mp4"; 
import Glam2 from "./images/Glam2.png"; 
import Glam3 from "./images/Glam3.png"; 
import Fig1 from "./images/fig1.png"; 
import Fig2 from "./images/fig2.png"; 
import Fig3 from "./images/fig3.jpg"; 
import Fig4 from "./images/fig4.svg"; 
import Fig5 from "./images/fig5.png";  
import Fig6 from "./images/fig6.png"; 
import Fig13 from "./images/fig13.png";  
import Fig14 from "./images/fig14.png"; 
import Fig15 from "./images/fig15.png"; 
import Fig16 from "./images/fig16.png"; 
import Fig17 from "./images/fig17.png"; 
import Fig18 from "./images/fig18.png"; 
import Fig19 from "./images/fig19.png"; 
import Fig20 from "./images/fig20.png"; 
import Fig21 from "./images/fig21.png"; 
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
import ListQuotes from "../../components/listQuotes/listQuotes"
import ListStats from "../../components/listStats/listStats"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgRight from "../../components/imgRight/imgRight"
import ImgLeft from "../../components/imgLeft/imgLeft"
import ImgFull from "../../components/imgFull/imgFull"
import HowMightWe from "../../components/howMightWe/howMightWe"
import Issue from "../../components/issue/issue"
import More from "../../components/more/more"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"

const Glam1 = [
  {
    extension: "mp4",
    file: Glam1_mp4
  },
  {
    extension: "webm",
    file: Glam1_webm
  }
]

class Index extends React.Component {
  render() {
    return (
      <div className="fisqual">
        <SEO title="Fisqual" description="Fisqual is an app that analyzes your bank statements and calculates a stable monthly income from variable earnings. Winner at Technica 2019 Hackathon 🏆"/>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.fisqual.heroCategory}
                    heroYear={Constants.fisqual.heroYear}
                    heroDeliverable={Constants.fisqual.heroDeliverable}
                    heroTitle={Constants.fisqual.heroTitle}
                    heroSummary="Fisqual is an app that analyzes your bank statements and calculates a stable monthly income from variable earnings. Winner at Technica 2019 Hackathon 🏆"
                   />
        </div>
        <Abstract glams={
                    [
                      [Glam2],
                      [Glam1, Glam3]
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
          <Paragraph paragraphTitle="Preliminary Research" 
                      paragraphBody="Additionally, we consulted studies conducted by outside companies on freelance work, and drew the following statistics of significance."/>
          <ListStats statNum={["46%", "70%", "77%", "63%"]} 
                    statTxt={[
                    "of respondents pointed out irregular income as the worst part of freelancing", 
                    "of freelancers are juggling 2 to 4 projects at the same time", 
                    "of freelancers are less financially stable since ditching their day jobs",
                    "of freelancers withdraw from their savings at least once a month"
                  ]} 
                    imgCaption={[
                    "Paypal · Freelancer Insights Report · 2018", 
                    "And Co. · The Slash Workers · 2017", 
                    "FreshBooks · Freelancer Finance Report", 
                    "Upwork · Freelancing in America · 2017"
                    ]}/>
          <Paragraph paragraphTitle="Market Insight" 
                      paragraphBody="To get a bigger picture for the future of self-employment, we read a study on freelancing conducted by Forbes in 2018. Most statistics pointed to a rapid increase in freelancing within the next decade."/>
          <ImgRight img={Fig4} imgNum="01" imgCaption="Forbes · Are We Ready For A Workforce That is 50% Freelance? · 2018"/>
          <ImgLeft img={Fig1} imgNum="02" imgCaption="Freelancer Financial Habit Assessment" padding="true"/>
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
          <ListQuotes listTitle="" listType='ul'
                listItems={["We spend about 30 minutes budgeting for our week. <<— Cindy and Stuart, Freelance Location Scouts>>",
                  "Budgeting as a freelancer is definitely stressful, but necessary. I often worry about the instability of it. <<— Katie, Freelance Graphic Designer>>",
                  "I usually just try to ensure there is some sort of rainy-day fund, and trying to keep my monthly spending in check. <<— Trevor, Freelance 3D Artist>>",
                  "Using finance apps, I often forget to input hours, add a client, or lose track of expenses because i don't remember to check it. <<—Devin, Freelance Product Designer>>" 
                  ]} />
          <Paragraph paragraphTitle="Selected Responder Interviews" 
                    paragraphBody="We picked two interviewers who were most vocal about their habits as freelancers and conducted in depth interviews with them for further insight. Amanda took on Devin, a <<freelance product designer from New York City>>, while I interviewed Katie, a <<freelance graphic designer from rural Maryland.>>"/>
          <ImgFull img={Fig2} imgNum="03" imgCaption="Selected Responder Interviews"/>
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
        <Paragraph paragraphTitle="Journey Mapping" 
                      paragraphBody="Given the discoveries, we created a journey map for the average freelance project to put our findings onto a centralized timeline and analyze possible pain points associated with self-employment."/>
        <ImgRight img={Fig5} imgNum="04" imgCaption="Analyzing Freelance Processes"/>
        <HowMightWe howMightWe="How might we ensure financial wellness for self-employed people with variable incomes?"/>
        
        </div>
        <div id="p3">
        <Phase phaseTitle="Brainstorming the Scope of the Product"/>
        <ImgLeft img={Fig3} imgNum="05" imgCaption="Amanda compiling the features we've brainstormed on the wall." padding="true"/>
        <Paragraph paragraphTitle="Feature-First Competitive Analysis" 
                    paragraphBody="We decided to conduct a competitive analysis of existing finance management applications to see <<how compatible they are with freelance work>>. The following financial management and budgeting mobile applications were installed and thoroughly researched:"/>
        <List listTitle="" listType='ul'
                      listItems={["<<Acorns>> — invests the user's spare change by rounding up the purchases they make with a linked credit or debit card.",
                      "<<Digit>> — analyzes the user's income and spending patterns, and then automatically dips into the user's checking account and puts a few dollars into a savings account.",
                      "<<Earnin>> — lets the user draw small amounts of your earned wages before payday.",
                      "<<Albert>> — analyzes user's spending and automatically pulls money from a checking account into a savings account.",
                      "<<Even>> — allows the user to get paid on demand and manage their bills.",
                      "<<Qapital>> — directs the user to set savings goals and transfers money from checking to savings.",
                      "<<QuickBooks>> — allows users who own small businesses send invoices, scan receipts and track their business expenses.",
                      "<<Hurdlr>> — helps users track business expenses, income streams, expenses, tax deductions and mileage automatically.",
                      "<<Mint>> — syncs to users bank accounts to help track incoming and outgoing money.",
                      "<<PocketGuard>> — categorizes and organizes expenses, monthly bills and subscriptions into data visualizations."
                      ]} />
         <ImgRight img={Fig6} imgNum="" imgCaption=""/>
        <List listTitle="Common Features Seen Throughout the Tested Mobile Apps" listType='ul'
              listItems={["Analyzing account information automatically.",
              "Displaying the amount of money that is Safe to Spend.",
              "Automatically allocating money to savings accounts.",
              "Functions for small businesses, such as invoices, expenses, profit and mileage tracking.",
              "Overviewing multiple accounts, including a business account.",
              "Getting paid early by collaborating with employers and tracking bills and savings.",
              "Cashing out before payday, payday loans."
              ]} />
        <ImgLeft img={Fig13} imgNum="06" padding="true" imgCaption="The most optimal solution lies at the intersection of centralization, handsfree and adaptability."/>
        <Paragraph paragraphTitle="Narrowing Scope" 
                    paragraphBody="With such a wide spectrum of features, across such a wide spectrum of apps, it is important to keep a narrow scope. With only 24 hours to complete a working prototype and so many possible exploratory paths, we focused on just three principles: centralization, handsfree and adaptability."/>
        <Paragraph paragraphTitle="Feature Downselection" 
                    paragraphBody="Keeping the three principles in mind, we’ve narrowed our list of features to the following:"/>
        <ImgRight img={Fig14} imgNum="07" imgCaption="Features Based on Principles"/>
        </div>
        <div id="p4">
        <Phase phaseTitle="Prototyping an Interface for the Features"/>
        <ImgLeft img={Fig16} imgNum="07" padding="true" imgCaption="Wireframing the main screen."/>
        <Paragraph paragraphTitle="Progress-Centric Layout vs. Timeline Centric Layout" 
                  paragraphBody="A major pivot for the project is whether we want to visualize the data in terms of time or in terms of money. The tree of prototypes below is an exploration of this idea. At the time, the timeline-based view has grown to be more favored by us, because, based on our interviews, freelancers often worded their concerns about living paycheck-to-paycheck."/>
        <ImgRight img={Fig15} imgNum="08" imgCaption="Features Based on Principles"/>
        </div>
        <div id="p5">
        <Phase phaseTitle="Validating the Initial Iteration"/>
        <ImgLeft img={Fig17} imgNum="08" padding="true" imgCaption="User Testing with Technica 2019 Attendees"/>
        <Paragraph paragraphTitle="On-Site User Testing" 
                  paragraphBody="Once the first iteration was completed, Amanda and I seeked out several testers, which there were plenty of in a hackathon setting. We sat down with several volunteers and had them go through the user flow one by one, jotting down any comments they might have. The following issues became apparent after our user tests:"/>
       <Issue img={Fig18} issueTitle="Information Overload" issueItems={["What is the graph representing?", "Where do the small buttons go?", "What does the top number mean?"]}/>
       <Issue img={Fig19} issueTitle="Inconsistent Language" issueItems={["Confused about Savings vs. Taxes word choice", "Confused about Net Income vs. Budget  word choice"]}/>
       <Issue img={Fig20} issueTitle="Unintuitive Information Architecture" issueItems={["Confused about Savings vs. Taxes word choice", "Confused about Net Income vs. Budget  word choice"]}/>
       </div>
        <div id="p6">
        <Phase phaseTitle="Finalizing Design for Judging"/>
        <Paragraph paragraphTitle="Solving Hierarchical Issues" 
                    paragraphBody="After the user tests, we condensed our concepts into fewer screens, cleaned up our copywriting and re-structured the information architecture:"/>
        <ImgFull img={Fig21}/>
        <Paragraph paragraphTitle="Winning the Technica 2019 Hackathon"
                  paragraphBody="After we finalized our changes, we created an animated prototype using Principle and prepared our pitch. During the judging session, we allowed students, mentors and judges alike try out our product. At the end of the hackathon, it was announced that <<Fisqual has won the Best Product for Small Businesses award.>>"/>
        </div>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

