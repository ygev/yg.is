import React from "react"
import "../css/global.css";
import "../css/inner.css";
import Header from "../components/header/header"
import InnerHero from "../components/innerHero/innerHero"
import InnerTxt from "../components/innerTxt/innerTxt"
import Abstract from "../components/abstract/abstract"
import Tracker from "../components/tracker/tracker"
import Questions from "../components/questions/questions"
import Paragraph from "../components/paragraph/paragraph"
import Bullet from "../components/bullet/bullet"
import ImgRight from "../components/imgRight/imgRight"
import ImgFull from "../components/imgFull/imgFull"
import More from "../components/more/more"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero/>
          <InnerTxt heroCategory="ux design" 
                    heroYear="2019" 
                    heroDeliverable="Web App" 
                    heroTitle="Raising Awareness About Cybersecurity by Creating a Targeted Phishing Tool"/>
        </div>
        <Abstract abstractRole="UI Designer · Developer" 
                  abstractTools="Sqlite.js · E.js · Express.js" 
                  abstractTime="14 days · September 2019" 
                  abstractBody="MICA Phisher is a proof-of-concept phishing site which spoofs Maryland Institute College of Art’s login page. It exposes the relative ease of creating tools to obtain sensitive information from unsuspecting users."/>
        <Tracker trackerHead="Phase 1: Understand"/>
        <Questions questionTitle="Research Questions"
                   questionItem1="How have attitudes towards OPSEC changed nation-wide, given recent data breaches and hacks?" 
                   questionItem2="To what extent do students at Maryland Institute College of Art use password managers?" 
                   questionItem3="To what extend do people mindlessly enter personal data into credible interfaces?" />
        <Paragraph paragraphTitle="Surveying National Opsec Engagement" 
                   paragraphBody="According to a study by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost poll found that 84% of respondents use password managers, with only 10 percent of people saying that they don't due to perceived security risks."/>
        <ImgRight/>
        <Paragraph paragraphTitle="Surveying Students' Opsec Engagement" 
                   paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally surveyed 15 students and plotted the most insightful responses on a scale from positive to negative."/>
        <ImgFull/>
        <Paragraph paragraphTitle="Considering Mindless UI Patterns" 
                   paragraphBody="The main cause of phishing is the lack of user training. Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited."/>
        <Tracker trackerHead="Phase 2: Define"/>
        <Paragraph paragraphTitle="" 
                   paragraphBody="After researching Americans’ attitudes towards password management, surveying students and reading about behavioral patterns, I concluded the following:."/>
        <Questions questionTitle="Insights"
                   questionItem1="There is a rising awareness among Americans to use password managers, yet a small minority of people still get phished." 
                   questionItem2="Students at the Maryland Institute College of Art largely do not use password managers, nor do they see the importance of two factor authentication that has been established in 2019. " 
                   questionItem3="Students mindlessly enter their passwords without double checking the URL first. Frequent bugs in MICA’s system force students to enter their credentials twice, which is an explotable feature." />
        <More heroTitle="Optimizing Progress Trackers on AIGA Eye on Design With Obscure JavaScript Libraries" 
              heroCategory="UI" 
              heroYear="2020" 
              heroDeliverable="Sketch Plugin"></More>
        <Contact/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Index

