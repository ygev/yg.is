import React from "react"
import Hero from "./images/hero.png"; 
import Glam1 from "./images/hero.png"; 
import Glam2 from "./images/hero.png"; 
import Glam3 from "./images/hero.png"; 
import Glam4 from "./images/hero.png"; 
import Glam5 from "./images/hero.png"; 
import Glam6 from "./images/hero.png"; 
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
import ListQuotes from "../../components/listQuotes/listQuotes"
import ListStats from "../../components/listStats/listStats"
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
      <div className="trunks">
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.trunks.heroCategory}
                    heroYear={Constants.trunks.heroYear}
                    heroDeliverable={Constants.trunks.heroDeliverable}
                    heroTitle={Constants.trunks.heroTitle}
                    heroSummary="Trunks is what happens when you chop down a family tree: an ancestry visualization tool inspired by rings on a tree trunk. "
                    btnGit="View Repository"
                    gitLink="https://github.com/ygev/trunks"/>
        </div>
        <Abstract glams={
                    [
                      [Glam1],
                      [Glam2, Glam3],
                      [Glam4, Glam5, Glam6]
                    ]
                  }
                  abstractRole="UI Designer · Developer" 
                  abstractTools="d3.js" 
                  abstractTime="21 days · Winter 2018" 
                  abstractBody="Through research about graph theory and with the use of the d3.js JavaScript library, I designed an open-source web application that visualizes familial bonds in the form of a sunburst chart, which resembles a chopped down trunk."/>
        <Tracker  phaseList={['UNDERSTAND', 'IDEATE', 'DEVELOP', 'DESIGN', 'VALIDATE']}
                  trackerHead={Constants.trunks.heroTitle}/>
        <div id="p1">
          <Phase phaseTitle="Understanding Ancestry Visualization"/>
          <Paragraph paragraphTitle="User Research" 
                    paragraphBody="In order to optimize the visualization of familial relations, I set out to research and identify common shortcomings of the traditional tree model. I chose to interview classmates in my Cultural Anthropology course about a recent assignment that involved analyzing family trees. I interviewed 5 people for 15 minutes each and asked each interviewee to design the perfect family tree at the end of our conversation. I recorded my findings and drew conclusions at the end of the user interviews."/>
           <Paragraph paragraphTitle="Identifying Paint-Points of the Tree-Model" 
                    paragraphBody="Three common issues kept being brought up: lack of scalability, visual verbosity and narrow scope, with focus primarily skewed towards one ancestral branch."/>
          <Paragraph paragraphTitle="Lack of Scalability" 
                    paragraphBody="The length and width of family trees are unpredictable and vary based on the data being mapped. When the ancestor has many siblings, the chart is primarily horizontal. On the other hand, when the ancestor has many descendants, the chart is primarily vertical. This variability is not accounted for when displaying charts in smaller viewport sizes, such as on a mobile screen. Even when viewed on a large screen, the window needs to scroll both vertically and horizontally, leading to poor user experience. Therefore, the tree model is outdated, not scalable or responsive and thus unsuited for the modern, digital user."/>
          <Paragraph paragraphTitle="Perceptual Density" 
                    paragraphBody="The horizontally and vertically variable design does not give a concise summary of data to the user at first glance. Hierarchy is not effectively communicated and requires more thinking of the user’s part. Usable design must be effortless to comprehend."/>
          <Paragraph paragraphTitle="Narrow Scope" 
                    paragraphBody="Because of the dimensional limitations of the tree model, the chart can only display one branch at a time, resulting in a skewed visual representation. A simple flaw of design, unilaterality, results in the omission of data, which is intellectually dishonest and defeats the purpose of displaying data in the first place."/>
        <HowMightWe howMightWe="How might we architect a breadth-first model of ancenstral data visualization?"/>
        </div>
        <div id="p2">
          <Phase phaseTitle="Developing the Trunk Model"/>
          <Paragraph paragraphTitle="Breadth-First Search" 
                    paragraphBody="All these commonly encountered issues can be encompassed by the conflict between Depth-First Search and Breadth-First Search. In thinking about tree chart models, it is easy to make a depth first analysis, but for family trees, I would argue that a breadth search approach is better, because it allows for more information about distant relatives. As one can see in the diagram, A, B, C and D are unaccounted for. The ideal system would account for all collateral ancestral relations. The challenge then lies in finding a visualization methodology that analyses and displays both the depth and the breadth of genealogical data."/>
           <Paragraph paragraphTitle="Applying Graph Theory" 
                    paragraphBody="In order to better understand my task, I turned to research on graph theory, namely the concept of a directed acyclic graph. A directed acyclic graph is a finite graph with no cycle, which means that there is a finite amount of vertices and edges, which can never loop. In the context of family trees, this means that no one can become their own ancestor. Therefore, I reframed family trees as a directed acyclic graphs, with a vertex for each family member and an edge for each parent-child relationship."/>
          </div>
          <div id="p3">
          <Phase phaseTitle="Making the Trunk Model Reality"/>
          <Paragraph paragraphTitle="JSON Structure" 
                    paragraphBody="The first step in redefining genealogical data visualization is translating from traditional family tree models into something a computer can easily comprehend. I used the algorithm of a directed acyclic graph to determine vertices and edges by matching up parents and common children in a JSON file through name-value pairs. I then calculated generations by analyzing the structural depth of parental relations. Below is an illustration of how the pair structure works in a traditional tree model and a JSON file."/>
          <Paragraph paragraphTitle="Picking a Data Visualization Library" 
                    paragraphBody="Why I picked D3"/>
        </div>   
        <div id="p4">
          <Phase phaseTitle="Designing the Look of the Trunk Model"/>
          <Paragraph paragraphTitle="Tangential Inspiration" 
                    paragraphBody="Instead of using the branch-system of ancestral relation, I drew inspiration from annual growth rings on tree trunks. The resulting visualization technique expanded multilaterally, rather than just to the left or right. As a result, I developed something I call the trunk model of genealogical data visualization. This radial model presents three distinct solutions to the issues posed by the traditional family tree."/>
           <Paragraph paragraphTitle="Validating the First Iteration" 
                    paragraphBody="The following is my first iteration for the web application Trunks, that uses the eponymous model in d3 to visualize some dynasties. I am using a color palette that is recommended by Colorbrewer 3.0, a colorblind-friendly and accessible palette generator. This iteration is the prototype one can view and work with live. While I am content with the model itself, the interface presented several issues that I am in the process of solving."/>
          <Paragraph paragraphTitle="Developing the Second Iteration" 
                    paragraphBody="THIS IS DESIGN ONLY. NOT CODED YET. The following are projected solutions to the issues presented in first web app iteration. This interface is more visual and, by including previews of other family trees, prompts the viewer to explore them. In addition, the json structure allows me to pull more data and visualizations from it, and allow the user to view general statistics about the dynasty. Moreover, one can explore various branches of the family in depth."/>
           </div>
           <div id="p5">
          <Phase phaseTitle="Testing the Model on Real Familial Lines"/>
          <Paragraph paragraphTitle="ForeBears" 
                    paragraphBody="Look at all the old families blah blah blah"/>
           <Paragraph paragraphTitle="Future Development" 
                    paragraphBody="Hook it up to Wikipedia. Here is what I tried and why it's crazy weird and hard. Wikipedia's weird format."/>
           </div>
        <Contact/>
        <Footer/>
      </div>
      
    )
  }
}

export default Index

