import React from "react"
import { Controller, Scene } from "react-scrollmagic"
import Header from "../components/header/header"
import InnerHero from "../components/innerHero/innerHero"
import Abstract from "../components/abstract/abstract"
import Tracker from "../components/tracker/tracker"
import Paragraph from "../components/paragraph/paragraph"

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <InnerHero heroCategory="ux design" heroYear="2019" heroDeliverable="Web App" heroTitle="Raising Awareness About Cybersecurity by Creating a Targeted Phishing Tool"/>
        <Abstract abstractRole="UI Designer · Developer" abstractTools="Sqlite.js · E.js · Express.js" abstractTime="14 days · September 2019" abstractBody="MICA Phisher is a proof-of-concept phishing site which spoofs Maryland Institute College of Art’s login page. It exposes the relative ease of creating tools to obtain sensitive information from unsuspecting users."/>

            <Tracker trackerHead="Phase 1: Understand"/>

        <Paragraph paragraphTitle="Surveying National Opsec Engagement" paragraphBody="According to a study by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost poll found that 84% of respondents use password managers, with only 10 percent of people saying that they don't due to perceived security risks."/>
        <Paragraph paragraphTitle="Surveying Students' Opsec Engagement" paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally surveyed 15 students and plotted the most insightful responses on a scale from positive to negative."/>
        <Paragraph paragraphTitle="Considering Mindless UI Patterns" paragraphBody="The main cause of phishing is the lack of user training. Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited."/>
        <Paragraph paragraphTitle="Surveying National Opsec Engagement" paragraphBody="According to a study by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost poll found that 84% of respondents use password managers, with only 10 percent of people saying that they don't due to perceived security risks."/>
        <Paragraph paragraphTitle="Surveying Students' Opsec Engagement" paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally surveyed 15 students and plotted the most insightful responses on a scale from positive to negative."/>
        <Paragraph paragraphTitle="Considering Mindless UI Patterns" paragraphBody="The main cause of phishing is the lack of user training. Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited."/>
        <Paragraph paragraphTitle="Surveying National Opsec Engagement" paragraphBody="According to a study by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost poll found that 84% of respondents use password managers, with only 10 percent of people saying that they don't due to perceived security risks."/>
        <Paragraph paragraphTitle="Surveying Students' Opsec Engagement" paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally surveyed 15 students and plotted the most insightful responses on a scale from positive to negative."/>
        <Paragraph paragraphTitle="YEEHAW PHASE 2 CHANGE HERE" paragraphBody="The main cause of phishing is the lack of user training. Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited."/>
        <Paragraph paragraphTitle="Surveying National Opsec Engagement" paragraphBody="According to a study by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost poll found that 84% of respondents use password managers, with only 10 percent of people saying that they don't due to perceived security risks."/>
        <Paragraph paragraphTitle="Surveying Students' Opsec Engagement" paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally surveyed 15 students and plotted the most insightful responses on a scale from positive to negative."/>
        <Paragraph paragraphTitle="Considering Mindless UI Patterns" paragraphBody="The main cause of phishing is the lack of user training. Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited."/>
        <Paragraph paragraphTitle="Surveying National Opsec Engagement" paragraphBody="According to a study by the Pew Research Center, as of 2016, most Americans kept track of their online passwords by either memorizing them or writing them down. However, with subsequent data breaches, such as Capital One and Equifax, the popularity of password managers rose up. In 2019 a Threatpost poll found that 84% of respondents use password managers, with only 10 percent of people saying that they don't due to perceived security risks."/>
        <Paragraph paragraphTitle="Surveying Students' Opsec Engagement" paragraphBody="Even Maryland Institute College of Art's website implemented two-factor authentication for their students in 2019 with variable feedback from the students. I have informally surveyed 15 students and plotted the most insightful responses on a scale from positive to negative."/>
        <Paragraph paragraphTitle="Considering Mindless UI Patterns" paragraphBody="The main cause of phishing is the lack of user training. Especially in college, with weak Wi-Fi signal, students are used to mindlessly entering their password more than once without looking at the URL twice. This mindless data entry is an aspect of human behavior that can and is exploited."/>
   </React.Fragment>
    )
  }
}

export default Index

