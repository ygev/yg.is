import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";
import Glam1 from "./images/glam1.png"
import Glam2_webm from "./images/glam2.webm"
import Glam2_mp4 from "./images/glam2.mp4"
import Glam3 from "./images/glam3.gif"
import Glam4 from "./images/glam4.gif"
import Glam5 from "./images/glam5.gif"
import Glam6 from "./images/glam6.gif"
import Fig1 from "./images/fig1.svg"
import Fig2 from "./images/fig2.svg"
import Fig3 from "./images/fig3.png"
import Fig4 from "./images/fig4.png"
import Fig5 from "./images/fig5.png"
import Fig6 from "./images/fig6.svg"
import FigFlow from "./images/fig-flow.svg"
import Fig7 from "./images/fig7.svg"
import Fig8 from "./images/fig8.svg"
import Fig9 from "./images/fig9.png"
import FigSketch from "./images/fig-sketch.svg"
import IssueSubtle from "./images/issue-subtle.svg"
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


class Index extends React.Component {
  render() {
    return (
      <div className="phisher">
        <SEO title="MICA Phisher" description="MICA Phisher is a phishing site which spoofs the login page of the Maryland Institute College of Art and stores any password that is entered. Created by Yana G. as a proof-of-concept." />
        <Header />
        <div className="hero__wrapper">
          <InnerHero img={Hero} />
          <InnerTxt heroCategory={Constants.phisher.heroCategory}
            heroYear={Constants.phisher.heroYear}
            heroDeliverable={Constants.phisher.heroDeliverable}
            heroTitle={Constants.phisher.heroTitle}
            heroSummary="MICA Phisher is a proof-of-concept phishing site which spoofs the login page of the Maryland Institute College of Art."
          />
        </div>
        <Abstract
          glams={
            [
              [Glam1],
              [Glam2, Glam3],
              [Glam4, Glam5, Glam6]
            ]
          }
          abstractRole="UI Designer · Developer"
          abstractTools="Sqlite.js · E.js · Express.js"
          abstractTime="14 days · September 2019"
          abstractBody="MICA Phisher is a proof-of-concept phishing site which spoofs Maryland Institute College of Art’s login page. It exposes the relative ease of creating tools to obtain sensitive information from unsuspecting users."
          gitLink="https://github.com/ygev/mica-phisher" />
        <Tracker phaseList={['UNDERSTAND', 'DEFINE', 'BRAINSTORM', 'PROTOTYPE', 'VALIDATE']}
          trackerHead={Constants.phisher.heroTitle} />
        <div id="p1">
          <Phase phaseTitle="Understanding the State of Casual Operational Security" />
          <List listTitle="Research Questions" listType='ul'
            listItems={["How have attitudes towards OPSEC changed nation-wide, given recent data breaches and hacks?",
              "To what extent do people at Maryland Institute College of Art use password managers?",
              "To what extend do people mindlessly enter personal data into credible interfaces?"]} />
          <Paragraph paragraphTitle="Surveying National Opsec Engagement"
            paragraphBody="According to a [[study>https://www.pewresearch.org/internet/2017/01/26/americans-and-cybersecurity/]] by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost [[poll>https://threatpost.com/poll-password-managers-risky/142114/]] found that <<84% of respondents use password managers,>> with only 10 percent of people saying that they don't due to perceived security risks." />
          <ImgRight img={Fig1} imgNum="01" imgCaption="Pew Research Center, 2019" />
          <Paragraph paragraphTitle="Surveying Students' Opsec Engagement"
            paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally <<surveyed 15 students>> and plotted the most insightful responses on a scale from positive to negative." />
          <ImgRight img={Fig2} imgNum="02" imgCaption="Plotted testimonies from MICA students about the two-factor authentication system established in Fall 2019." />
          <Paragraph paragraphTitle="Considering Mindless UI Patterns"
            paragraphBody="<<The main cause of phishing is the lack of user training.>> Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited." />
        </div>
        <div id="p2">
          <Phase phaseTitle="Defining the Problem" />
          <Paragraph paragraphTitle=""
            paragraphBody="After researching Americans’ attitudes towards password management, surveying students and reading about behavioral patterns, I concluded the following:" />
          <Quote quote="Never needed extra security, so it’s totally unnecessary to me." />
          <List listTitle="Insights" listType='ul'
            listItems={["There is a rising awareness among Americans to use password managers, yet a small minority of people still get phished. ",
              "Students at the Maryland Institute College of Art largely do not use password managers, nor do they see the importance of two factor authentication that has been established in 2019.",
              "Students mindlessly enter their passwords without double checking the URL first. Frequent bugs in MICA’s system force students to enter their credentials twice, which is an explotable feature."]} />
          <ImgLeft padding="true" img={Fig3} imgNum="03" imgCaption="MICA Senior, Haley Clark, logging in to the school website." />
          <Paragraph paragraphTitle="Lack of Awareness"
            paragraphBody="Based on these insights, I’ve concluded there is not enough awareness about how easy it is to steal one’s data on campus compared to the national average presented by the Pew Research Center. Phisher websites can be generated programmatically and it is far too easy to store passwords in a database with malicious intentions, even by an art student like me. <<Students largely didnt care much for the two-factor authentication>> employed by the school after a number of phishing attacks. There was clearly not enough awareness around the campus, leading me to pose the following design challenge: " />
          <HowMightWe howMightWe="How might we raise on-campus awareness about phishing through an experiential medium while maintaining safety?" />
        </div>
        <div id="p3">
          <Phase phaseTitle="Brainstorming Awareness Campaigns" />
          <Paragraph paragraphTitle=""
            paragraphBody="I decided to think about how people unlearn poor user behaviors. After a <<mind-mapping exercise>>, I came up with three main ideas between which my ideal solution would lie." />
          <ImgRight img={Fig5} imgNum="04" imgCaption="Mind-mapping exercise that led to the project's three main foci." />
          <ImgLeft img={Fig4} imgNum="05" imgCaption="The solution lies at the intersection of Visual Routines, Experiential Learning and Gesamkunstwerk" />
          <Paragraph paragraphTitle="Visual Routines"
            paragraphBody="As discovered, people are relying on <<previously learned habits>> to fall for phishing tricks. In order to be effective, my solution needs to reveal the presence of these routines and allow people to notice them in the future." />
          <Paragraph paragraphTitle="Experiential Learning"
            paragraphBody="<<People grasp new technologies through experience.>> In order to be effective, my solution must be a piece that can be interacted with: something that either is or resembles a phishing website." />
          <Paragraph paragraphTitle="Gesamtkunstwerk"
            paragraphBody="The experiential quality of the solution will be successful because of the <<totality of the experience>>, or gesamtkunstwerk. The students will log in to the same login page they use every day, but instead of being taken to the home page, they will be taken to a page that creates a <<meta-commentary on their naiveté.>>" />
          <Paragraph paragraphTitle=""
            paragraphBody="With these parameters in mind, I set out to create what I think is an engaging experiment: a phishing site that targets students from the Maryland Institute College of Art and displays the number of passwords caught since launch once the user logs in. The site will consist of a <<login page>> and the previously mentioned <<meta page.>> The user will be redirected to the page after they enter their password and press enter, as per this user flow diagram:" />
          <ImgRight img={FigFlow} imgNum="06" imgCaption="Simple user flow for displaying the credentials caught by MICA Phisher" />
        </div>
        <div id="p4">
          <Phase phaseTitle="Prototyping Phishing Site Layout" />
          <ImgLeft img={[Fig6, Fig7, Fig8]} imgNum={["07", "08", "09"]} imgCaption={["MICA’s Communication Toolkit", "MICA’s Sub-Brands, now including Phisher.", "MICA’s Home Page displaying the most commonly used colors by the brand."]} padding="true" />
          <Paragraph paragraphTitle="Brandjacking"
            paragraphBody="I decided to use MICA’s branding designed by Pentagram as the visual language, identity and style guide for the alternate landing page. Like many style guidelines, it was available publicly and marketed as the [[MICA Communication Toolkit>https://www.mica.edu/offices-divisions/division-of-strategic-communications/toolkit/branding/]]. I created a logo in the style of MICA’s sub-brands to follow the <<common phishing practice of brandjacking.>>" />
          <Paragraph paragraphTitle=""
            paragraphBody="Although there is a plethora of colors to choose from, I picked the top three colors seen on [[MICA’s front page>https://www.mica.edu]], since this is something that has already been prioritized before me by the original creators of the site." />
          <Paragraph paragraphTitle="Wireframing the Displays"
            paragraphBody="I started sketching out the pass-word display screen. The following information needed to be displayed:" />
          <List listTitle="" listType='ul'
            listItems={["the number of credentials caught",
              "a running list of 10-15 credentials",
              "the Phisher logotype",
              "a disclaimer"]} />
          <ImgRight img={Fig9} imgNum="10" imgCaption="Finalizing wireframes." />
          <ImgRight img={FigSketch} imgNum="11" imgCaption="Screenshot of Sketch artboards for the final layout, designed with atomic design principles in mind." />
        </div>
        <div class="end" id="p5">
          <Phase phaseTitle="Validating the Design with Students" />
          <Paragraph paragraphTitle="Presenting the Phishing Site"
            paragraphBody="<<To assess the effectiveness of my idea before setting up the exhibition, I presented the site to a series of Maryland Institute College of Art seniors.>> The following is a compilation of comments I have received that could improve the design:" />
          <Issue img={IssueSubtle} issueTitle="Excessively Subtle Warning" issueItems={["I would have put my real password in.", "I did not read the top at all."]} />
          <Paragraph paragraphTitle="Future for the Concept"
            paragraphBody="<<An idea I had during the brainstorming phase was brought up during the critique: a phishing website generator.>> The concept is simple, a website URL will be processed and a clone will be created locally, containing the same markup, stylesheets and scripts. However, the password and login fields would be compromised and lead to an external site that will record the input and display it to the administrator. <<Although wanted by my classmates, the concept was a little bit too evil and legally gray for me to pursue. >> " />
        </div>
        <More />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Index

