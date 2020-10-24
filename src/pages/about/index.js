import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/me.jpg"; 
import "../../css/global.css"
import Header from "../../components/header/header"
import AboutHero from "../../components/aboutHero/aboutHero"
import AboutTxt from "../../components/aboutTxt/aboutTxt"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"

class Index extends React.Component {
  render() {
    return (
      <div className="home">
        <SEO title="About" description="Product designer by day, front-end engineer by night, when no one's watching. Love nothing more than hacking on sandbox products and software that facilitates human creativity. My heart belongs to startups. "/>
        <div className="hero__wrapper">
          <Header/>
          <AboutHero img={Hero}/>
          <AboutTxt />
        </div>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

