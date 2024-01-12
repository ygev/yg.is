import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";

import Glam1 from "./images/Glam1.png";
import Glam2 from "./images/Glam2.png";
import Glam3 from "./images/Glam3.png";
import Glam4 from "./images/Glam4.png";


import Fig1 from "./images/Fig1.gif";
import Fig2 from "./images/Fig2.png";
import Fig3 from "./images/Fig3.png";
import Fig4 from "./images/Fig4.gif";
import Fig5 from "./images/Fig5.png";
import Fig6 from "./images/Fig6.gif";
import Fig7 from "./images/Fig7.gif";
import Fig8 from "./images/Fig8.png";
import Fig9 from "./images/Fig9.png";


import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgFull from "../../components/imgFull/imgFull"
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
            heroSummary="Few parts of Airtable have gone untouched by my cursor. From every top-of-funnel surface you can think of, to the depths of app configurations, I've designed for it all. Currently, I am the only designer on the design systems and mobile teams."
          />
        </div>

        <Abstract glams={
          [
            [Glam1],
            [Glam2],
            [Glam4]
          ]
        }
          abstractTeam="Growth · Design Systems · Mobile"
          abstractRole="Product Designer"
          abstractTools="Auditing, Prototyping, A/B Testing"
          abstractTime="2020 – Now"
          abstractBody="Few parts of Airtable have gone untouched by my cursor. From every top-of-funnel surface you can think of, to the depths of app configurations, I've designed for it all. Currently, I am the only designer on the design systems and mobile teams."
        />

        <Tracker phaseList={['GROWTH', 'CORE PRODUCT', 'DESIGN SYSTEMS', 'MOBILE', 'CULTURE']}
          trackerHead={Constants.airtable.heroTitle} />
        <div id="p1">
          <Phase phaseTitle="Growth" />
          <ImgLeft img={Fig1} padding="" blur="yes" imgNum="01" imgCaption="Favorite project from this era — the onboarding wizard." />
          <Paragraph paragraphTitle="Onboarding, Education and Experimental Delight"
            paragraphBody="Responsible for overhauling the entirety of our top of funnel design, from refreshing and re-routing our sign-up flow to conceiving brand new onboarding experiences. My onboarding experiments are [[discussed in this lengthy interview from Dopt>https://blog.dopt.com/airtable-onboarding-deep-dive]]. Try searching for my name!" />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={[
              "Why am I always compelled to skip every product tour?",
              "Are templates best suited as an accelerative or demonstrative activation lever?",
              "What was the most surprising activation lever? How did you discover it, and how did you leverage it?",
              "What's the most delightful flavor of Help documentation?",
              "Why does making the button bigger not work?",
              "Why are logged out users as important as logged in users?",
              "What makes a good wizard? 🪄"
            ]} />
        </div>
        <div id="p2">
          <Phase phaseTitle="Core Product" />
          <ImgLeft img={Fig2} padding="" imgNum="02" imgCaption="Favorite project from this era — redesigning all control panels in Airtable." />
          <Paragraph paragraphTitle="App Building Experience"
            paragraphBody="Temporarily embedded on a core product team, I represented the Design Systems crew to help develop a best-in-class canvas interaction model and a corresponding component library for configuration panels. Launching in October 2023, it's [[featured on Airtable's blog>https://blog.airtable.com/new-app-building-features/]]." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["How to decide when to expose controls on the canvas and when to use a dedicated control panel?",
              "How to ensure the user can distinguish what element is being targeted by the cursor?",
              "When selecting elements on the canvas, when is it important to show parent elements? What about sibling elements?",
              "What does it mean to be scannable?"
            ]} />
        </div>
        <div id="p3">
          <Phase phaseTitle="Design Systems" />
          <Paragraph paragraphTitle="Aero Design System"
            paragraphBody="Since January 2023, my team has worked together to launch the first version of our Aero Design System. As the sole design systems IC, I am responsible for facilitating contributions from other designers, as well as hosting weekly office hours to help designers leverage the system to its fullest." />
          <ImgLeft img={Fig3} padding="" imgNum="03" imgCaption="Aero's Announcement Page" />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["If a design system is a product, then who is the target audience? What is the go-to-market strategy? How far does this analogy extend?",
              "Why is process optimization more important than component optimization?",
              "Why are usage guidelines more important than a sticker sheet?",
              "How to balance custom user color theming with dark, light and high-contrast mode?",
              "What is the most versatile component of them all?"
            ]} />
        </div>
        <div id="p4">
          <Phase phaseTitle="Mobile" />
          <ImgLeft img={Fig4} padding="true" blur="true" imgNum="04" imgCaption="Project description witheld due to NDA" />
          <Paragraph paragraphTitle="Making Airtable Mobile-Native"
            paragraphBody="Since September 2023, I've been the sole designer supporting our mobile app experience on iOS and Android. Given the spatial constraint when designing for mobile, I employ time-based disclosure paradigms to adapt web features to smaller screens." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["How might we leverage the simplicity of mobile patterns to make web experiences more delightful and well-timed?",
              "Why is time more important than space in mobile design? In what ways can this manifest?",
              "What are some differences to keep in mind when designing for Android over iOS?"
            ]} />
        </div>
        <div id="p5">
          <Phase phaseTitle="Culture" />
          <ImgLeft img={Fig5} padding="" imgNum="05" imgCaption="Hack Day Enamel Pin" />
          <Paragraph paragraphTitle="Bootleg Swag"
            paragraphBody="I've been the go-to person for internal event branding on the design team. One identity I am most proud of is the one I created for our yearly Hack Day." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["How did a Japanese copier from the 1980s become such a printmaking staple?",
              "Why is PANTONE matching brand colors important?",
              "Why did the Growth team grow Corn and Sunflowers?"
            ]} />
          <ImgLeft img={Fig8} padding="" imgNum="06" imgCaption="Hack Day Riso Posters" />
          <ImgRight img={Fig9} padding="" imgNum="07" imgCaption="Hack Day Countdown" />
          <ImgRight img={Fig7} padding="" imgNum="08" imgCaption="Hack Day Announcement Poster" />
        </div>
        <More />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Index

