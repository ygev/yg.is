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
import Fig4 from "./images/Fig6.jpg";
import Fig5 from "./images/Fig13.svg";
import Fig6 from "./images/Fig9.png";
import Fig7 from "./images/Fig8.png";
import Fig8 from "./images/Fig10.png";
import Fig9 from "./images/Fig7.png";
import Fig10 from "./images/Fig11.gif";
import Fig11 from "./images/Fig14.png";
import Fig12 from "./images/Fig15.png";
import Fig13 from "./images/Fig5.png";
import Fig14 from "./images/Fig16.png";
import Fig15 from "./images/Fig12.png";
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
          <Phase phaseTitle="Understanding a Unique Use Case for Sketch"/>
          <Paragraph paragraphTitle="Designing Backwards" 
                    paragraphBody="Normally, product prototyping tools like Sketch and Figma are used to create designs that will end up on the web, rather than copying what is on the web into the prototype. <<However, this is the use case at Yext,>> and I was tasked with creating a tool that performs this workflow more efficiently, using my skillsets in UX design and UI engineering.
                    "/>
          <ImgLeft img={Fig1} imgNum="01" imgCaption="Yext Cobalt Design System's sample style guide that is filled out with client font styles and colors." />
          <Paragraph paragraphTitle="Reverse-Engineering a Brand" 
                      paragraphBody="The UI Design team at Yext creates custom landing pages for Fortune 500 clients, from Taco Bell to Marriott International Hotel. This means that when you search for “Taco Bell near Union Square,” the first result will lead to a custom landing page for Taco Bell Union Square, designed by Yext with information that is up to date and customized to that particular location. <<In order to design these subpages, the team needs to pull client’s styles from their site into Sketch to design additional pages.>> Since not all clients have custom Sketch libraries, style guides or even their own design team, the team at Yext has to compile these styles manually, using the client’s site as a source of truth. 
                      "/>
          <Paragraph paragraphTitle="Cobalt Atomic Design Language" 
                      paragraphBody="The system by which the team collects the client's style guide is called Cobalt. It is an atomic design system that contains components the team might need to construct a location page. This includes the grid of the original website, known information architecture patterns, and so on. <<At the beginning, the team compiles style guide for the main colors, fonts and other design patterns scavenged from the clients website.>> This is demonstrated in Figure 1.
                      "/>
        </div>
        <div id="p2">
          <Phase phaseTitle="Defining the Pain Points of the Team's Workflow"/>
          <Paragraph paragraphTitle="Copy-Pasting Galore" 
                    paragraphBody="The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. <<Their CSS-to-Sketch workflow consists of relying heavily on their own memory and Chrome Dev Tools to manually find every property of a font and copy it to Sketch, from font-family to letter-spacing.>> This gets very tedious, especially when you are working on several clients a day and copying up to a dozen fonts per client. 
                    "/>
          <ImgFull img={Fig2} imgNum="02" imgCaption="Current workflow of UI Designers at Yext. Highlighted in red are areas for improvement."/>
          <Paragraph paragraphTitle="Desired Workflow Acceleration" 
                    paragraphBody="I compiled a workflow graphic for me to analyse and highlighted areas that were most stressful to the team. Afterwards, I thought about aspects of it can be automated. <<Copying-pasting between Chrome and Sketch are the most tedious task for the designers and is the easiest to automate.>> Unfortunately, I cannot do anything about switching windows between the two programs, other than limit the number of times one will have to do it.
                    "/>
          <ImgFull img={Fig3} imgNum="03" imgCaption="Desired workflow adjustments thanks to the design accelerator."/>
          <Paragraph paragraphBody="After generating an updated flowchart of the workflow adjustments, my problem was defined, and I conceived a How-Might-We statement to help direct my future brainstorming and prototyping vision."/>
          <HowMightWe howMightWe="How might we optimize the unique CSS-to-Sketch workflow of UI designers at Yext?"/>
        </div>
        <div id="p3">
          <Phase phaseTitle="Deciding on the Project's Scope"/>
          <ImgLeft img={Fig4} imgNum="04" imgCaption="Razer Naga Trinity, what I use for hotkeys in Sketch." />
          <Paragraph paragraphTitle="A Note on Design Accelerators" 
                    paragraphBody="I never truly appreciated plugins and hotkeys before starting to work in an environment as fast paced as Yext. Design accelerators can cut down on a lot of time. For instance, <<hotkeys can reduce a task from clicking through a series of nested menus to one click.>> In fact, some designers on my team, including me, use gaming mice with programmable hotkeys, such as the Razer Naga Trinity. Therefore, I kept in mind the team's love of hotkeys when designing this tool. 
                    "/>
          <Paragraph paragraphTitle="What medium is best for this design accelerator?" 
                    paragraphBody="Since the workflow deals with Chrome and Sketch, it seems that it will either have to be a Chrome Extension or a Sketch Plugin. After doing some research on the functionalities of both, a software engineering intern and I decided that it will have to be a combination of the two. <<We outlined what actions the extension will do in Chrome and what the plugin will do in Sketch:>>
                    "/>
          <ImgRight img={Fig5} imgNum="" imgCaption=""/>
          <Paragraph paragraphTitle="What properties define a font's identity?" 
                    paragraphBody="In order to accurately copy the essence of a font, we needed to determine what makes a font style in CSS. These properties must also have equivalents in Sketch. For instance, the font-family property of CSS should correspond to the Typefaces field in Sketch. The final list of properties that are <<most commonly specified in CSS and make a font instantly recognizable as a distinct style>> are as follows:
                    "/>
           <List listTitle="" listType='ul'
                listItems={["font-size",
                "color",
                "line-height",
                "font-weight",
                "text-decoration",
                "font-family",
                "font-style",
                "letter-spacing",
                "text-transform",
                "font-variant",
                "text-shadow"
                ]} /> 
        </div>
        <div id="p4">
          <Phase phaseTitle="Conceiving the Initial Release"/>
          <ImgLeft img={[Fig6, Fig7, Fig8]} imgNum="" imgCaption=""/>
          <Paragraph paragraphTitle="Downselection of Font-Properties for Display" 
                    paragraphBody="The primary interface of the Chrome extension is the <<modal with the Clipboard History that appears once the extension is activated.>> I identified font-family, font-weight and font-size as the <<three most important features of a font>> that will be displayed on the pop-up Clipboard History. The font properties that are currently in the clipboard will be highlighted in pink following the Google Material Design Guidelines and accompanied with a Material Icon of a copy symbol.
                    "/>
          
          <ImgRight img={Fig9} imgNum="" imgCaption=""/>
          <Paragraph paragraphTitle="Developing the Chrome Extension and Sketch Plugin" 
                    paragraphBody="After the interface was complete, I had a hand-off with Blake Quigley. Within a week, he developed the initial code base for both the Chrome Extension and the Sketch Plugin, <<incorporating dropdown animations we discussed during the handoff.>> The plugin entered the QA section of the development process and we asked the UI Design team to use it for a week and note any bugs on GitHub.
                    "/>
          <ImgRight img={Fig10} />
          <ImgLeft img={Fig12} padding="yes" imgNum="05" imgCaption="Published on the Chrome Web Store under Klepto."/>
          <Paragraph paragraphTitle="Publishing to Chrome Store" 
                    paragraphBody="After bug fixes and QA testing, the project was published to the Chrome Store under the moniker Klepto with an icon of a pink flamboyant raccoon. <<It was highly successful with the UI Design team and had 38 active users within a month of publishing, meaning that people out of Yext tried it out.>> 
                    "/>
        </div>
        <div id="p5">
          <Phase phaseTitle="Validation and Post-Internship Maintenance"/>
          <Paragraph paragraphTitle="A Paragon of Iterative Design" 
                    paragraphBody="After graduating from the internship, I gained more skills in both web development, plugin creation, as well as visual design. I noticed that no one was maintaining this extension and <<took initiative to redesign it to make it more usable.>> I forked the repository and fixed a number of bugs, as well as removed code that was not doing anything. <<After speaking with other designers, as well as observing the plugin myself, I identified the following visual design issues:>>
                    "/>
          <Issue img={Fig11} issueTitle="Poor Color Contrast" issueItems={["Cannot see white font-families.", "Light colored fonts invisible"]}/>
          <Issue img={Fig9} issueTitle="Poor Visibility of Modal" issueItems={["Most websites are light-mode.", "Cannot find modal easily."]}/>
          <Issue img={Fig6} issueTitle="No Directions for Hotkey" issueItems={["Don't know how to copy font.", "How to activate the extension?"]}/>
          <Paragraph 
                    paragraphBody="Additionally, <<the project lacked good usage directions>> and was never officially published to Sketch's plugin repository, which limited its accessibliity outside of the UI Design team's reach.
                    "/>
          <Paragraph paragraphTitle="Usability Overhaul" 
                    paragraphBody="I took time to address each problem and came up with a solution for the Chrome Extension modal that solves every issue noted by the users and myself during the heuristic evaluation.
                    "/>
           <ImgLeft img={Hero} imgNum="" imgCaption=""/>
           <List listTitle="Features that Solved the Usability Issues" listType='ul'
                listItems={["<<Dark-Mode Interface>> The dark mode interface proved to be more visible for users on most websites and was better suited for the plugin. Perhaps in the future, I can use the new CSS option to detect the user's screen-mode and toggle dark-mode whenever appropriate.",
                "<<Hotkey Directions in the Title>> I put the hotkey combination directly in the title of the modal, so that it was more clear what the next step was after activating the extension.",
                "<<Static Color for all Fonts>> Letting the color of all fonts display as white in the clipboard history allows all fonts to be perfectly visible. Selecting a black font will not obscure the font-family name due to poor color contrast. Moreover, this change makes for better accessibility, since that color combination is sure to pass WCAG AAA."
                ]} /> 

           
          <ImgLeft img={[Fig13, Fig14]} imgNum={["06","07"]} imgCaption={["Brainstorming the optimal file structure of the repo.", "Website design of Ditto."]}/>
          <Paragraph paragraphTitle="Creating a Monorepo" 
                    paragraphBody="Additionally, I cleaned up the file structure on GitHub and made it clear for those who are trying to read the code, or even download the latest release without relying on Chrome's Web Store and Sketch's Plugin Repository.
                    "/>
          <Paragraph paragraphTitle="Creating a Brand Identity and Website" 
                    paragraphBody="I dubbed my updated plugin Ditto, a name that has a less negative connotation than Klepto, and a name that the UI Design team really enjoyed during our brainstorming sessions. I teamed up with my visual designer friend, Amanda Yeh, and <<developed a promotional website for the plugin>> that displays a new brand identity based on the dark-mode of the new Chrome extension.
                    "/>
          <Paragraph paragraphTitle="Future Developments" 
                    paragraphBody="I hope to some day merge Ditto with another Chrome Extension I made: Banditto. <<Banditto fetches webfonts from websites and downloads them to your computer with a single click.>> As this can technically be used as a piracy tool, I feel uneasy going through with this, but the idea is still amusing to think about.
                    "/>
          <ImgRight img={Fig15} imgNum="08" imgCaption="Banditto in action, nabbing a font from Hoefler via a context-menu. Very unethical."/>
          <Paragraph paragraphTitle="Subsequent Response from Yext" 
                    paragraphBody="In late May of 2020, I have officially reached out to Tyler Anderson, the Senior UI Designer at Yext to see if I can take over the maintenance of the plugin, since no one has touched it since the end of my internship. He, as well as the Creative Director of the UI Team, Erin Pfiffner, were completely on board and commended my efforts to keep the plugin active. <<I am waiting on the final okay from Yext's legal team to push the updates to the Chrome Web Store!>>
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

