import React from "react"
import Hero from "../../pages/phishing/images/hero.png"; 
import UserResearch from "../../pages/phishing/images/fb-messenger.svg"
import PwdStats from "../../pages/phishing/images/pwd_managers.svg"
import QuoteHaley from "../../pages/phishing/images/quote-haley.png"
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import Questions from "../../components/questions/questions"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgRight from "../../components/imgRight/imgRight"
import ImgFull from "../../components/imgFull/imgFull"
import ImgQuote from "../../components/imgQuote/imgQuote"
import More from "../../components/more/more"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"

class Index extends React.Component {
  render() {
    return (
      <div className="phishing">
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory="ux design" 
                    heroYear="2019" 
                    heroDeliverable="Web App" 
                    heroTitle="Raising Awareness About Cybersecurity with a Targeted Phishing Tool"
                    btnGit="View Repository"/>
        </div>
        <Abstract abstractRole="UI Designer · Developer" 
                  abstractTools="Sqlite.js · E.js · Express.js" 
                  abstractTime="14 days · September 2019" 
                  abstractBody="MICA Phisher is a proof-of-concept phishing site which spoofs Maryland Institute College of Art’s login page. It exposes the relative ease of creating tools to obtain sensitive information from unsuspecting users."/>
        <Tracker  phaseList={['UNDERSTAND', 'DEFINE', 'IDEATE', 'ITERATE', 'VALIDATE']}
                  trackerHead="Raising Awareness About Cybersecurity by Creating a Targeted Phishing Tool"/>
        <div id="p1">
        <Phase phaseTitle="Understanding the Problem"/>
        <Questions questionTitle="Research Questions"
                  questionItem1="How have attitudes towards OPSEC changed nation-wide, given recent data breaches and hacks?" 
                  questionItem2="To what extent do students at Maryland Institute College of Art use password managers?" 
                  questionItem3="To what extend do people mindlessly enter personal data into credible interfaces?" />
        <Paragraph paragraphTitle="Surveying National Opsec Engagement" 
                  paragraphBody="According to a study by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost poll found that 84% of respondents use password managers, with only 10 percent of people saying that they don't due to perceived security risks."/>
        <ImgRight img={PwdStats} imgNum="02" imgCaption="Pew Research Center, 2019"/>
        <Paragraph paragraphTitle="Surveying Students' Opsec Engagement" 
                  paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally surveyed 15 students and plotted the most insightful responses on a scale from positive to negative."/>
        <ImgFull img={UserResearch} imgNum="02" imgCaption="Plotted testimonies from MICA students about the two-factor authentication system established in Fall 2019."/>
        <Paragraph paragraphTitle="Considering Mindless UI Patterns"   
                  paragraphBody="The main cause of phishing is the lack of user training. Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited."/>
        </div>
        <div id="p2">
        <Phase phaseTitle="Defining the Problem"/>
        <Paragraph paragraphTitle="" 
                  paragraphBody="After researching Americans’ attitudes towards password management, surveying students and reading about behavioral patterns, I concluded the following:."/>
        <Questions questionTitle="Insights"
                  questionItem1="There is a rising awareness among Americans to use password managers, yet a small minority of people still get phished." 
                  questionItem2="Students at the Maryland Institute College of Art largely do not use password managers, nor do they see the importance of two factor authentication that has been established in 2019. " 
                  questionItem3="Students mindlessly enter their passwords without double checking the URL first. Frequent bugs in MICA’s system force students to enter their credentials twice, which is an explotable feature." />
        <ImgQuote img={QuoteHaley}/>
        </div>
        <div id="p3">
        <Phase phaseTitle="Ideation"/>
        <Paragraph paragraphTitle="Lorem Dipshit" 
                  paragraphBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis ipsum, tincidunt sit amet metus ac, aliquet accumsan ligula. Ut vestibulum odio commodo ligula ultrices, ac vulputate ante finibus. Proin vitae felis porttitor, condimentum turpis sed, commodo tortor. Maecenas ullamcorper neque sem, sit amet tincidunt nisl pellentesque vel. Integer pharetra dolor vel nunc tempus, a mattis augue vehicula. Cras facilisis enim et enim rutrum rhoncus. Aenean ornare lacus ut nulla tristique interdum. Aenean congue eros elit."/>
        </div>
        <div id="p4">
        <Phase phaseTitle="Prototyping Ideas"/>
        <Paragraph paragraphTitle="Lorem Dipshit" 
                  paragraphBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis ipsum, tincidunt sit amet metus ac, aliquet accumsan ligula. Ut vestibulum odio commodo ligula ultrices, ac vulputate ante finibus. Proin vitae felis porttitor, condimentum turpis sed, commodo tortor. Maecenas ullamcorper neque sem, sit amet tincidunt nisl pellentesque vel. Integer pharetra dolor vel nunc tempus, a mattis augue vehicula. Cras facilisis enim et enim rutrum rhoncus. Aenean ornare lacus ut nulla tristique interdum. Aenean congue eros elit."/>
        </div>
        <div id="p5">
        <Phase phaseTitle="Validating the Results"/>
        <Paragraph paragraphTitle="Lorem Dipshit" 
                  paragraphBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis ipsum, tincidunt sit amet metus ac, aliquet accumsan ligula. Ut vestibulum odio commodo ligula ultrices, ac vulputate ante finibus. Proin vitae felis porttitor, condimentum turpis sed, commodo tortor. Maecenas ullamcorper neque sem, sit amet tincidunt nisl pellentesque vel. Integer pharetra dolor vel nunc tempus, a mattis augue vehicula. Cras facilisis enim et enim rutrum rhoncus. Aenean ornare lacus ut nulla tristique interdum. Aenean congue eros elit."/>
        </div>
        <More heroTitle="Optimizing Progress Trackers on AIGA Eye on Design With Obscure JavaScript Libraries" 
              heroCategory="UI" 
              heroYear="2020" 
              heroDeliverable="Sketch Plugin"></More>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

