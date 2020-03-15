import React from "react"
import "./../css/global.css"
import Header from "./../components/header/header"
import HomeHero from "./../components/homeHero/homeHero"
import HomeTxt from "./../components/homeTxt/homeTxt"
import Contact from "./../components/contact/contact"
import Footer from "./../components/footer/footer"

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bg: ""};
  }

  handleHover = (event) => {
    this.setState({
      currentName: event.currentTarget.querySelector(".home__head").innerHTML.toLowerCase()
    })
  }

  render() {
    return (
      <React.Fragment>
        <main className="home">
          <div className="hero__wrapper">
            <Header/>
            <HomeHero currentHover={this.state.currentName ? this.state.currentName : ""} bg={this.state.bg}/>
            <HomeTxt  currentHover={this.state.currentName ? this.state.currentName : ""} bg={this.state.bg}
                      projects={['phisher', 'cluse', 'ditto', 'fisqual', 'trunks', 'semaphore', 'avam', 'bitshit', 'spiral', 'lissitzky', 'madlads', 'tarpits', 'yext', 'carpets', 'decred', 'arteca']}
                      mouseOverCallback={this.handleHover}/>
          </div>
          <Contact/>
          <Footer/>
        </main>
      </React.Fragment>
    )
  }
}

export default Index