import React from "react";
import "./tracker.css";
import "../../css/normalize.css";
import "../../css/global.css";
import logo from "../../images/logo.svg" 
import { Controller, Scene } from "react-scrollmagic"
import {Link} from "gatsby"

// window.onscroll = function() {myFunction()};
// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

export default props => (
    <>
            <Controller>
                <Scene triggerHook="onLeave" pin>
                    <section className="pinned">
                        <div className="tracker">
                            <Link to="/"><img className="tracker__logo" src={logo} alt=""/></Link>
                            <h4 className="tracker__head">{props.trackerHead} </h4>
                        </div>
                        <div className="phases">
                            {
                                Array.from(Array(props.phaseList.length).keys()).map((i) => {
                                    return <Controller>
                                        <Scene duration={() => { if (document.getElementById('p' + (i+1)) != null) return document.getElementById('p' + (i+1)).clientHeight } }
                                                    classToggle="phases__active" triggerElement={'#p' + (i+1)}>
                                            <h3 className="phases__txt">{props.phaseList[i]}</h3>
                                        </Scene>
                                    </Controller>;
                                })
                            }
                        </div>
                        {/* <div class="progress-bar" id="myBar"></div> */}
                    </section>
                </Scene>
            </Controller>
    </>

);  

// PHASE {i+1}: add this to "phases__txt if you want phases..."