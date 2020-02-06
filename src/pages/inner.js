import React from "react"
import Header from "../components/header/header"
import InnerHero from "../components/innerHero/innerHero"
import Abstract from "../components/abstract/abstract"
import Tracker from "../components/tracker/tracker"
import Content from "../components/content/content"

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <InnerHero />
      <Abstract />
      <Tracker />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
   </React.Fragment>
    )
  }
}

export default Index
