import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png"; 
import Glam1 from "./images/Glam1.png"; 
import Glam2_mp4 from "./images/Glam2.mp4"; 
import Glam3_mp4 from "./images/Glam3.mp4"; 
import Glam2_webm from "./images/Glam2.webm"; 
import Glam3_webm from "./images/Glam3.webm"; 
import Glam4 from "./images/Glam4.png"; 
import Glam5 from "./images/Glam5.png"; 
import Glam6 from "./images/Glam6.png"; 
import Glam7 from "./images/Glam7.png"; 
import Glam8 from "./images/Glam8.jpg"; 
import Fig1 from "./images/Fig1.png"; 
import Fig2 from "./images/Fig2.png"; 
import Fig3 from "./images/Fig3.gif"; 
import Fig4 from "./images/Fig4.svg"; 
import Fig6 from "./images/Fig6.png"; 
import Fig7 from "./images/Fig7.png"; 
import Fig8 from "./images/Fig8.png"; 
import Fig9 from "./images/Fig9.svg"; 
import Fig10 from "./images/Fig10.png"; 
import Fig11 from "./images/Fig11.gif"; 
import Fig12 from "./images/Fig12.png"; 
import Fig13 from "./images/Fig13.png"; 
import Fig14 from "./images/Fig14.png"; 
import Fig15 from "./images/Fig15.png"; 
import Fig16 from "./images/Fig16.png"; 
import Fig18 from "./images/Fig18.png"; 
import Fig19 from "./images/Fig19.png"; 
import Fig20 from "./images/Fig20.png";
import Fig23 from "./images/Fig23.png";
import Fig24 from "./images/Fig24.gif";
import Fig25 from "./images/Fig25.gif";
import Fig26 from "./images/Fig26.gif";
import Fig27 from "./images/Fig27.png";
import Fig28 from "./images/Fig28.png";
import Fig29 from "./images/Fig29.png";
import Fig30 from "./images/Fig30.png";
import Fig31 from "./images/Fig31.png";
import Fig32 from "./images/Fig32.gif";
import Fig34 from "./images/Fig34.png";
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
import ListQuotes from "../../components/listQuotes/listQuotes"
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
      <div className="cluse">
        <SEO title="Cluse" description="Cluse is a Sketch Plugin that allows you to test the color contrast of your design for accessibility and make changes without interrupting your workflow. Officially endorsed by Sketch. 💫"/>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.cluse.heroCategory}
                    heroYear={Constants.cluse.heroYear}
                    heroDeliverable={Constants.cluse.heroDeliverable}
                    heroTitle={Constants.cluse.heroTitle}
                    heroSummary="Cluse is a Sketch Plugin that allows you to test the color contrast of your design for accessibility and make changes without interrupting your workflow. Officially endorsed by Sketch. 💫"
                    />
        </div>
        <Abstract glams={
                    [
                      [Glam1],
                      [Glam2, Glam7],
                      [Glam6, Glam3],
                      [Glam4, Glam5],
                      [Glam8]
                    ]
                  }
                  abstractTeam="Yana Gevorgyan"
                  abstractRole="UI Designer · Developer" 
                  abstractTools="Sketch API · JS · Objective C" 
                  abstractTime="3 months · December 2019" 
                  abstractBody="Cluse is a Sketch plugin that serves as a diagnostic tool to ensure that the design meets WCAG 2.0 color contrast standards. To address the lack of an accessibility workflow on design teams, I set out to create a tool that is free, open-source, lightweight and baked into the tools designers use most."
                  liveLink="https://cluse.cc"
                  gitLink="https://github.com/ygev/cluse"/>
        <Tracker  phaseList={['UNDERSTAND', 'DEFINE', 'DESIGN', 'DEVELOP', 'VALIDATE', 'PROMOTE', 'EXHIBIT']}
                  trackerHead={Constants.cluse.heroTitle}/>
        <div id="p1">
          <Phase phaseTitle="The State of Web Accessibility"/>
          <ImgLeft img={Fig1} padding="yes" imgNum="01" imgCaption="The three conformance levels as illustrated by color contrast. The original terminology is inaccurate, in my opinion. Single-A should never be considered Good."/>
          <Paragraph paragraphTitle="What is WCAG?" 
                    paragraphBody="Web Content Accessibility Guidelines, or <<WCAG>>, are a reference for developers and designers to make websites more accessible to people with disabilities. The guidelines outline accessibility best practices, such as alt-text in HTML and recommended line-spacing. <<WCAG evaluates accessibility via three conformance levels, from least to most accessible: A, AA, AAA.>>"/>
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
        <HowMightWe howMightWe="How might we develop inclusive design habits for the average Sketch user by optimizing their workflow?"/>
        </div>
        <div id="p2">
          <Phase phaseTitle="Defining the Project's Scope"/>
          <ImgLeft img={[Fig7, Fig8]} imgNum={["04", "05"]} imgCaption={["Proper contrast ratio at 3.82:1 and poor contrast ratio at 1.34:1.", "Passing contrast ratio at 3.02:1, Hex #3396FF, and failing contrast ratio at 2.95:1, Hex #3898FF."]} padding="true"/>
          <Paragraph paragraphTitle="Designers' Biggest Blunder" 
                    paragraphBody="WCAG has a number of criteria geared towards designers. <<The criterium most designers are familiar with is color contrast.>> Because of this familiarity, it is the easiest one to incorporate into your workflow. WCAG use a ratio to determine the sufficiency of color contrast between two elements. For instance, white-on-white would have a ratio of 1:1, whereas black-on-white results in 21:1. The minimum ratio to pass WCAG is 4.5:1. Exceptions apply to what is defined as Large and Bold text. See <<Figure 4>> for a demo."/>
          <Paragraph paragraphTitle="A Few Hex Values Away" 
                    paragraphBody="It is worthy to mention a curious aside about the nature of color contrast ratings. The difference between passing and not passing WCAG can be a few hex values away. To us, the passing color looks virtually the same as the failing color. To Target, the passing color would save them $6 million. This is demonstrated in <<Figure 5>>. The two shades look identical to us, but not to a lawyer."/>
          <Paragraph paragraphTitle="Contrast Checks and Workflow" 
                    paragraphBody="During my time on Yext’s consulting team, I’ve observed a well-defined accessibility workflow. All branded assets were rigorously tested for passing color contrast. The team used WebAIM’s online Contrast Checker. I've interviewed visual designers from other companies. I learned that the <<WebAIM Contrast Checker is the most common used tool in the industry>>. It is used by many notable designers, including Studio Rodrigo, the team behind Adobe Fonts. Although this method is the most common, it is the least efficient. Below is a workflow of how each contrast check took place:"/>
          <ImgFull img={Fig3} imgNum="06" imgCaption="Current contrast checking workflow of most design teams: a lot of tabbing back and forth that could be eliminated."/>
          <Paragraph paragraphTitle="" 
                    paragraphBody="Instead of spending up to ten minutes tabbing in-and-out of Chrome and pasting in dozens of HEX codes, one could <<optimize the process using a design accelerator, like a Sketch or Figma plugin.>> If we eliminate all the copy-pasting and tabbing back and forth, this is what the new workflow would look like:"/>
          <ImgFull img={Fig4} imgNum="07" imgCaption="Proposed contrast checking workflow with the use of a built-in design accelerator."/>
          <ImgLeft img={Fig9} imgNum="08" imgCaption="Competitive analysis findings of color contrast plugins big and small." padding="yes"/>
          <Paragraph paragraphTitle="Competitive Analysis" 
                    paragraphBody="Thankfully, there are a handful of color contrast plugins. After lurking the Sketch Plugins library, I compiled full chart of accessibility-based Sketch Plugins I've tested, sorted by feature. There was a clear leader in the field. <<A lot of people made small half-hearted plugins that just display a little notification.>> They give you a binary answer; you either pass WCAG or not. Stark, the leading plugin, did the same thing. Except it was wrapped up in a clean modal instead of a default Sketch notification."/>
          <Paragraph paragraphTitle="Stripping Stark Naked" 
                    paragraphBody="Based on my competitive analysis, Stark is the best Sketch accessibility plugin the internet had to offer. I was most impressed with its clear display of pass/fail ratios and flexibility; in addition to checking text, you could check contrast between two shape layers. <<However, as a premium and proprietary software, it lacked accessibility.>> Passing WCAG values should be universal and free."/>
          <ImgRight img={Fig10} imgNum="09" imgCaption="Testing Stark's website with Stark's plugin."/>
          <Paragraph paragraphTitle="🔍 Insights" paragraphBody="<<None of the plugins suggest substitutes for failing color combinations.>> This is a problem, because it still forces the designer to go back to WebAIM's Contrast Checker to procure passing hex values. <<The workflow remains a   long copy-pasting journey.>> Additionally, no Sketch plugin exists for checking the differentiation in hover states and descriptive link text. "/>
          <ImgLeft img={Fig11} imgNum="10" imgCaption="The Key" padding="yes"/>
          <Paragraph paragraphTitle="Slider's the Key" paragraphBody="People don't use the current color contrast plugins because WebAIM's Constrast Checker is still a better option. Why? The slider's the key. <<The ability to fix failing WCAG values empowers designers in a way that current Sketch plugins don't.>> I set out to create a tool that allows users to not only detect poor contrast, but to change it without minimizing their Sketch workspace. After determining what I want to make, I established my deliverables for the project: "/>
          <List listTitle="Deliverables" listType='ul'
                listItems={["<<Downloadable .sketchplugin File>> The plugin itself.", 
                                "<<Informational Website>> All good plugins ought to have one.",
                                "<<Exhibition Plan>> This project will be shown at MICA's ArtWalk Exhibition",
                                "<<Promotional Stickers>> Small and fun way to promote the plugin.",
                                "<<Documentation on Github>> Necessary for all open-source projects."]} />
        </div>
        <div id="p3">
          
          <Phase phaseTitle="Designing a Sketch-Esque Interface"/>
          <Paragraph paragraphTitle="Feature Downselection" paragraphBody="With 3 months to complete the project, I wanted to add everything that makes WebAIM's Contrast Checker great, and more. Although I minimized the number of features for the plugin to the essentials, I compiled a backlog of nice-to-have additions for the future."/>
          <ImgRight img={Fig12} imgNum="11" imgCaption="Isolating the Essentials"/>
          <ImgLeft img={[Fig16]} imgNum={"12"} imgCaption={["Drafting priority guidelines for the need-to-have features and drawing wireframes."
          ]} padding="true"/>
          <Paragraph paragraphTitle="Familiar Patterns" paragraphBody="<<Good plugins look like an extension of the software. They do not visually overpower the tool they supplement.>> I think back to Stark's huge modal that covered 25% of my 13&quot; MacBook screen. As my visual guide, I once again look towards the accessibility tool designers use most: WebAIM's Contrast Checker. I aimed to design a syncretic tool that functions like the Contrast Checker and fits into the Sketch visual language."/>
          <ImgRight img={Fig15} imgNum="13" imgCaption="Cluse's Interface = WebAIM's Contrast Checker masked as a Sketch modal."/>
          <Paragraph paragraphTitle="Iteratively Designing the Modal" paragraphBody="The most inobtrusive and realistic way to adapt a new external feature is to use the same technique as the software uses internally. <<In this case, Sketch displays auxilliary features as modals.>> After brainstorming wireframes based on my priority guidelines, I took to the artboard:"/>
          <Issue img={Fig13} issueTitle="Cluse UI 1.0 User Feedback" issueItems={["Why is the preview so prominent?", "Why is there no Cluse branding?", "What does the half-color mean?", "What's in the other tabs?"]}/>
          <Paragraph paragraphTitle="More Mac OS than Sketch" paragraphBody="The code for Sketch's UI consists of many native macOS frameworks. I followed Sketch's example and created a macOS-style modal for a start. With high hopes, I tabulated the feature groups for future development. I borrowed the half-colored scrubber from Adobe, so that one could keep track of the original color. The crown on the initial design is a large preview that takes up a quarter of the modal. Upon speaking with users, as well as my degree project advisor, issues were noted. <<The premature tabulation ensures scope creep.>> The preview is not representative of most elements that are tested for color contrast. The modal lacked Cluse identifiers. The half-color scrubber was an unfamiliar pattern to most users tested and was too small to click on."/>
          <Issue img={Fig19} issueTitle="Cluse UI 1.5 User Feedback" issueItems={["Three buttons for a simple modal?", "What's the point of two previews?", "Why are the hex inputs dark mode?", "Tautological section labels."]}/>
          <Paragraph paragraphTitle="More Sketch than Mac OS" paragraphBody="Cluse's next iteration was more Sketch than macOS. Instead of the dark-mode hex inputs, it mimicked the Sketch inputs. The Sketch-modal-style header was now adornished with Cluse's logo and some instructions. It also sported two previews, one for large text, and another for small text. <<However, the copywriting of the labels was unclear; the interface suffered from feature bloat and poor whitespace management.>> The next version aimed to trim down the fat."/>
          <Issue img={Fig14} issueTitle="Cluse UI 1.7 User Feedback" issueItems={["Resembles Sketch a lot.", "Why not live preview instead?", "The sliders are comically thin."]}/>
          <Paragraph paragraphTitle="Downsizing" paragraphBody="<<After removing the superfluous preview, I concluded that this was the safest stage to start the code.>> Most of my time was spent on connecting the Sketch API and my WebUI, a methodology to create plugin interfaces for Sketch Plugins using HTML/CSS. <<While reading the Sketch API documentation, I learned that I could do a live preview instead of an in-modal preview of the color contrast. As a result, the next interface change is a significant pivot in the priority guidelines.>>"/>
          <ImgLeft img={[Fig24]} imgNum={["14"]} imgCaption={["Demonstration of the new live preview feature."
          ]} padding="true"/>
          <Issue img={Fig18} issueTitle="Cluse UI 1.9 User Feedback" issueItems={["Cleaner colors.", "Sliders are too thick.", "Opportunity for compact layout.", "Repetitive instructions."]}/>
          <Paragraph paragraphTitle="Live Preview" paragraphBody="The live preview was a game changer. From this point on, when you moved the sliders, it affected the selected layers directly. With the blue box of placeholder text rendered obsolete, the UI was down to the essentials. I confidently proceeded with this design until the later stages of development."/>
          <Issue img={Fig20} issueTitle="Cluse UI 2.0 User Feedback" issueItems={["Compact, allows for extra features.", "Resembles Sketch's sidebar.", "Sketch-style inputs and sliders.", "Logistics at the bottom.", "Action items on top."]}/>
          <Paragraph paragraphTitle="Vertically Endowed Modal" paragraphBody="The final modal for the 1.0 release of Cluse adapted the verticality of Sketch's sidebar menu. This allowed for an easy addition of new features, such as undoing or swapping colors. This layout is unlikely to change in the future, since it meets all requirements of the project's scope. Boiled down to the essentials, it allows one to select a two layers and check or alter their color contrast."/>
        </div>
        <div id="p4">
          <Phase phaseTitle="Quirks of Sketch Plugin Development"/>
          <ImgLeft img={[Fig30, Fig25]} imgNum={["15", "16"]} imgCaption={["Notes on Sketch Plugin Development","The Hue Data Loss Bug"]} padding="yes" />
          <Paragraph paragraphTitle="Learning Curve" paragraphBody="Having no experience with making Sketch Plugins of this size, I took to Googling some tutorials. Surprisingly, there are very few resources on this sort of thing, especially when you're trying to make your own user interface. [[Matt Curtis' tutorial in Smashing Magazine>https://www.smashingmagazine.com/2019/07/build-sketch-plugin-javascript-html-css-part-1/]] is the most helpful guide I've found. I took meticulous notes on Sketch API, Objective-C and MochaJS concepts and seeked outside help from Kian Bradley, a developer at AWS."/>
          
          <Paragraph paragraphTitle="Bridging Sketch API and a Web UI" paragraphBody="Although my interface is minimal, its implementation is not as simple as it looks. The actions of my plugin are more than Sketch API can accomplish singlehandedly. Sketch API needs to be supplemented by CocoaScript and MochaJS. CocoaScript is Sketch's proprietary language bridging Sketch API and internal macOS frameworks. MochaJS is used to bridge internal macOS frameworks and JavaScript. This allows me to create the UI with HTML and CSS and write all the logic in JavaScript."/>
          <Paragraph paragraphTitle="Deprecated Role Model" paragraphBody="Like the design, my development journey took inspiration from WebAIM's Contrast Checker. Before I take on a role model, I try to find its vulnerabilities. <<After trying to break the Contrast Checker for a few minutes, I found a functionality-breaking bug.>> If one scrubs the slider either to the left-most or right-most side and returns it to the middle, all the color data disappears. The user remains with shades of gray. I downloaded the source files of the web page and looked at the algorithm used for calculating the contrast ratio, as well as changing the hex value. <<Based on the presence of a math( ) function, I concluded that we're dealing with some fine vintage code.>> "/>
          <ImgRight img={Fig26} padding="yes"/>
          <Paragraph paragraphTitle="Eliminating WebAIM's Hue Data Loss" paragraphBody="The loss of color data ocurred because WebAIM's code converted the hex user input into RGB for contrast ratio calculation. When you scrubbed the slider to the minimum brightness value, the RGB value was (0, 0, 0). This means that the original hue of the hex code is not retained. <<On the other hand, I used an HSL color model, which saves the hue. In HSL, the slider controlled by the user alters the luminosity value and preserves the hue, eliminating WebAIM's hue data loss.>> Then I filed a bug report to WebAIM."/>
        </div>
        <div id="p5">
          <Phase phaseTitle="Conducting Usability Testing"/>  
          <Paragraph paragraphTitle="Task Analysis" paragraphBody="In order to test Cluse's ease of use, I planned a task analysis. I created a test file to disseminate throughout my user testing group. In addition to testing basic actions, I want to test one variation: whether users select an artboard or the layers for testing. All my users were proficient in Sketch, although only one of them has used any sort of plugin before."/>
          <ImgRight img={Fig27} imgNum="17" imgCaption="Cluse Usability Assessment Sketch File"/>
          <Issue img={Fig29} issueTitle="Verbal Instructions for the Assessment" 
          issueItems={["Launch Cluse for Button 1", 
                                "Make Button 1 AA accessible", 
                                "Undo the change.",
                                "Make Button 1 AAA accessible",
                                "Save Button 1",
                                "Launch Cluse for Button 2",
                                "Swap the Colors on Button 2",
                                "Save Button 2",
                                "Now do the same actions to the next set of buttons."]}/>
        <ImgLeft img={Fig28} imgNum="18" padding="yes" imgCaption="Usability testing set-up with screen-sharing and video chat."/>
        <Paragraph paragraphTitle="What Users Said During a Cognitive Walkthrough" 
                    paragraphBody="The following are some of the most insightful quotes I have gathered from the usability test:"/>
        <ListQuotes listTitle="" listType='ul'
                listItems={["Nothing was confusing. It's a straightfoward kind of plugin.",
                  "I will say that when you asked me to Undo the change, <<I reached for ⌘+Z. It didn't work.>> Then I saw the undo button.",
                  "How does it distinguish text size?",
                  "It's very compact, looks like the Sketch sidebar."
                  ]} />
        <Paragraph paragraphTitle="🔍 Insights" paragraphBody="Most users followed the projected workflow. Two out of three users stumbled on the second part of the test with artboard-based buttons. Seeing that the button is an artboard, the users selected the artboard and tried to launch the plugin. However, when seeing that the plugin is not launching, they selected the background and foreground layers separately. This may be a learned behavior from the first test. <<This issue signals to me that I should create a functionality in Cluse to select artboards and layer groups as long as they have a background and a foreground.>> Another user's first instinct upon needing to Undo was to <<click ⌘+Z, but that shortcut does not exist in Cluse yet.>> That was such a no-brainer that I added it immediately after the test."/>
        </div>
        <div id="p6">
          
          <ImgLeft img={Fig31} imgNum="19" imgCaption="The evolution of Cluse's website through Sketch artboards."/>
          <Phase phaseTitle="Promoting Web Accessibility"/>
          <Paragraph paragraphTitle="Online Presence" paragraphBody="In addition to maintaining a readme on GitHub, a good way to establish an online presence for the plugin is to create a website for it. I used my accelerated process for building sites: priority guidelines, wireframes, then mid- to hi-fidelity mockups."/>
          <ImgRight img={Fig23} imgNum="20" imgCaption="Planning out and wireframing Cluse's website." />
          <ImgLeft img={Fig32} imgNum="21" imgCaption="Demonstration of the interactive slider on Cluse's website." padding="yes"/>
          <Paragraph paragraphTitle="Breaking the Fourth Wall" paragraphBody="Although most plugin websites were minimal, consisting of a few screenshots and a download link, I wanted to try something different. After some experimentation, <<I chose to highlight what separates this contrast plugin from the rest: a slider.>> My final iterations included an interactive slider on top of the site. <<Upon scrubbing back and forth, the entire background of the site changes and reveals whether the combination passes WCAG or not.>> This was also the most time-effective option, as I reused the very code Cluse uses to analyze color contrast. [[Feel free to mess with it on Cluse's site.>https://cluse.cc/]]"/>
          </div>
        <div id="p7">
          <Phase phaseTitle="How does one exhibit software?"/>
          <Paragraph paragraphTitle="Beyond Screen-Centric Exhibitions" paragraphBody="As Cluse is my degree capstone, it was to be exhibited in the senior show. This posed an interesting challenge. <<Cluse was a piece of software, unlike other exhibited projects rooted in graphic design.>> How do I exhibit software? I did not want to put a screen on a pedestal and call it a day, so I decided to think about the context in which Cluse would be used in. <<As a result, my exhibition aims to recreate a designer's workspace.>>  I had a large desk, a chair and a plant to accompany the monitor. Additionally, I painted the gallery wall Cluse-blue and plotted vinyl decals on it to mimic the Cluse's homepage."/>
          <ImgLeft img={Fig34} imgNum="22" imgCaption="Sticker preview cubes, stickers and the modal posters on the desk." />
          <Paragraph paragraphTitle="Guerilla Sticker Campaign" paragraphBody="To expand on my exhibition, I designed transparent stickers with the three WCAG conformance levels and had them printed on transparent sticker paper with white ink. Each pile of stickers on the table was accompanied by a cube showcasing an example of that kind of color contrast, as well as a corresponding Cluse modal poster above it. The stickers were disseminated to people as a form of a guerilla campaign against poor color contrast. The audience were encouraged to place the stickers in places around campus. For instance, examples of exemplary color contrast, would get the AAA sticker, whereas poor color contrast would receive the A sticker."/>
          <Paragraph paragraphTitle="Exhibition Feedback and Future Endeavors" paragraphBody="Feedback from faculty and students has been overwhelmingly positive. The new chair of Graphic Design at MICA proposed that it should be part of the curriculum of a UX class taught in the fall. I have started working on a Figma port for the plugin, so that it can be used in the classroom, starting Fall 2020. Otherwise, I will work on bug fixes as they come in and maintain the project as long as I can. [[Check GitHub for the latest release.>https://www.github.com/ygev/cluse]]"/> 
          <Paragraph paragraphTitle="Sketch Endorsement" paragraphBody="Since February 2020, Cluse has been officially endorsed by Sketch in [[a Facebook post>https://www.facebook.com/sketchapp/posts/were-big-fans-of-plugins-that-encourage-accessibility-and-inclusivity-in-design-/2682806741839651/]]. In May 2020, for Global Awareness Accessibility Day, I gave [[an interview to Sketch about Cluse,>https://blog.sketchapp.com/accessible-design-in-conversation-with-cluse-developer-yana-gevorgyan-38558381eb4b]] as well as my views on accessibility in the design sector."/>         
        </div>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

