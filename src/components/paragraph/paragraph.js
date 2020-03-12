import React from "react";
import "./paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

function highlight(input) {

    var output = [];
    var start = input.indexOf("<<");
    var end = input.indexOf(">>");

    if (start == -1 || end == -1) {
        // No more special characters
        return input;
    } else {
        output.push(input.substring(0, start));
        output.push(<mark>{input.substring(start + 2, end)}</mark>);

        var inputLeft = input.substring(input.indexOf('>>') + 2)
        output.push(highlight(inputLeft))
    }
    
    return output.flat();
}

function linkAndHighlight(input) {

    var output = [];
    var start = input.indexOf("[[");
    var end = input.indexOf("]]");

    if (start == -1 || end == -1) {
        // No more special characters. Perform highlighting
        return highlight(input);
    } else {
        // highlight the non-link portion
        output.push(highlight(input.substring(0, start)));
        var linkUnparsed = input.substring(start + 2, end);
        var linkName = linkUnparsed.substring(0, linkUnparsed.indexOf('>'))
        var linkSource = linkUnparsed.substring(linkUnparsed.indexOf('>') + 1)
        output.push(<a class="paragraph__link" href={linkSource}>{linkName}</a>);

        var inputLeft = input.substring(input.indexOf(']]') + 2)
        output.push(linkAndHighlight(inputLeft))
    }
    
    return output.flat();
}

export default props => (
    <>
    {/* <Fade bottom delay={0} duration={300}> */}
        <div id={props.id} className="gridContainer">
            <section className="paragraph">
                <article className="paragraph__section">
                    <h4 className="paragraph__title">
                        {props.paragraphTitle}
                    </h4>
                    <p className="paragraph__body">
                        {linkAndHighlight(props.paragraphBody)} 
                    </p>
                </article>
            </section>
        </div>
    {/* </Fade> */}
    </>
);  
