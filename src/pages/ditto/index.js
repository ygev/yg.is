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
import Fig1 from "./images/Fig1.png";
import Fig2 from "./images/Fig2.svg";
import Fig3 from "./images/Fig3.svg";
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
import ImgFull from "../../components/imgFull/imgFull"
import List from "../../components/list/list"
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
        <Tracker  phaseList={['UNDERSTAND', 'DEFINE', 'DECIDE', 'PROTOTYPE', 'VALIDATE']}
                  trackerHead={Constants.ditto.heroTitle}/>
        <div id="p1">
          <Phase phaseTitle="Understanding a Unique Use Case"/>
          <Paragraph paragraphTitle="Designing Backwards" 
                    paragraphBody="Normally, product prototyping tools like Sketch and Figma are used to create designs that will end up on the web, rather than copying what is on the web into the prototype. However, this use case exists, and I was tasked with creating a tool that performs this workflow more efficiently, using my skillsets in UX design and UI engineering.
                    "/>
          <ImgLeft img={Fig1} imgNum="01" imgCaption="Yext Cobalt Design System's sample style guide that is filled out with client font styles and colors." />
          <Paragraph paragraphTitle="Reverse-Engineering a Brand" 
                      paragraphBody="The UI Design team at Yext creates custom landing pages for Fortune 500 clients, from Taco Bell to Marriott International Hotel. This means that when you search for “Taco Bell near Union Square,” the first result will lead to a custom landing page for Taco Bell Union Square, designed by Yext with information that is up to date and customized to that particular location. In order to design these subpages, the team needs to pull client’s styles from their site into Sketch to design additional pages. Since not all clients have custom Sketch libraries, style guides or even their own design team, the team at Yext has to compile these styles manually, using the client’s site as a source of truth. 
                      "/>
          <Paragraph paragraphTitle="Cobalt Atomic Design Language" 
                      paragraphBody="The system by which the team collects the client's style guide is called Cobalt. It is an atomic design system that contains components the team might need to construct a location page. This includes the grid of the original website, known information architecture patterns, and so on. At the beginning, the team compiles style guide for the main colors, fonts and other design patterns scavenged from the clients website. This is demonstrated in Figure 1.
                      "/>
        </div>
        <div id="p2">
          <Phase phaseTitle="Defining the Pain Points of the Team's Workflow"/>
          <Paragraph paragraphTitle="Copy-Pasting Galore" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
          <ImgFull img={Fig2} imgNum="02" imgCaption="Current workflow of UI Designers at Yext. Highlighted in red are areas for improvement."/>
          <Paragraph paragraphTitle="Desired Workflow Acceleration" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
          <ImgFull img={Fig3} imgNum="03" imgCaption="Desired workflow adjustments thanks to the design accelerator."/>
          <Paragraph paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. "/>
          <HowMightWe howMightWe="How might we optimize the unique CSS-to-Sketch workflow of UI designers at Yext?"/>
        </div>
        <div id="p3">
          <Phase phaseTitle="Deciding on the Project's Scope"/>
          <Paragraph paragraphTitle="Identify the Medium of the Design Accelerator" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
          <Paragraph paragraphTitle="What properties define a font's identity?" 
                    paragraphBody="In order to accurately copy the essence of a font, we needed to determine what makes a font style in CSS. These properties must also have equivalents in Sketch. For instance, the font-family property of CSS should correspond to the Typefaces field in Sketch. The final list of properties that are most commonly specified in CSS and make a font instantly recognizable as a distinct style are as follows:
                    "/>
           <List listTitle="" listType='ul'
                listItems={["font-size",
                "color",
                "line-height",
                "font-weight"
                ]} /> 
        </div>
        <div id="p4">
          <Phase phaseTitle="Prototyping the Extension"/>
          <Paragraph paragraphTitle="Interface of the Modal" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
          <Paragraph paragraphTitle="Publishing to Chrome Store" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
        </div>
        <div id="p5">
          <Phase phaseTitle="Validation and Post-Internship Maintenance"/>
          <Paragraph paragraphTitle="Interface of the Modal" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
          <Paragraph paragraphTitle="Interface of the Modal" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
          <Paragraph paragraphTitle="Branding and Logotype" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. 
                    "/>
        </div>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

