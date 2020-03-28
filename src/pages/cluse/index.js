import React from "react"
import Hero from "./images/hero.png"; 
import Glam1 from "./images/hero.png"; 
import Glam2 from "./images/hero.png"; 
import Glam3 from "./images/hero.png"; 
import Glam4 from "./images/hero.png"; 
import Glam5 from "./images/hero.png"; 
import Glam6 from "./images/hero.png"; 
import Fig1 from "./images/Fig1.png"; 
import Fig2 from "./images/Fig2.png"; 
import Fig3 from "./images/Fig3.gif"; 
import Fig4 from "./images/Fig4.svg"; 
import Fig5 from "./images/Fig5.gif"; 
import Fig6 from "./images/Fig6.png"; 
import Fig7 from "./images/Fig7.png"; 
import Fig8 from "./images/Fig8.png"; 
import Fig9 from "./images/Fig9.svg"; 
import Fig10 from "./images/Fig10.png"; 
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
import Issue from "../../components/issue/issue"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"

class Index extends React.Component {
  render() {
    return (
      <div className="cluse">
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.cluse.heroCategory}
                    heroYear={Constants.cluse.heroYear}
                    heroDeliverable={Constants.cluse.heroDeliverable}
                    heroTitle={Constants.cluse.heroTitle}
                    heroSummary="Cluse is a Sketch Plugin that allows you to test the color contrast of your design for accessibility and make changes without interrupting your workflow."
                    btnGit="View Repository"
                    gitLink="https://github.com/ygev/cluse"/>
        </div>
        <Abstract glams={
                    [
                      [Glam4, Glam5, Glam6]
                    ]
                  }
                  abstractTeam="Yana Gevorgyan"
                  abstractRole="UI Designer · Developer" 
                  abstractTools="Sketch API · JS · Objective C" 
                  abstractTime="3 months · December 2019" 
                  abstractBody="Cluse is a Sketch plugin that serves as a diagnostic tool to ensure that the design meets WCAG 2.0 color contrast standards. To address the lack of an accessibility workflow on design teams, I set out to create a tool that is free, open-source, lightweight and baked into the tools designers use most."
                  liveLink="https://cluse.cc"/>
        <Tracker  phaseList={['UNDERSTAND', 'DEFINE', 'IDEATE', 'ITERATE', 'VALIDATE']}
                  trackerHead={Constants.cluse.heroTitle}/>
        <div id="p1">
          <Phase phaseTitle="The State of Web Accessibility"/>
          <ImgLeft img={Fig1} padding="yes" imgNum="01" imgCaption="The three conformance levels as illustrated by color contrast. The original terminology is inaccurate, in my opinion. Single-A should never be considered Good."/>
          <Paragraph paragraphTitle="What is WCAG?" 
                    paragraphBody="Web Content Accessibility Guidelines, or <<WCAG>>, are a reference for developers and designers to make websites more accessible to people with disabilities. The guidelines outline accessibility best practices, such as alt-text in HTML and recommended line-spacing. <<WCAG evaluates acessibility via three conformance levels, from least to most accessible: A, AA, AAA.>>"/>
          <Paragraph paragraphTitle="You’ve Been Served" 
                    paragraphBody="Since 2017, U.S. Access Board established WCAG as the standard for web accessibility for US businesses. Legal frameworks require websites to meet at least AA WCAG compliance. Many corporations have failed to bring their sites up to standard and have consequently been sued. Below is a list of notable web accessibility lawsuits in the past decade. In every case listed, the defendant paid out large settlements that no doubt put a dent in their profits. For instance, <<Target settled for $6 million.>>"/>
           <List listTitle="Notable Web Accessibility Lawsuits" listType='ul'
                listItems={["<<Netflix:>> National Association for the Deaf v. Netflix, 2012. ", 
                                "<<Winn-Dixie:>> Gil v. Winn-Dixie, 2017.", 
                                "<<Five Guys:>> Markett v. Five Guys Enterprises, 2017",
                                "<<Nike:>> Mendizabal v. Nike, 2017.",
                                "<<Domino’s Pizza:>> Robles v Domino's Pizza, ongoing",
                                "<<Target:>> National Federation of the Blind v. Target Corporation, 2006.",
                                "<<FedEx:>> National Association of the Deaf v. FedEx, 2014",
                                "<<Beyonce:>> Conner v. Parkwood Entertainment, 2019",
                                "<<Blick Art:>> Andrews v. Blick Art Materials, LLC, 2017"]} />
          <ImgRight img={Fig2} padding="yes" imgNum="02" imgCaption="A glaring example of WCAG failure on Kim K's beauty products website. Note the poor color contrast."/>
          <Paragraph paragraphTitle="Corporate View on Accessibility" 
                    paragraphBody="After several legal precedents, designers began to pay more attention to web accessibility. During my time with Yext, I had my share of designing websites for commercial enterprises. As an SEO contractor that used client branding for custom web pages, Yext was wary of getting sued for accessibility issues on their client's behalf. Every team was briefed on the importance of WCAG, especially on websites that are used daily by millions of users. Generally, designers unquestioningly followed brand guides. However, when the client’s brand failed to meet WCAG, we notified them of their failings and proposed changes. This happened often. <<The frequency of WCAG noncompliance signaled to me that accessibility is still not something enterprises keep in mind.>> But why?"/>
          <ImgRight img={Fig6} padding="yes" imgNum="03" imgCaption="Example of Yext's WCAG compliance notification to clients. This is part of a Sketch file that is shown to clients before the hand-off to developers."/>
          <Paragraph paragraphTitle="An Issue of Unresolved Responsibility" 
                    paragraphBody="I have a conjecture regarding the lack of importance placed on accessibility in most teams: it is an issue of unresolved responsibility. Simply put: <<teams are not sure who is responsible for accessibility.>> Is it the copywriters who compose descriptive text? Is it the developers who put in place aria-labels and alt-tags? Although both roles are pivotal, the foundation of accessibility does not lie in writing or code."/>
          <Paragraph paragraphTitle="So where does web accessibility start?" 
                    paragraphBody="The barrier to full accessibility is erected before the developer even fires up his IDE. It is solidified before the copywriter rests his fingers on the keyboard. The key to the pearly gates of accessibility is visual design. Visual designers are the first line of defense against poor contrast, insufficient differentiation between hover states and non-descriptive link text. <<The path to accessibility begins in the designer’s Sketch file.>>"/>
        </div>
        <div id="p1">
          <Phase phaseTitle="Defining the Project's Scope"/>
          <ImgLeft img={[Fig7, Fig8]} imgNum={["04", "05"]} imgCaption={["Proper contrast ratio at 3.82:1 and poor contrast ratio at 1.34:1.", "Passing contrast ratio at 3.02:1, Hex #3396FF, and failing contrast ratio at 2.95:1, Hex #3898FF."]} padding="true"/>
          <Paragraph paragraphTitle="Designers' Biggest Blunder" 
                    paragraphBody="WCAG has a number of criteria geared towards designers. <<The criterium most designers are familiar with is color contrast.>> Because of this familiarity, it is the easiest one to incorporate into your workflow. WCAG use a ratio to determine the sufficiency of color contrast between two elements. For instance, white-on-white would have a ratio of 1:1, whereas black-on-white results in 21:1. The minimum ratio to pass WCAG is 4.5:1. Exceptions apply to what is defined as Large and Bold text. "/>
          <Paragraph paragraphTitle="A Few Hex Values Away" 
                    paragraphBody="It is worthy to mention a curious aside about the nature of color contrast ratings. The difference between passing and not passing WCAG can be a few hex values away. To us, the passing color looks virtually the same as the failing color. To Target, the passing color would save them $6 million."/>
          <ImgRight img={Fig5} imgNum="06" imgCaption="The most commonly used tool in the industry, WebAIM Contrast Checker."/>
          <Paragraph paragraphTitle="Contrast Checks and Workflow" 
                    paragraphBody="During my time on Yext’s consulting team, I’ve observed a well-defined accessibility workflow. All branded assets were rigorously tested for passing color contrast. The team used WebAIM’s online Contrast Checker. I've interviewed visual designers from other companies. I learned that the <<WebAIM Contrast Checker is the most common used tool in the industry>>. It is used by many notable designers, including Studio Rodrigo, the team behind Adobe Fonts. Although this method is the most common, it is the least efficient. Below is a workflow of how each contrast check took place:"/>
          <ImgFull img={Fig3} imgNum="07" imgCaption="Current contrast checking workflow of most design teams: a lot of tabbing back and forth that could be eliminated."/>
          <Paragraph paragraphTitle="" 
                    paragraphBody="Instead of spending up to ten minutes tabbing in-and-out of Chrome and pasting in dozens of HEX codes, one could <<optimize the process using a design accelerator, like a Sketch or Figma plugin.>> If we eliminate all the copy-pasting and tabbing back and forth, this is what the new workflow would look like:"/>
          <ImgFull img={Fig4} imgNum="08" imgCaption="Proposed contrast checking workflow with the use of a built-in design accelerator."/>
          <Paragraph paragraphTitle="Competitive Analysis" 
                    paragraphBody="Thankfully, there are a handful of color contrast plugins. After lurking the Sketch Plugins library, I compiled full chart of accessibility-based Sketch Plugins I've tested, sorted by feature:"/>
          <ImgRight img={Fig9} imgNum="09" imgCaption="Competitive analysis findings of color contrast plugins big and small."/>
          <Paragraph paragraphTitle="Stripping Stark Naked" 
                    paragraphBody="Based on my competitive analysis, Stark is the best Sketch accessibility plugin the internet had to offer. I was most impressed with its clear display of pass/fail ratios and flexibility; in addition to checking text, you could check contrast between two shape layers. <<However, as a premium and proprietary software, it lacked accessibility.>>"/>
          <ImgRight img={Fig10} imgNum="10" imgCaption="Testing Stark's website with Stark's plugin."/>
          <Paragraph paragraphBody="<<None of the plugins suggest substitutes for failing color combinations.>> This is a problem, because it still forces the designer to go back to WebAIM's Contrast Checker to procure passing hex values. <<The workflow remains a   long copy-pasting journey.>> Additionally, no Sketch plugin exists for checking the differentiation in hover states and descriptive link text. "/>
          <HowMightWe howMightWe="How might we develop inclusive design habits for the average Sketch user by optimizing their workflow?"/>
        </div>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

