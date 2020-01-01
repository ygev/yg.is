import React from "react"
import Header from "../components/header"
import InnerHero from "../components/inner/innerHero"

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <InnerHero />
   </React.Fragment>
    )
  }
}

export default Index
