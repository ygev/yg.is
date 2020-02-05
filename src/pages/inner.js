import React from "react"
import Header from "../components/header/header"
import InnerHero from "../components/innerHero/innerHero"
import Abstract from "../components/abstract/abstract"
import Tracker from "../components/tracker/tracker"

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <InnerHero />
      <Abstract />
      <Tracker />
   </React.Fragment>
    )
  }
}

export default Index
