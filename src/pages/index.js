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
    this.state = {bg: "blue"};
  }

  handleHover = (input) => {
    console.log("mouse over: " + JSON.stringify(input.currentTarget.innerHTML));
    this.setState({
      currentName: input.currentTarget.innerHTML.toLowerCase(),
      bg: "green",
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="hero__wrapper">
            <Header/>
            <HomeHero currentHover={this.state.currentName ? this.state.currentName : ""} bg={this.state.bg}/>
            <HomeTxt currentHover={this.state.currentName ? this.state.currentName : ""} bg={this.state.bg} mouseOverCallback={this.handleHover}/>
          </div>
          <Contact/>
          <Footer/>
        </div>
      </React.Fragment>
    )
  }
}

export default Index