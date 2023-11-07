import React from "react";
import "./marquee.css"
import "../../css/normalize.css"
import "../../css/global.css"
import Marquee from "react-fast-marquee";

export default function FooComponent() {
  var newPortfolio = <div className="marquee__prefix">· LAST UPDATED NOV 2023 ·<a className="marquee__spacing" target="_blank" rel="noopener noreferrer" href="https://github.com/ygev/yg.is">OPEN SOURCE</a></div>
  const linkSpam = Array(1000).fill(newPortfolio);

  return (
    <Marquee style={{ color: "black" }} className="marquee__wrap" pauseOnHover={true} children={linkSpam} gradient={false} direction={"left"}>

    </Marquee>
  );
}