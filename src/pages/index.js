import React from "react"
import "./../css/global.css"
import Header from "./../components/header/header"
import HomeHero from "./../components/homeHero/homeHero"
import HomeTxt from "./../components/homeTxt/homeTxt"
import HomeBig from "./../components/homeBig/homeBig"
import Contact from "./../components/contact/contact"
import Footer from "./../components/footer/footer"

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="hero__wrapper">
            <Header/>
            <HomeHero/>
            <HomeTxt  lulzBrow="DICKS EVERYWHERE" 
                      heroTitle="Yana Gevorgyan is a smelly pookie today"/>
          </div>
          <HomeBig/>
          <Contact/>
          <Footer/>
        </div>
      </React.Fragment>
    )
  }
}

export default Index